import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchPosts } from "../actions/actions";
import styles from "../styles";


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
            return <li style={styles.listItems} key={post.id}>{post.title}</li>
        })
    }

    render(){
        console.log(this.props.posts);
        return (
            <div>
                <div>
                    <Link to="/posts/new" style={styles.buttons}>
                        Add a Post
                    </Link>
                </div>
                <h1 style={styles.headers}>Posts</h1>
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