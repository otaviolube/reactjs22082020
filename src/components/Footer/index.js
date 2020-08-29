import React from 'react';

import './index.css';

export default function Footer(props){
    return(
        <footer>
            {props.text}
        </footer>
    );
}