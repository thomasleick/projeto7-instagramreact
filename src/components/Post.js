import React from 'react';
import { useState } from 'react';

const Post = ({ from, content, likedBy, likes, isVideo, isSaved, isLiked }) => {

    const [saved, setSaved] = useState(isSaved === undefined ? false : isSaved);
    const [liked, setLiked] = useState(isLiked === undefined ? false : isLiked);
    const [tLikes, setTLikes] = useState(parseInt(likes));

    const toogleLikes = bool => {
        let newValue = tLikes;
        if (bool)
            ++newValue
        else
            --newValue
        setTLikes(newValue);
        setLiked(bool);
    }

    const doubleClicked = (e) => {
        e.preventDefault()
        if (liked)
            return 0;
        toogleLikes(true);
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={`assets/img/${from}.svg`} alt={from}/>
                    {from}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                {isVideo ? 
                    <video className="postContent" src={`./assets/video/${content}.ogv`} onDoubleClick={doubleClicked} controls data-test="post-image" /> : 
                    <img className="postContent" src={`./assets/img/${content}.svg`} alt={content} onDoubleClick={doubleClicked} data-test="post-image" />
                }
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={ liked ? "heart" : "heart-outline" } onClick={ () => toogleLikes(!liked) } 
                            style={ liked ? {color: "red"} : {color: "black"} } data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={ saved ? "bookmark" : "bookmark-outline" } onClick={ () => setSaved(!saved) } data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/img/${likedBy}.svg`} alt={likedBy}/>
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras {Intl.NumberFormat('pt-BR').format(tLikes)} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;