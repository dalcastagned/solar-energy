import React from 'react';
import {
    Container,
    Label,
    InputItem,
} from './elements'

const InputCheckbox = ({ label, ...otherProps }) => {
    return (
        <>
            <Container>
                <Label>
                    <InputItem type="checkbox" {...otherProps} />
                    {label}
                </Label>
            </Container>
        </>
    )
};

export default InputCheckbox;
