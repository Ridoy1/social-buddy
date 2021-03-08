import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `posts/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3><strong>Id: {id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show Component</button>
        </div>
    );
};

export default Post;