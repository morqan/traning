import React, {Component} from "react";
import './todo-app.scss'
import TodoList from "../../components/todo-list";
import TodoAppHeader from "../../components/todo-app-header";
import TodoSearchPanel from "../../components/todo-search-panel";
import ItemStatusFilter from "../../components/item-status-filter";
import TodoItemAddForm from "../../components/todo-item-add-form";

export default class TodoApp extends Component{
    newId = 100;
    createTodoItem = (label) => {
        return {
            label,
            done: false,
            important: false,
            id: this.newId++
        }
    }
    state = {
        todoData: [
            this.createTodoItem('create react app'),
            this.createTodoItem('drink tea'),
            this.createTodoItem('go to smoke'),
        ]
    }

    deletedItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [ ...todoData.slice(0,idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArr
            }
        })
    }
    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }
        })
    }
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        const newArr = [ ...arr.slice(0,idx), newItem, ...arr.slice(idx + 1)]
        console.log(newArr)
        return newArr

    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id , "done")
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id , "important")
            }
        })
    }
    render() {
        const todoData = this.state.todoData
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount
        return (
            <div className='container'>
                <div className='todo-app'>
                    <TodoAppHeader todo={todoCount} done={doneCount}/>
                    <div className='d-flex w-100'>
                        <TodoSearchPanel/>
                        <ItemStatusFilter/>
                    </div>
                    <TodoList todoData={todoData}
                              onDeleted={this.deletedItem}
                              onToggleDone={this.onToggleDone}
                              onToggleImportant={this.onToggleImportant}/>
                     <TodoItemAddForm onAdd={this.addItem}/>
                </div>
            </div>
        )
    }
}

