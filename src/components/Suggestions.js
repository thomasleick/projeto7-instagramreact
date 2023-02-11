import React from 'react';
import Suggestion from './Suggestion';
//import { posts } from '../data/posts';

const Suggestions = () => {
    const suggestions = [
        { name: "bad.vibes.memes", reazon: "Segue você" },
        { name: "chibirdart", reazon: "Segue você" },
        { name: "razoesparaacreditar", reazon: "Novo no Instagram" },
        { name: "adorable_animals", reazon: "Segue você" },
        { name: "smallcutecats", reazon: "Segue você" },
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((suggestion, i) => <Suggestion name={suggestion.name} reazon={suggestion.reazon} key={`suggestion${i}`} />)}
        </div>
    );
};

export default Suggestions;