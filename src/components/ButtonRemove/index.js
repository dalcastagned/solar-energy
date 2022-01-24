import React from 'react';
import { Container, Button } from './elements';

const ButtonRemove = ({onClick}) => {
    return (
        <Container>
            <Button onClick={onClick}>Remover</Button>
        </Container>
    )
};

export default ButtonRemove;
