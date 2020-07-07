import React from "react";
import './todo-list-item.scss'

 const TodoListItem = ({label, onDeleted, onToggleDone, onToggleImportant, important, done}) => {
    console.log(done)
     let classNames = ''
     if (done ){
         classNames += ' done';
     } else if (important){
         classNames += ' important';
     } else if (important=== true && done === true){
         classNames += 'done important';
     }
    return (
            <span className='todo-list-item'>
                <span onClick={onToggleDone} className={classNames} >{label}</span>
                <div>
                    <button onClick={onDeleted} className='btn btn-outline-danger mr-3 w-38'><i className='fa fa-trash' /></button>
                    <button onClick={onToggleImportant} className='btn btn-outline-success w-38'><i className='fa fa-exclamation' /></button>
                </div>
            </span>
        );

}

export default  TodoListItem

