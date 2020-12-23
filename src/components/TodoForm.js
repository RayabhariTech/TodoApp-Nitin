import React, {Component, isValidElement} from 'react'
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
        if (this.state.todo === '' || this.state.todo.trim() === '') {
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
        return (
            <div>{value.todo}</div>
        )
    }

    handleTodoDelete = (value, ind) => {

        const confirmMessage = window.confirm(`Are you sure, you want to delete :${value}`)
        if (confirmMessage === true) {
            const newData = this
                .state
                .todoList
                .filter((todo, index) => index !== ind)
            this.setState({todoList: newData})
        }
    }

    handleTodoEdit = (val,ind) => {
        const newTodo=this.state.todoList.reverse().find((value,index)=> index===ind)
        const newTodoRemove=this.state.todoList.reverse().filter((value,index)=>index!==ind)
        this.setState({
            todo:newTodo.todo
        })

        this.setState({
            todoList:newTodoRemove
        })
       
    };


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
                        .reverse()
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
