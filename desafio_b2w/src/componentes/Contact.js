/*
	autor: Rafael Carvalho
	Descrição: Contém a parte do contato e localização
    Componente: "CONTACT ME"
*/

import React from 'react';

const contactMe = {
		"title": "Contact me",
		"address": "Avenue Xpto, 1234",
		"tel": "11 987654321",
		"email": "frontend@webxpto.com",
		"webSite": "http://webxpto.com"
	};

class Contact extends React.Component{
    render(){
        return(
        
            <div id="tab">
                <figure id="principal">
                    <img id="icone5" src="../imagens/icone5.png"/>
                </figure>
                
                <p id="itCon">{contactMe.title}</p>
                
                <ul id="list">
                    <li><img id="icone6" src="../imagens/icone6.png" /><p>{contactMe.address}</p></li>
                    <li><img id="icone7" src="../imagens/icone7.png" /><p>{contactMe.tel}</p></li>
                    <li><img id="icone8" src="../imagens/icone8.png" /><p>{contactMe.email}</p></li>
                    <li><img id="icone9" src="../imagens/icone9.png" /><p>{contactMe.webSite}</p></li>
                </ul>    
            </div>
        );
    }
}
export default Contact;
/*




*/