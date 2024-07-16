import React, { useState } from "react";
import { useTodo } from "../Contexts";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const { addTodo } = useTodo();

  const changeHandeller = (e) => {
    setTodoMsg(e.target.value);
  };
  const submitHandeller = (e) => {
    e.preventDefault();
    if (todoMsg && todoMsg.length > 0) addTodo({ todoMsg, completed: false });
    setTodoMsg("");
  };

  return (
    <form onSubmit={submitHandeller} className="flex">
      <input
        value={todoMsg}
        onChange={changeHandeller}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
