import React from "react";
import './todo-list.scss'
import TodoListItem from "../todo-list-item";

const TodoList = ({todoData, onDeleted, onToggleDone, onToggleImportant}) => {
    console.log(todoData)
    const elements = todoData.map((item) =>{
        const {id, done, ...itemProps} = item
        console.log(done)
        return (
            <li className='list-group-item' key={id}>
                <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}
                done={done}/>
            </li>
        )
    })

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default TodoList
