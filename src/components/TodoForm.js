import React, {Component} from 'react'
import TodoItem from './TodoItem'
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class TodoForm extends Component {
    constructor()
    {
        super()
        this.state = {
            todoList: [],
            errorMessage: '',
            isEditing: false,
            currentItem: {
                text: '',
                key: ''
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const items = this.state.currentItem;
        if (items.text === '' || items.text.trim() === '') {
            this.setState({errorMessage: "Enter a value"})
        } else {
            const newArrayList = [
                items, ...this.state.todoList
            ]

            this.setState({
                todoList: newArrayList,
                errorMessage: '',
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    handleInputChange = (event) => {
        this.setState({
            currentItem: {
                text: event.target.value,
                key: Date.now()
            }
        })

    }

    handleTodoDelete = (key) => {

        const newData = this
            .state
            .todoList
            .filter(item => item.key !== key)
        this.setState({todoList: newData})
    }

    handleDelete = (value, key) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure to do this ${value}`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.handleTodoDelete(key)
                }, {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    }

    handleTodoEdit = (text, key) => {
        if (this.state.editing === true) {
            const items = this.state.todoList;
            items.map(item => {
                if (item.key === key) {
                    item.text = text;
                }
            })
            this.setState({todoList: items})
        }
        this.setState({
            currentItem: {
                text: '',
                key: ''
            }
        })
    };

    handleEdit = () => {
        this.setState(preState => {
            return {
                editing: !preState.editing
            }
        })
    }

    render() {
        return (
            <div className='todo-container'>
                <div className='todo-form' autoComplete='off'>
                    <div className='form-heading'>
                        <h2>Todo List</h2>
                    </div>
                    <div className='form-list'>
                        <input
                            className="todo-input"
                            type='text'
                            value={this.state.currentItem.text}
                            onChange={this.handleInputChange}
                            placeholder="Add Items"/>
                        <button className='todo-add-button' onClick={this.handleSubmit}>+</button>
                        <span className='error-message'>{this.state.errorMessage}</span>
                    </div>
                    <TodoItem
                        todoList={this.state.todoList}
                        deleteTodo={this.handleDelete}
                        editTodo={this.handleTodoEdit}
                        changeState={this.handleEdit}/>
                </div>
            </div>
        )
    }
}

export default TodoForm
