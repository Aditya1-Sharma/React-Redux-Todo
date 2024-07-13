import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

function EditTodo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

  // Function to handle editing a todo item
  const handleEdit = (index, todo) => {
    setEditIndex(index);
    setEditText(todo.text);
  };

  // Function to handle saving the edited todo item
  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const todo = todos[editIndex];
      dispatch(
        updateTodo({
          id: todo.id,
          text: editText,
        })
      );
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleSaveEdit}
                autoFocus
              />
            ) : (
              // <span onClick={() => handleEdit(index, todo)}>{todo.text}</span>

              <button onClick={() => handleEdit(index, todo)}>
                {todo.text}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditTodo;
