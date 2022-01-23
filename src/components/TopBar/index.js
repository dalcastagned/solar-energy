import React from 'react';
import { Container } from './elements';

const TopBar = ({title}) => {
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    )
};

export default TopBar;
