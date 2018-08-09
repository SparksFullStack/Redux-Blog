import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from "../actions/actions";

class PostsIndex extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return _.map(this.props.posts, post => {
            return <li className='list' key={post.id}>{post.title}</li>
        })
    }

    render(){
        console.log(this.props.posts);
        return (
            <div className="postsIndex">
                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);