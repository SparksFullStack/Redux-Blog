import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsNew extends Component {
    render(){
        return (
            <div>
                New Posts!
            </div>
        )
    }
}

export default connect()(PostsNew);