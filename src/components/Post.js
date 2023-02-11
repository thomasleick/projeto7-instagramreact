import React from 'react';
import { useState } from 'react';

const Post = ({ from, content, likedBy, likes, isVideo }) => {

    const [saved, setSaved] = useState(false);
    const [liked, setLiked] = useState(false);
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
                    <video src={`./assets/video/${content}.ogv`} onDoubleClick={ liked ? "" : () => toogleLikes(true)} controls data-test="post-image" /> : 
                    <img src={`./assets/img/${content}.svg`} alt={content} onDoubleClick={ liked ? "" : () => toogleLikes(true) } data-test="post-image" />
                }
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={ liked ? "heart" : "heart-outline" } onClick={ liked ? () => toogleLikes(false) : () => toogleLikes(true) } 
                            style={ liked ? {color: "red"} : {color: "black"} } data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={ saved ? "bookmark" : "bookmark-outline" } onClick={ saved ? () => setSaved(false) : () => setSaved(true)} data-test="save-post"></ion-icon>
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