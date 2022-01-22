import React from 'react';
import {
    Container,
    Label,
    InputItem,
    ErrorText,
} from './elements'

const InputDate = ({ label, errorMessage, errorText, ...otherProps }) => {
    return (
        <>
            <Label>{label}</Label>
            <Container errorMessage={errorMessage}>
                <ErrorText errorMessage={errorMessage}>{errorText}</ErrorText>
                <InputItem type="date" {...otherProps} />
            </Container>
        </>
    )
};

export default InputDate;
