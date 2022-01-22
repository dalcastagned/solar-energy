import React from 'react';
import {
    Container,
    Label,
    InputItem,
    ErrorText,
    Option
} from './elements'

const InputSelect = ({ label, errorMessage, errorText, smallInput, options, ...otherProps }) => {
    return (
        <>
            <Label>{label}</Label>
            <Container smallInput={smallInput} errorMessage={errorMessage}>
                <ErrorText errorMessage={errorMessage}>{errorText}</ErrorText>
                <InputItem {...otherProps}>
                    <Option value=''>Selecione</Option>
                    {React.Children.toArray(options.map(item =>
                        <Option value={item}>{item}</Option>
                    ))}
                </InputItem>
            </Container>
        </>
    )
};

export default InputSelect;
