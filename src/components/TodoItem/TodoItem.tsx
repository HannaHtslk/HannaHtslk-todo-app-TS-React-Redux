import React from "react";
import { Todo } from "../../todos";
import s from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import {
  deleteToDoThunk,
  editToDoThunk,
  toggleCompletedThunk,
} from "../../redux/todos/operations";
import { AppDispatch } from "../../redux/store";

const TodoItem: React.FC<{ todo: Todo; openItem: (todo: Todo) => void }> = ({
  todo,
  openItem,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompletedThunk(todo));
  };

  const handleDelete = () => {
    dispatch(deleteToDoThunk(todo.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={todo.completed}
        onChange={handleToggle}
      />
      <p className={s.title}>{todo.title}</p>
      <button className={s.btnEdit} onClick={() => openItem(todo)}>
        Edit
      </button>
      <button className={s.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
