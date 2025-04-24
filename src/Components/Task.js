import { useState } from 'react';
import '../App.css';

const Task = ({ task, index, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    const cleanedText = editedText.trim();
    if (!cleanedText) return;
    onEdit(index, cleanedText);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div className='btn'>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;