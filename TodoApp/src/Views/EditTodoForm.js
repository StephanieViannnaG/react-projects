import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [option, setOption] = useState("");

  const options = [
    { value: "created", label: "Created" },
    { value: "inProgress", label: "InProgress" },
    { value: "onHold", label: "OnHold" },
    { value: "completed", label: "Completed" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id, option);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm" id="form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <select
        name="taskStatus"
        id="taskStatus"
        onChange={(e) => setOption(e.target.value)}
        className="statusSelect"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
