import React from 'react';

import * as S from './elements'

const InputNumber = ({ label, errorMessage, errorText, ...otherProps }) => {
    return (
        <>
            <S.Label>{label}</S.Label>
            <S.Container errorMessage={errorMessage}>
                <S.ErrorText errorMessage={errorMessage}>{errorText}</S.ErrorText>
                <S.InputItem type="number" {...otherProps} />
            </S.Container>
        </>
    )
};

export default InputNumber;
