import React from 'react';

import './index.css';

export default function Header(props){
    
    return(
        <header>
            <h1>{props.text}</h1>
            {props.children}
        </header>
    );

}