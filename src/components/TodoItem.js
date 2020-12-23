import React, {Component} from 'react'

export default class TodoItem extends Component {
    constructor()
    {
        super()
        this.state = {
            isChecked: false,
        }
    }

    handleChange = () => {
        this.setState(preState => {
            return {
                isChecked: !preState.isChecked
            }
        })

    }

    handleDelete = () => {

        this
            .props
            .deleteTodo(this.props.index)

    }

    handleEdit=()=>{
        this.props.editTodo(this.props.data.todo,this.props.index)
    }
    
    handleInput=e=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {

        const style = {
            textDecoration: 'line-through',
            color: 'gray'
        }

        return (
            <div className='todo-list'>
                <input
                    type='checkbox'
                    className='todo-checkbox'
                    checked={this.state.isChecked}
                    onChange={this.handleChange}/>

                <input
                    className='todo-input-list'
                    style={this.state.isChecked
                    ? style
                    : null}
                    type='text'
                    name='input'
                    value={this.props.data.todo}
                    onChange={this.handleInput}/>
                <button className='todo-delete-button' onClick={this.handleDelete}>Delete</button>
                <button className='todo-edit-button' onClick={this.handleEdit}>Edit</button>
            </div>
        )
    }
}
