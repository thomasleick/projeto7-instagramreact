import React from 'react';
import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar';

const Body = () => {
    return (
        <main>
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </main>
    );
};

export default Body;