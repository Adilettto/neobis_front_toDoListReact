import "./App.css";
import Greeting from "./components/Greeting";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Greeting />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
