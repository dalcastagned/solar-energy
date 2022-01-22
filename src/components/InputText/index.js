import React from 'react';
import {
    Container,
    Label,
    InputItem,
    ErrorText,
} from './elements'

const InputText = ({ label, errorMessage, errorText, smallInput, ...otherProps }) => {
    return (
        <>
            <Label>{label}</Label>
            <Container smallInput={smallInput} errorMessage={errorMessage}>
                <ErrorText errorMessage={errorMessage}>{errorText}</ErrorText>
                <InputItem type="text" {...otherProps} />
            </Container>
        </>
    )
};

export default InputText;
