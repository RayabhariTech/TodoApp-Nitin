import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoForm extends Component {
    constructor()
    {
        super()
        this.state = {
            todo: '',
            todoList: [],
            errorMessage: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({todo: event.target.value})

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.todo === '') {
            this.setState({errorMessage: "Enter a value"})

        } else {
            const newArrayList = [
                ...this.state.todoList, {
                    todo: this.state.todo
                }
            ]

            this.setState({todoList: newArrayList})

            this.setState({todo: '', errorMessage: ''})
        }

    }

    displayTodoList = value => {
        return (<div>{value.todo}</div>)
    }

    handleTodoDelete = ind => {
        const newData = this
            .state
            .todoList
            .filter((todo, index) => index !== ind)
        this.setState({todoList: newData})
    }

    handleTodoEdit = (text, ind) => {
        const newTodo = this
            .state
            .todoList
            .map((item, index) => {
                if (index === ind) {
                    return item.todo = text
                }
            })
        this.setState({todo: newTodo})
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
                        <button className='todo-add-button' onClick={this.handleSubmit}>Add</button>
                        <span className='error-message'>{this.state.errorMessage}</span>
                    </div>

                    {this
                        .state
                        .todoList
                        .map((value, index) => <TodoItem
                            key={index}
                            data={value}
                            index={index}
                            displayTodoList={this.displayTodoList}
                            deleteTodo={this.handleTodoDelete}
                            editTodo={this.handleTodoEdit}/>)
}
                </div>

            </div>
        )
    }
}

export default TodoForm
