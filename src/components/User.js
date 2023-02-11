import React from 'react';
import { useState } from 'react';

const User = () => {

    const [user, setUser] = useState("catanacomics")
    const [img, setImg] = useState("assets/img/catanacomics.svg")

    const changeState = prop => {
        if (prop === "nome") {
            const oldProp = user;
            const newProp = prompt("Qual o seu nome?");
            newProp?.length > 0 ? setUser(newProp) : setUser(oldProp)
            return 0;
        }
        const oldProp = img;
        const newProp = prompt("Qual o link da nova foto do perfil?");
        newProp?.length > 0 ? setImg(newProp) : setImg(oldProp)
        return 1;
    }

    return (
        <div className="usuario">
            <img src={img} alt="imagem de perfil" onClick={() => changeState("img")} data-test="profile-image"/>
            <div className="texto">
                <span>
                    <strong data-test="name">{user}</strong>
                    <ion-icon name="pencil" onClick={() => changeState("nome")} data-test="edit-name"/>
                </span>
            </div>
        </div>
    );
};

export default User;