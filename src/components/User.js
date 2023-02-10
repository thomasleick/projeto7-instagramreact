import React from 'react';
import { useState } from 'react';

const User = () => {

    const [user, setUser] = useState("catanacomics")
    const [img, setImg] = useState("assets/img/catanacomics.svg")

    const changeUser = () => {
        const oldUser = user;
        const newUser = prompt("Qual o seu nome?")
            newUser.length > 0 ? setUser(newUser) : setUser(oldUser)
    }

    const changeImg = () => {
        const oldImg = img;
        const newImg = prompt("Qual o link da nova foto do perfil?")
            newImg.length > 0 ? setImg(newImg) : setImg(oldImg)
    }

    return (
        <div className="usuario">
            <img src={img} alt="imagem de perfil" onClick={changeImg}/>
            <div className="texto">
                <span>
                    <strong>{user}</strong>
                    <ion-icon name="pencil" onClick={changeUser} />
                </span>
            </div>
        </div>
    );
};

export default User;