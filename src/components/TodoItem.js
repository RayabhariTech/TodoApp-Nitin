import React, {Component} from "react";

export default class TodoItem extends Component {
    render() {
        const styleDeleteBtn = {
            marginRight: "5%",
            color: "red",
            border: "none",
            zoom: "1.5",
            cursor: "pointer"
        };

        const styleEditBtn = {
            color: "green",
            border: "none",
            zoom: "1.5",
            cursor: "pointer"
        };

        const todoList = this.props.todoList;
        const todoListItem = todoList.map((item) => {
            return (
                <div className="todo-list-container" key={item.key}>
                    <input type="checkbox" className="todo-checkbox"/>
                    <input
                        className="todo-input-list"
                        type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e) => {
                        this
                            .props
                            .editTodo(e.target.value, item.key);
                    }}
                        autoComplete="off"/>
                    <i
                        style={styleDeleteBtn}
                        className="far fa-trash-alt"
                        onClick={() => {
                        this
                            .props
                            .deleteTodo(item.text, item.key);
                    }}></i>

                    <i
                        style={styleEditBtn}
                        className={"fas fa-pen"}
                        type="button"
                        onClick={() => {
                        this
                            .props
                            .changeEditState();
                    }}></i>
                </div>
            );
        });

        return <div>{todoListItem}</div>;
    }
}