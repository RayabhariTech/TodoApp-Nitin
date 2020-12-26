import React from 'react'
import './login.css'
import LoginPage from "./LoginPage";

class Login extends React.Component {
    constructor()
    {
        super()
        this.state = {
            userName: '',
            password: '',
            userNameErrorMessage: '',
            passwordErrorMessage: ''
        }
    }

    handleLoginFormSubmit = (event) => {
        event.preventDefault()
        const userName = this.state.userName
        const password = this.state.password
        if (userName === '' || password === '') {
            this.setState({
                userName: 'User name cannot be empty!', 
                password: 'Password cannot be empty!'})
        }

    }

    render() {
        return (<LoginPage
            stateData={this.state}
            handleLoginFormSubmit={this.handleLoginFormSubmit}/>)
    }

}

export default Login