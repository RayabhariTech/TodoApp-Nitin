import React, {Component} from 'react'
import TodoItem from './TodoItem'
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class TodoForm extends Component {
    constructor()
    {
        super()
        this.state = {
            todo: '',
            todoList: [],
            errorMessage: '',
            loading: true,
            list: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({todo: event.target.value})

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.todo === '' || this.state.todo.trim() === '') {
            this.setState({errorMessage: "Enter a value"})

        } else {
            const newArrayList = [
                {
                    todo: this.state.todo
                },
                ...this.state.todoList
            ]

            this.setState({todoList: newArrayList})

            this.setState({todo: '', errorMessage: ''})
            this.setState({loading: true})
        }

    }

    displayTodoList = value => {
        return (
            <div>{value.todo}</div>
        )
    }

    handleTodoDelete = (value, ind) => {

        const newData = this
            .state
            .todoList
            .filter((todo, index) => index !== ind)
        this.setState({todoList: newData})
    }

    handleDelete = (value, index) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure to do this ${value}`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.handleTodoDelete(value, index)
                }, {
                    label: 'No',
                    onClick: () => console.log('No clicked')
                }
            ]
        });
    }

    handleEdit = (val, ind) => {
        const newTodo = this
            .state
            .todoList
            .find((value, index) => index === ind)
        // const newTodoRemove = this     .state     .todoList     .filter((value,
        // index) => index === ind)
        this.setState(preState => {
            return {
                loading: !preState.loading
            }
        })
        this.setState({list: newTodo.todo})

    };

    handleTodoEdit = (val, ind) => {
        confirmAlert({
            title: 'Confirm to Edit',
            message: `Are you sure to Edit this ${val}`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.handleEdit(val, ind)
                }, {
                    label: 'No',
                    onClick: () => console.log('No clicked')
                }
            ]
        });

    }

    render() {
        return (
            <div className='todo-container'>
                <div className='todo-form' autoComplete='off'>
                    <div className='form-heading'>
                        <h2>Todo List</h2>
                    </div>
                    <div className='input-button-box'>
                        <input
                            className="todo-input"
                            type='text'
                            value={this.state.todo}
                            onChange={this.handleInputChange}
                            placeholder="Add Items"/>
                        <button className='todo-add-button' onClick={this.handleSubmit}>+</button>
                        <span className='error-message'>{this.state.errorMessage}</span>
                    </div>
                    {this
                        .state
                        .todoList
                        .map((value, index) => <TodoItem
                            key={index}
                            data={value}
                            index={index}
                            load={this.state}
                            displayTodoList={this.displayTodoList}
                            deleteTodo={this.handleDelete}
                            editTodo={this.handleTodoEdit}/>)
}
                </div>
            </div>
        )
    }
}

export default TodoForm
