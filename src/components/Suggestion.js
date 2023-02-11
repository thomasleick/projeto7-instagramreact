import React from 'react';

const Suggestion = ({ name, reazon }) => {
    return (
        <div className="sugestao">
            <div className="usuario">
            <img src={`assets/img/${name}.svg`} alt={name}/>
                <div className="texto">
                    <div className="nome">{name}</div>
                    <div className="razao">{reazon}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
};

export default Suggestion;