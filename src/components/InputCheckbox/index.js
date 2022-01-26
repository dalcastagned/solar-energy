import React from 'react';

import * as S from './elements'

const InputCheckbox = ({ label, ...otherProps }) => {
    return (
        <>
            <S.Container>
                <S.Label>
                    <S.InputItem type="checkbox" {...otherProps} />
                    {label}
                </S.Label>
            </S.Container>
        </>
    )
};

export default InputCheckbox;
