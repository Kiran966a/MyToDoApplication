import React, { useState } from 'react';
  const ToDoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="save" onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </span>
          <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};
export default ToDoItem;
