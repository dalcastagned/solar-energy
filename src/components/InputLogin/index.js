import React from 'react';
import {
    Container,
    Icon,
    InputItem,
    ErrorText
} from './elements'

const InputLogin = ({ errorMessage, icon, errorText, ...otherProps}) => {
    return (
        <Container errorMessage={errorMessage}>
            <ErrorText errorMessage={errorMessage}>{errorText}</ErrorText>
            <Icon>{icon}</Icon>
            <InputItem {...otherProps} />
        </Container>
)};

export default InputLogin;
