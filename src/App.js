import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

import api from './services/api';

const App = () => {

    const [personagens, setPersonagens] = useState([]);
    
    useEffect(() => {
        api.get('people').then(response => {
            console.log(response.data.results);
            setPersonagens(response.data.results);
        });
    }, [])

    return (
        <>
            <Header text="Mudança de conteúdo ... " />

            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Altura</td>
                        <td>Peso</td>
                        <td>Cor do Cabelo</td>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map((personagem, index) => {
                        return (
                            <tr key={index}>
                                <td>{personagem.name}</td>
                                <td>{personagem.height}</td>
                                <td>{personagem.mass}</td>
                                <td>{personagem.hair_color}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Footer text="Meu rodapé personalizado ..." />
        </>
    );
}

export default App;