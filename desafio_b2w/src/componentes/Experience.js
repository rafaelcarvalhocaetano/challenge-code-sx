/*
	autor: Rafael Carvalho
	Descrição: Apresenta o Array de Experience
	Componente: "EXPERIENCE"
*/

import React from 'react';

const experience = {
		"title": "Experience"
};
		const company = [{
			"month": "November",
			"year": 2007,
			"companyName": "Comp developer S/A",
			"roleName": "Frontend Developer",
			"companyCity": "Dublin",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"month": "November",
			"year": 2007,
			"companyName": "Comp developer S/A",
			"roleName": "Frontend Developer",
			"companyCity": "Dublin",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"month": "November",
			"year": 2007,
			"companyName": "Comp developer S/A",
			"roleName": "Frontend Developer",
			"companyCity": "Dublin",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}];

class Experience extends React.Component{

    render(){

        const zero = company[0];
        const primeiro = company[1];
        const segundo = company[2];

        return (
                <div id="containnerEducation">
                    <div id="listEduc">
                        <img id="iconeEducation" src={"../imagens/icone11.png"}  />
                    </div>

                    <div id="infoTitulo">{experience.title}</div>

    
                <div id="dataexp">
                    <p>{zero.month}</p>
                    <p>{zero.year}</p>
                </div>
                <div id="listDados">
                    <h1>{zero.companyName}</h1>
                    <p>{zero.roleName}, {zero.companyCity}</p>
                    <p id="todo">{zero.description}</p>
                </div>

                <div id="dataexp">
                    <p>{primeiro.month}</p>
                    <p>{primeiro.year}</p>
                </div>
                <div id="listDados">
                    <h1>{primeiro.companyName}</h1>
                    <p>{primeiro.roleName}, {primeiro.companyCity}</p>
                    <p id="todo">{primeiro.description}</p>
                </div>

                <div id="dataexp">
                    <p>{segundo.month}</p>
                    <p>{segundo.year}</p>
                </div>
                <div id="listDados">
                    <h1>{segundo.companyName}</h1>
                    <p>{segundo.roleName}, {segundo.companyCity}</p>
                    <p id="todo">{segundo.description}</p>
                </div>
           </div>
        );
    }
}
export default Experience;