import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import TodoItem from "./components/todo-item/TodoItem";
import { useSelector } from "react-redux";

function App() {
  const arr = useSelector((state) => state.todos.data);

  const result = arr.reduce((acc, item) => {
    return acc + Number(item.status);
  }, 0);

  const todoLists = arr.map((item) => {
    return (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        status={item.status}
      />
    );
  });
  return (
    <div className="App">
      <Header length={arr.length} result={result} />
      <div className="content">
        <CreateTodo />
        <div className="todos-wrapper">
          {
            todoLists.length 
              ? todoLists 
              : <h1 className="watermark">Please add some Todo element</h1> 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
