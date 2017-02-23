/*
	autor: Rafael Carvalho
	Descrição: Ilustra a foto com a Descrição
	Componente: "PHOTO"
*/

import React from 'react';
import '../exp.css';
const ilustra = {
    "name": "John xpto",
	"profession": "Frontend Developer",
}


class Photo extends React.Component{
    render(){
        return(
            <div id="apreStyle">
                <figure>
                    <img id="photo" src="../imagens/photo.png" />
                    <figcaption>{ilustra.name}</figcaption>
                </figure>
                
                <p>{ilustra.profession}</p>
            
            </div>
        );
    }
}
export default Photo;