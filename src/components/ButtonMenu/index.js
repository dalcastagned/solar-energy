import React from 'react';
import { Container } from './elements';

const ButtonMenu = ({icon, text, active}) => {
    return (
        <Container active={active}>
            <i>{icon}</i>
            <button active={active}>{text}</button>
        </Container>
    )
};

export default ButtonMenu;
