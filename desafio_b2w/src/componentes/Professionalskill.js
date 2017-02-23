/*
	autor: Rafael Carvalho
	Descrição: Função para somar
	Componente: "PROFESSIONAL SKILL"
*/
import React from 'react';

const professionalSkill = {
		"title": "Professional Skill",
}
		const tools = [{
			"toolName": "Photoshop",
			"toolsSkill": 90
		}, {
			"toolName": "Illustrator",
			"toolsSkill": 60
		}, {
			"toolName": "In Design",
			"toolsSkill": 70
		}];

class Professionalskill extends React.Component{
    render(){

        const p = tools[0];
        const s = tools[1];
        const t = tools[2];
        const por = "100";

        
        return(
                       
                  <div id="containnerEducation">
                    <div id="listEduc">
                        <img id="iconeEducation" src={"../imagens/icone12.png"}  />
                    </div>

                    <div id="infoTitulo">{professionalSkill.title}</div>

                    <div id="profList">
                        <h3>{p.toolName}<progress id="p1" value={p.toolsSkill} max={por}/></h3>              
                        <h3>{s.toolName}<progress id="p2" value={s.toolsSkill} max={por}/></h3>
                        <h3>{t.toolName}<progress id="p3" value={t.toolsSkill} max={por}/></h3>
                    </div>
            </div>
        );
    }
}
export default Professionalskill;