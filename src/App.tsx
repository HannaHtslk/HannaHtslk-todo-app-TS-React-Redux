import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList/TodoList";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { fetchAllToDosThunk } from "./redux/todos/operations";
import TodoForm from "./components/TodoForm/TodoForm";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllToDosThunk());
  }, [dispatch]);
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
