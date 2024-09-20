import React, { useState } from "react";
import { Todo } from "../../todos";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { editToDoThunk } from "../../redux/todos/operations";
import s from "./EditTodo.module.css";

const EditTodo: React.FC<{
  closeModal: () => void;
  editedTodo: Todo;
}> = ({ closeModal, editedTodo }) => {
  const [newTitle, setNewTitle] = useState<string>(editedTodo.title);
  const dispatch: AppDispatch = useDispatch();
  const handleSave = () => {
    dispatch(editToDoThunk({ ...editedTodo, title: newTitle }));
    closeModal();
  };
  return (
    <div className={s.wrapper}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className={s.editInput}
      />
      <button onClick={handleSave} className={s.save}>
        Save
      </button>
    </div>
  );
};

export default EditTodo;
