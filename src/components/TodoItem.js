import React, {Component} from 'react'

export default class TodoItem extends Component {
    constructor()
    {
        super()
        this.state = {
            isChecked: false
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
            .deleteTodo(this.props.data.todo, this.props.index)

    }

    // handleEdit = () => {
    //     this
    //         .props
    //         .editTodo(this.props.data.todo, this.props.index)
    // }

    handleInput = e => {
        this.props.editTodo(e.target.value,this.props.index)
    }

    render() {
        console.log(this.props.data)
        const styleInput = {
            textDecoration: 'line-through',
            color: 'gray'
        }

        const styleDeleteBtn = {
            marginRight: '5%',
            color: 'red',
            border: "none",
            zoom: '1.5',
            cursor: 'pointer'
        }

        const styleEditBtn = {
            color: 'green',
            border: "none",
            zoom: '1.5',
            cursor: 'pointer'
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
                    ? styleInput
                    : null}
                    type='text'
                    name='input'
                    value={this.props.load.loading
                    ? this.props.data.todo
                    : this.props.data.list}
                    onChange={this.handleInput}/>
                <i
                    style={styleDeleteBtn}
                    className="far fa-trash-alt"
                    onClick={this.handleDelete}></i>

                <i
                    style={styleEditBtn}
                    className="fas fa-pen"
                    type="button"
                    onClick={this.handleEdit}></i>
            </div>
        )
    }
}
