import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCart, actChangeMessage } from './../actions/index';
import Message from '../components/Message';
class MessageContainer extends Component {

    render() {
        var { message } = this.props;
        return (
           <Message message={message} />
        );
    }
}


// lay du lieu tu Store (reducer chua all -> file index)
const mapStateToProps = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessageContainer);