import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer'

//JSX - Javascript XML

//Componentes
//Props => Propriedades
//Estados - Imutabilidade / Mutabilidade


const App = () => {

    const [students, setStudents] = useState([
        { id: 0, name: 'otavio', email: 'otavio.lube@faesa.br', institution: 'FAESA' },
        { id: 1, name: 'dimitri', email: 'dimitri@gmail.com', institution: 'ESTACIO' },
        { id: 2, name: 'andreia', email: 'andrei@faesa.br', institution: 'FAESA' },
    ])

    function insertRamdonStudent(){
        const randomNumber = Math.random()*100;
        let newStudent = {
            id: randomNumber,
            name: `student${randomNumber}`,
            email: `student${randomNumber}@gmail.com`,
            institution: `institution${randomNumber}`
        }

        console.log('STUDENT CREATED', newStudent);

        // students.push(newStudent);

        setStudents([...students, newStudent]);

    }

    return (
        <>
            <Header text="Mudança de conteúdo ... " />

            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Instituição</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s => {
                        return(
                            <tr key={s.id}>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.institution}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button type="button" onClick={insertRamdonStudent}>Inserir Aluno Aleatório</button>

            <Footer text="Meu rodapé personalizado ..." />
        </>
    );
}

export default App;