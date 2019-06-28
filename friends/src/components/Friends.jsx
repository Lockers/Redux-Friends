import React from 'react';
import { getFriends } from '../Actions/actioncreators';
import { connect } from 'react-redux';
import { Friend } from './Friend'

export class Friends extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        if (this.props.gettingFriends === true) {
            return <h2>Getting Friends</h2>
        } else
            return (
                <div>
                    {
                        this.props.friends.map(friend => {
                            return <Friend friend={friend} />
                        })
                    }
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        gettingFriends: state.gettingFriends,
        friends: state.friends
    }
}

export default connect(mapStateToProps, { getFriends })(Friends)