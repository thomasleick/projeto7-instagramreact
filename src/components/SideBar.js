import React from 'react';
import User from './User';
import Suggestions from './Suggestions'

const SideBar = () => {

    return (
        <aside>
            <User />
            <Suggestions />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </aside>
    );
};

export default SideBar;