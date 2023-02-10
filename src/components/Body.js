import React from 'react';
import Stories from './Stories'

const Body = () => {
    return (
        <main>
                <div className="esquerda">
                    <Stories />

                    <div className="posts">
                    <div className="post">
                        <div className="topo">
                        <div className="usuario">
                            <img src="assets/img/meowed.svg" alt="meowed"/>
                            meowed
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>

                        <div className="conteudo">
                        <img src="assets/img/gato-telefone.svg" alt="gato-telefone"/>
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
                            <img src="assets/img/respondeai.svg" alt="respondeai"/>
                            <div className="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="topo">
                        <div className="usuario">
                            <img src="assets/img/barked.svg" alt="barked"/>
                            barked
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>

                        <div className="conteudo">
                        <img src="assets/img/dog.svg" alt="dog" />
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
                            <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                            <div className="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="usuario">
                    <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
                    <div className="texto">
                        <span>
                        <strong>catanacomics</strong>
                        <ion-icon name="pencil"></ion-icon>
                        </span>
                    </div>
                    </div>

                    <div className="sugestoes">
                    <div className="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                        <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg"/>
                        <div className="texto">
                            <div className="nome">bad.vibes.memes</div>
                            <div className="razao">Segue você</div>
                        </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                        <img src="assets/img/chibirdart.svg" alt="chibirdart"/>
                        <div className="texto">
                            <div className="nome">chibirdart</div>
                            <div className="razao">Segue você</div>
                        </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                        <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
                        <div className="texto">
                            <div className="nome">razoesparaacreditar</div>
                            <div className="razao">Novo no Instagram</div>
                        </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                        <div className="texto">
                            <div className="nome">adorable_animals</div>
                            <div className="razao">Segue você</div>
                        </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                        <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
                        <div className="texto">
                            <div className="nome">smallcutecats</div>
                            <div className="razao">Segue você</div>
                        </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>
                    </div>

                    <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                    </div>

                    <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
        </main>
    );
};

export default Body;