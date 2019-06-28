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
    console.log(this.props.friends)
  }
  
  render() {
    return (
    <div>
        { 
          //  this.props.friends.map(friend => {
          //     return <Friends friend={friend} />
            
          // })
        }
    </div>
    )
}
}
const mapStateToProps = state => {
  console.log(state)
  return {
    
    loggedIn: state.loggedIn,
    loggingIn: state.loggingIn,
    friends: state.friends,
    gettingFriends: state.gettingFriends
  };
}


export default connect(
  mapStateToProps,
  { login, getFriends },
)(App)
