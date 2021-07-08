import React from 'react'
import { connect } from 'react-redux';
import { login } from '../Actions/actioncreators';
import  Friends  from '../components/Friends';
import { Route } from 'react-router'

 class Login extends React.Component {

    changeHandler = (event) => {
        event.preventDefault()
        const username = event.target['name'].value
        const password = event.target['password'].value

        const loginData = {
            username: username,
            password: password
        }
        console.log(loginData)
        this.props.login(loginData)
            .then(() => {
                this.props.history.push('/friends')
        })
        
    }

     render() {
         if (this.props.loggingIn === true) {
             return (
                <h1>Logging In</h1>
            )
        }
        if (this.props.loggedIn === true) {
            return (
                <div>
                    <h3>Logged in</h3>
                    <Route to='/friends' component={Friends} />
                </div>
            )
        } else
        return (
        <div>
            <form onSubmit={this.changeHandler}>
                <label>Username
                    <input
                        type='text'
                        name='name'
                        value='Lambda School'
                    />
                </label>
                <label>Password
                    <input
                        type='text'
                        name='password'
                        value='i<3Lambd4'
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggingIn: state.loggingIn,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { login })(Login)