/*
	autor: Rafael Carvalho
	Descrição: Apresenta todo o conteúdo referente a Objective
	Componente: "OBJECTIVE"
*/
import React from 'react';


const objective = {
		"title": "Objective",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
	};



class Objective extends React.Component{
    render(){
        return(
            <div id="profStyle">
                 <figure id="figcp">
                    <img id="icone2" src="../imagens/icone3.png" />
                    <figcaption>{objective.title}</figcaption>
                </figure>
                    <p>{objective.description}</p>
            </div>
        );
    }
}
export default Objective;