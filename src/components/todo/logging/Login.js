import React, { Component } from 'react'
import Authentication from './AuthenticationService'

class Login extends Component {

    state = {
        username: 'noble',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    }
   
    handleChange = (event) => {
        // console.log(this.state)
        this.setState({
            [event.target.name]
            :event.target.value
        })
    }
    loginClicked = () =>{

        if(this.state.username === 'noble' && this.state.password === 'password'){
            Authentication.registerSuccessfulLogin(this.state.username, this.state.password);
           this.props.history.push(`/welcome/${this.state.username}`)
        //    this.setState({showSuccessMessage:true})
        //    this.setState({hasLoginFailed:false})
          
        } else{
        //console.log('Failed')
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
        }
    }
    // handleUsernameChange = (event) => {
    //  console.log(event.target.value)
    //  this.setState({
    //      username: event.target.value
    //  })
    // }

    // handlePasswordChange = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div> }
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.showSuccessMessage && <div>Login Successful</div> }
                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success " onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

// const ShowInvalidCredentials = (props) =>{
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// const ShowLoginSuccessMessage = (props) => {
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>

//     }
//     return null
// }

export default  Login