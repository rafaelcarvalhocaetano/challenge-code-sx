import React,{Component} from 'react';


const education = {
		"title": "Education",
}
 const university = [{
			"month": "November",
			"year": 2007,
			"courseName": "Master of Computer Application",
			"universityName": "Simpson University",
			"universityCity": "London",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"month": "November",
			"year": 2007,
			"courseName": "Master of Computer Application",
			"universityName": "Simpson University",
			"universityCity": "London",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}, {
			"month": "November",
			"year": 2007,
			"courseName": "Master of Computer Application",
			"universityName": "Simpson University",
			"universityCity": "London",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		}];
	


 class Education extends Component {

    render() {

        const zero = university[0];
        const primeiro = university[1];
        const segundo = university[2];

        return (
            <div id="containnerEducation">
                <div id="listEduc">
                   <img id="iconeEducation" src={"../imagens/icone10.png"} />
                </div>
                <div id="infoTitulo">{education.title}</div>
                
                <div id="Array1">
                    <div id="data">
                        <p>{zero.month}</p>
                        <p>{zero.year}</p>
                    </div>
                    <div id="listDados">
                        <h1>{zero.courseName}</h1>
                        <p>{zero.universityName}, {zero.universityCity}</p>
                        <p id="todo">{zero.description}</p>
                    </div>
                </div>

                <div id="array2">
                    <div id="data">
                        <p>{primeiro.month}</p>
                        <p>{primeiro.year}</p>
                    </div>

                    <div id="listDados">
                        <h1>{primeiro.courseName}</h1>
                        <p>{primeiro.universityName}, {primeiro.universityCity}</p>
                        <p id="todo">{primeiro.description}</p>
                    </div>
                </div>

                <div id="array3">
                    <div id="data">
                        <p>{segundo.month}</p>
                        <p>{segundo.year}</p>
                    </div>

                    <div id="listDados">
                        <h1>{segundo.courseName}</h1>
                        <p>{segundo.universityName}, {segundo.universityCity}</p>
                        <p id="todo">{segundo.description}</p>
                    </div>
                </div>
           </div>
        );
    }
}
export default Education;