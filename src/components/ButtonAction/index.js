import React from 'react';

import * as S from './elements';

const ButtonAction = ({text, ...otherProps}) => {
    return (
        <S.Container>
            <S.Button {...otherProps} >{text}</S.Button>
        </S.Container>
    )
};

export default ButtonAction;
