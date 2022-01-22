import React from 'react';
import { Container } from './elements'

const InputLogin = ({ errorMessage, icon, errorText, ...otherProps}) => {
    return (
        <Container errorMessage={errorMessage}>
            {errorMessage ? <legend>{errorText}</legend> : <legend></legend>}
            <i>{icon}</i>
            <input {...otherProps} />
        </Container>
)};

export default InputLogin;
