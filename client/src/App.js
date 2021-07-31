import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = "http://localhost:5000";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const GetTodos = () => {
    axios
      .get(API_BASE + "/todos")
      .then((data) => setTodos(data.data))
      .catch((err) => console.error("Error: ", err));
    console.log(todos);
  };
  useEffect(() => {
    GetTodos();
  }, []);

  return (
    <div className="App">
      <h1>Welcome, Sithija</h1>
      <h4>Your Tasks</h4>

      <div className="todos">
        {todos.map((todo) => (
          <div key={todo._id} className="todo">
            <div className="checkbox"></div>
            <div className="text">{todo.text}</div>
            <div className="delete-todo">x</div>
          </div>
        ))}

        {/* <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">Do the Coding</div>
          <div className="delete-todo">x</div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
