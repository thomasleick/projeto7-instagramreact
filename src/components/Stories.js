import React from 'react';
import Story from './Story';
//import { stories } from '../data/stories';

const Stories = () => {
    const stories = [
        { from: "9gag", img: "assets/img/9gag.svg" },
        { from: "meowed", img: "assets/img/meowed.svg" },
        { from: "barked", img: "assets/img/barked.svg" },
        { from: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
        { from: "wawawicomics", img: "assets/img/wawawicomics.svg" },
        { from: "respondeai", img: "assets/img/respondeai.svg" },
        { from: "filomoderna", img: "assets/img/filomoderna.svg" },
        { from: "memeriagourmet", img: "assets/img/memeriagourmet.svg" },
    ];
    return (
        <div className="stories">
            {stories.map( story => <Story key={story.from} from={story.from} img={story.img}/>)}

                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                    </div>
    );
};

export default Stories;