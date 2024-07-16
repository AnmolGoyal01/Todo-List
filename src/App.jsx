import { useEffect, useState } from "react";
import { TodoContext, TodoProvider, useTodo } from "./Contexts/index";
import { TodoForm, TodoItem } from "./Components/index";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Math.random(), ...todo }, ...prev]);
  };
  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  // to get data from local storage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("TodosList"));
    if (localData && localData.length > 0) {
      setTodos(localData);
    }
  },[]);

  // to push data to local storage
  useEffect(() => {
    localStorage.setItem("TodosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((eachTodo) => (
              <div key={eachTodo.id} className="w-full">
                <TodoItem todo={eachTodo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
