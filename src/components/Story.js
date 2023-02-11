import React from 'react';

const Story = ({ from, img }) => {
    return (
        <div className="story">
            <div className="imagem">
                <img src={img} alt={from}/>
            </div>
            <div className="usuario">
                {from}
            </div>
        </div>
    );
};

export default Story;