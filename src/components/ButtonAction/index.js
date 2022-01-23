import React from 'react';
import { Container, Button } from './elements';

const ButtonAction = ({text, ...otherProps}) => {
    return (
        <Container>
            <Button {...otherProps} >{text}</Button>
        </Container>
    )
};

export default ButtonAction;
