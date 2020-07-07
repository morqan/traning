import React, {Component} from "react";
import './todo-item-add-form.scss';

export default class TodoItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        console.log(e.target.value)
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        const label = this.state.label
        e.preventDefault();
        this.props.onAdd(label)
        this.setState({
            label: ''
        })
    }
    render() {

        return (
            <form className='todo-item-add-form d-flex' onSubmit={this.onSubmit}>
                <input type='text' className='form-control' onChange={this.onLabelChange}
                       value={this.state.label} placeholder='Search...'/>
                <button type='button' className='btn btn-outline-secondary'>
                    Add Item
                </button>
            </form>
        );
    }
}
