import { useState } from "react";
import "./CreateTodo.css";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../../state/todoSlice";

const CreateTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault();
    dispatch( todoSliceActions.addTodo(value) )
    setValue("")
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submit} className="wrapper">
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo"
        autoFocus
      />
      <button>+Create</button>
    </form>
  );
};

export default CreateTodo;
