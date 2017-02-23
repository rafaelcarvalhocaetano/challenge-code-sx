/*
	autor: Rafael Carvalho
	Descrição: Apresenta todo o conteúdo de Personalskill
	Componente: "PERSONALSKILL"
*/

import React from 'react';

const personalskill = {
		"title": "Personal Skill",
		"management": 90,
		"teamWork": 70,
		"creative": 95,
		"communication": 60
	}

class Personalskill extends React.Component{
    
    render(){
        
        const porc = "100";
        const m = "manegement";
        const t = "teamWork";
        const c = "creative";
        const cm = "communication";

        return(

            <div id="ctn">
                    <img id="icone4" src={"../imagens/icone4.png"}  />
                <div id="infoper">
                    {personalskill.title}
                </div>
                
                <div id="progBar">
                    <p>{m} <progress  id="ps1" value={personalskill.management}  max={porc} /></p>         
                
                    <p>{t} <progress id="ps2" value={personalskill.teamWork} max={porc} /></p>              
                
                    <p>{c} <progress id="ps3" value={personalskill.creative} max={porc}/></p>  

                    <p>{cm} <progress id="ps4" value={personalskill.communication} max={porc}/></p>             
                </div>
            </div>
        );
    }
}
export default Personalskill;