import React from "react";
import './todo-app-header.scss';

const TodoAppHeader = ({todo, done}) => {

    return (
        <div className='app-header d-flex'>
            <h1>Todo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    );
};

export default TodoAppHeader
