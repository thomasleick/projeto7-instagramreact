import React from 'react';
import Post from './Post';
//import { posts } from '../data/posts';

const Posts = () => {

    const posts = [
        { from: "adorable_animals", content:"bear", likedBy:"barked", likes:"85.123", isVideo: true },
        { from:"meowed", content:"gato-telefone", likedBy:"respondeai", likes:"101.523", isVideo: false },
        { from:"barked", content:"dog", likedBy:"adorable_animals", likes:"99.159", isVideo: false },
    ];

    return (
        <div className="posts">
            {posts.map((post, i) => <Post key={`post${i}`} from={post.from} content={post.content} likedBy={post.likedBy} likes={post.likes} isVideo={post.isVideo} />)}
        </div>
    );
};

export default Posts;