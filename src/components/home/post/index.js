import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Post extends Component {
    render () {
        const { post } = this.props;
        return (
            <Link to={`/post/${post.id}`} className="post">
                <p className="title">{post.title}</p>
            </Link>
        )
    }
}
