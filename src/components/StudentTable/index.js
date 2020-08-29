import React from 'react';

import './index.css';

export default function StudentTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Instituição</td>
                </tr>
            </thead>
            <tbody>
                {props.students.map(s => {
                    return (
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.institution}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}