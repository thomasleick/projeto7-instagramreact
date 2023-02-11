import React from 'react';
import Post from './Post';
//import { posts } from '../data/posts';

const Posts = () => {

    const posts = [
        {from:"meowed", content:"gato-telefone", likedBy:"respondeai", likes:"101.523"},
        {from:"barked", content:"dog", likedBy:"adorable_animals", likes:"99.159"},
    ];

    return (
        <div className="posts">
            {posts.map((post, i) => <Post key={`post${i}`} from={post.from} content={post.content} likedBy={post.likedBy} likes={post.likes}/>)}
        </div>
    );
};

export default Posts;