import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Post from './post';
import * as actions from '../../actions/post';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
            this.props.dispatch(actions.getList(data.data));
        })
    }

    render() {
        const { listPost } = this.props;

        const list = [];
        listPost.map((post, index) => {
            list.push(<Post key={index} post={post}/>)
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listPost: state.post.list
    }
}

export default connect(
    mapStateToProps,
)(Home)