import s from "./TodoForm.module.css";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addToDoThunk } from "../../redux/todos/operations";
import { nanoid } from "nanoid";
import { useState } from "react";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Number(nanoid()),
        title: newTodo,
        completed: false,
      };
      dispatch(addToDoThunk(todo));
      setNewTodo("");
    }
  };

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className={s.addTodoInput}
        placeholder="Enter new to do"
      />
      <button onClick={handleAddTodo} className={s.save}>
        Save
      </button>
    </div>
  );
};

export default TodoForm;
