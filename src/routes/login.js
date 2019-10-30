import React, {Component} from 'react';


class Login extends React.Component {
    state = {
        email : '',
        password: '',
    }

    onChange = (e) => {
        this.setState = ({[e.target.name] : e.target.value})
    }

    render() {
        return(
            <div>
                <input 
                name = 'email'
                type= 'text'
                placeholder = 'Email'
                onChange = {e => this.onChange(e)}
                value = {this.state.email} />
                <br />

                <input 
                name = 'password'
                type = 'password'
                placeholder = 'Password'
                onChange = {e => this.onChange(e)}
                value = {this.state.password} />
                <br />
                <button onClick = {() => this.onSubmit()} type = "primary">Login</button>
            </div>
        );
    }
}
export default Login;