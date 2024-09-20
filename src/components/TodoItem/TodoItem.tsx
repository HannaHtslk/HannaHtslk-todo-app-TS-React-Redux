import React from "react";
import { Todo } from "../../todos";
import s from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import {
  deleteToDoThunk,
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
    <div className={s.wrapper}>
      <div className={s.container}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={todo.completed}
          onChange={handleToggle}
        />
        <p className={s.title}>{todo.title}</p>
      </div>
      <div className={s.btnsWrapper}>
        <button className={s.btn} onClick={() => openItem(todo)}>
          Edit
        </button>
        <button className={s.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
