import React from 'react';
import { login, getFriends } from './Actions/actioncreators';
import { connect } from 'react-redux';
import { Friends } from './components/Friends'

export class App extends React.Component {
  
  componentDidMount() {
    const credentials = {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    }
    this.props.login(credentials)
    this.props.getFriends()
  }
  
  render() {
    return (
      <Friends friends={this.props.friends} />
    )
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    loggingIn: state.loggingIn,
    friends: state.friends
  };
}


export default connect(
  mapStateToProps,
  { login, getFriends },
)(App)
