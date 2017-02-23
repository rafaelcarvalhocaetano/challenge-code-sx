/*
	autor: Rafael Carvalho
	Descrição: Apresentar a parte de prêmios
    Componente: "AWARD"
*/
import React from 'react';

const award = {
		"title": "Award",
		"month": "November",
		"year": 2007,
		"awardName": "Javascript Ninja",
		"projectName": "Fast library",
		"city": "San Franscisco",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	};

class Awart extends React.Component{

    render(){
        return (
           
             <div id="containnerEducation">
                    <div id="listEduc">
                        <img id="iconeEducation" src={"../imagens/icone13.png"}  />
                    </div>

                    <div id="infoTitulo">{award.title}</div>

                    <div id="dataexp">
                        <p>{award.month}</p>
                        <p>{award.year}</p>
                    </div>

                    <div id="listDados">
                        <h1 id="aw">{award.awardName}</h1>
                        <p>{award.projectName}, {award.city}</p>
                        <p id="todoaward">{award.description}</p>
                    </div>
            </div>
        );
    }
}
export default Awart;
