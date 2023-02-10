import React from 'react';

const Post = ({ from, content, likedBy, likes }) => {
    return (
        <div className="post">
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
                <img src={`assets/img/${content}.svg`} alt={content}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/img/${likedBy}.svg`} alt={likedBy}/>
                    <div className="texto">
                        Curtido por <strong>{likedBy}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;