import React from "react";

const TodoList = (props) => {
    
    
return (
<div>
    <div className="todo_style">
        <button className="we"
        onClick={() => {
            props.onSelect(props.id);
        }}>×</button>
    <li> {props.text}</li>
    </div>
</div>
);

    

}
export default TodoList;