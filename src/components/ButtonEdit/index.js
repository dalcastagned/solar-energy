import React from 'react';
import { Container, Button } from './elements';

const ButtonEdit = ({onClick}) => {
    return (
        <Container>
            <Button onClick={onClick}>Editar</Button>
        </Container>
    )
};

export default ButtonEdit;
