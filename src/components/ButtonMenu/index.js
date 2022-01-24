import React from 'react';
import { Container, Button } from './elements';

const ButtonMenu = ({icon, text, active, route}) => {
    return (
        <Container active={active}>
            <i>{icon}</i>
            <Button to={route} active={active.toString()}>{text}</Button>
        </Container>
    )
};

export default ButtonMenu;
