import React, { useState } from 'react';
import Header from './components/Header'; 
import ToDoList from './components/ToDoList'; 
import './App.css'; 
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };
  const handleRemoveAll = () => {
    setTodos([]);
  };
  return (
    <div className="app-container">
      <Header />
      <div className="add-activity">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new activity"
        />
        <button className="add" onClick={handleAddTodo}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />
      {todos.length > 0 && (
        <button className="remove-all" onClick={handleRemoveAll}>Remove All</button>
      )}
    </div>
  );
};
export default App;
