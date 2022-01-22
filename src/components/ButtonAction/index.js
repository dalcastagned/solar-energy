import React from 'react';
import { Container, Button } from './elements';

const ButtonAction = ({text}) => {
    return (
        <Container>
            <Button>{text}</Button>
        </Container>
    )
};

export default ButtonAction;
