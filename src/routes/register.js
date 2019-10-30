import React from 'react';

class Register extends React.Component {
    state = {
        username : '',
        email : '',
        password : '',
        isAdmin : false,
    }

    onChange = (e) => {
    if(e.target.name === 'isAdmin')
    this.setState = ({[e.target.name] : e.target.checked});
    else {
        this.setState = ({[e.target.name] : e.target.value});
    }
    }

    render() {
    return(
        <div>
            <input
            name = 'Username'
            placeholder = 'Username'
            type ='text'
            onChange ={e => this.onChange(e)}
            value  = {this.state.username} />
            <br />
             
            <input 
            name = 'email'
            placeholder = 'Email'
            type ='text'
            onChange = {e =>this.onChange(e)}
            value = {this.state.email} />
            <br />

            <input 
            name = 'password'
            placeholder = 'Password'
            type ='password'
            onChange = {e =>this.onChange(e)}
            value = {this.state.password} />
            <br />

            <checkbox 
            name= 'isAdmin'
            type ='text'
            checked = {this.state.isAdmin}
            onChange = {e => this.onChange(e)}>
            Admin?
            </checkbox>
            <br />
            <button onClick = {() => this.onSubmit()} type = "primary">Register</button>
        </div>
    );
    }
}
export default Register;