import React from 'react';
import {
    Container,
    Label,
    InputItem,
    ErrorText,
} from './elements'

const InputNumber = ({ label, errorMessage, errorText, ...otherProps }) => {
    return (
        <>
            <Label>{label}</Label>
            <Container errorMessage={errorMessage}>
                <ErrorText errorMessage={errorMessage}>{errorText}</ErrorText>
                <InputItem type="number" {...otherProps} />
            </Container>
        </>
    )
};

export default InputNumber;
