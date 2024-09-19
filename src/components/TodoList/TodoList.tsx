import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todos/selectors";
import s from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import React, { useState } from "react";
import { RootState } from "../../redux/store";
import { Todo } from "../../todos";
import Modal from "../Modal/Modal";
import EditTodo from "../EditTodo/EditTodo";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => selectTodos(state)) || [];
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editedData, setEditedData] = useState<Todo | null>(null);

  const openModal = (todo: Todo) => {
    setEditedData(todo);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditedData(null);
  };

  return (
    <div>
      <ul className={s.list}>
        {todos.map((todo: Todo) => {
          return (
            <li className={s.item} key={todo.id}>
              <TodoItem openItem={openModal} todo={todo} />
            </li>
          );
        })}
      </ul>
      {modalOpen && editedData && (
        <Modal onClose={closeModal}>
          <EditTodo closeModal={closeModal} editedTodo={editedData} />
        </Modal>
      )}
    </div>
  );
};

export default TodoList;
