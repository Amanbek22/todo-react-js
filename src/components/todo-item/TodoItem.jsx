import { useState } from "react";
import css from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../../state/todoSlice";

const TodoItem = (props) => {
  // props ===  { text: "", status: false, id: 1 }
  const [isInputShow, setInputShow ] = useState(false)
  const [inputValue, setInputValue] = useState(props.text);
  const dispatch = useDispatch(); 

  const onDelete = () => {
    dispatch( todoSliceActions.deletTodo(props.id) )
  };
  const handleStatus = () => {
    dispatch( todoSliceActions.changeStatus(props.id) )
  }

  const onEdit = () => {
    setInputShow(!isInputShow)
  };

  const handleinputChange = (e) => {
    setInputValue(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    dispatch( todoSliceActions.editTodo( 
      { id: props.id,  newText: inputValue }
    ) );
    setInputShow(false)
  }
  return (
    <div className={css.wrapper}>
      {isInputShow ? (
        <form onSubmit={submit}>
          <input autoFocus onChange={handleinputChange} value={inputValue} type="text" placeholder="Todo" />
          <button>Save</button>
        </form>
      ) : (
        <label>
          <input
            onChange={handleStatus}
            type="checkbox"
            checked={props.status}
          />
          <span className={props.status === true ? css.text : ""}>
            {props.text}
          </span>
        </label>
      )}
      {/* <input type="text" placeholder="Todo" /> */}
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Del</button>
      </div>
    </div>
  );
};

export default TodoItem;
