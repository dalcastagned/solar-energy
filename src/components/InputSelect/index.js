import React from 'react';

import * as S from './elements'

const InputSelect = ({ label, errorMessage, errorText, options, ...otherProps }) => {
    return (
        <>
            <S.Label>{label}</S.Label>
            <S.Container errorMessage={errorMessage}>
                <S.ErrorText errorMessage={errorMessage}>{errorText}</S.ErrorText>
                <S.InputItem  {...otherProps}>
                    <S.Option disabled value=''>Selecione</S.Option>
                    {React.Children.toArray(options.map(item =>
                        <S.Option value={item}>{item}</S.Option>
                    ))}
                </S.InputItem>
            </S.Container>
        </>
    )
};

export default InputSelect;
