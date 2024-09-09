import React from 'react';
import ToDoItem from './ToDoItem';
const ToDoList = ({ todos, onToggleComplete, onDelete, onEdit }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};
export default ToDoList;
