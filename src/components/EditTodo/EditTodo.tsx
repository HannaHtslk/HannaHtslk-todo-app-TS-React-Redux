import React, { useState } from "react";
import { Todo } from "../../todos";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { editToDoThunk } from "../../redux/todos/operations";

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
    <div>
      <h1>Edit your 'To Do' here</h1>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditTodo;
