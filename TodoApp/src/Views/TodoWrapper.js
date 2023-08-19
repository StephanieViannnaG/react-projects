import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import Header from "../Layouts/Header";
import { EditTodoForm } from "./EditTodoForm";
import { GetAllTask } from "../redux/actions/UserTaskManager/GetAllTask";
import { CreateTask } from "../redux/actions/UserTaskManager/CreateTask";
import { EditTask } from "../redux/actions/UserTaskManager/EditTask";
import { DeleteTask } from "../redux/actions/UserTaskManager/DeleteTask";
import "./TodoComp.css";

const TodoWrapper = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    dispatch(GetAllTask());
  }, []);

  const getTask = useSelector((state) => state.GetAllTask.GetAllTask);

  useEffect(() => {
    if (getTask) {
      setTodos(getTask);
    }
  }, [getTask]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    dispatch(
      CreateTask({
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    dispatch(DeleteTask(id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
    dispatch(
      EditTask({
        id: id,
        task: task,
        completed: false,
        isEditing: false,
      })
    );
  };

  return (
    <>
      <Header />
      <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    </>
  );
};

export default TodoWrapper;
