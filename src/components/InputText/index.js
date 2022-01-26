import React from 'react';

import * as S from './elements'

const InputText = ({ label, errorMessage, errorText, smallInput, ...otherProps }) => {
    return (
        <div>
            <S.Label>{label}</S.Label>
            <S.Container smallInput={smallInput} errorMessage={errorMessage}>
                <S.ErrorText errorMessage={errorMessage}>{errorText}</S.ErrorText>
                <S.InputItem type="text" {...otherProps} />
            </S.Container>
        </div>
    )
};

export default InputText;
