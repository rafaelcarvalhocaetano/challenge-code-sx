/*
	autor: Rafael Carvalho
	Descrição: Apresenta todo o conteúdo contido em Profile
	Componente: "PROFILE"
*/

import React from 'react';
import '../exp.css';

const profile = {
		"title": "Profile",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
    };
class Profile extends React.Component{

    render(){
        return(
            <div id="profStyle">
                 <figure id="figcp">
                    <img id="icone1" src="../imagens/icone2.png" />
                    <figcaption>{profile.title}</figcaption>
                </figure>
                
                    <p>{profile.description}</p>
                
            </div>
        );
    }
}
export default Profile;