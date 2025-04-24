import { useState} from 'react';
import Task from './Components/Task';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  
  const addTask = () => {
    const cleanedText = newTask.trim();
    
    if (!cleanedText) return;
  
    const newTaskObject = {
      text: cleanedText,
      completed: false
    };
  
    const updatedTasks = [...tasks];
    updatedTasks.push(newTaskObject); 
  
    
    setTasks(updatedTasks); 
    setNewTask('');
  };

  const deleteTask = (indexToDelete) => {
    const currentTasks = [...tasks];
    currentTasks.splice(indexToDelete, 1);
    setTasks(currentTasks);
  };
  
  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    const taskToUpdate = updatedTasks[index];
  
    const updatedTask = {
      ...taskToUpdate,    text: newText    
       
    };
    
    updatedTasks[index] = updatedTask;
    
  
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h1>TaskTrackr</h1>
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task..."
          onClick={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
  );
}


export default App;