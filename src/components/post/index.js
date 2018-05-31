import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/post';

class Post extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;   
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(post => {
            this.props.dispatch(actions.getPost(post.data));
        })
    }
    
    render() {
        const { post } = this.props;

        return (
            <div id="post-page">
                <div className="detail-post">
                    <p>Title: {post.title}</p>
                    <p>Content: {post.body}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.post
    }
}

export default connect(mapStateToProps)(Post)