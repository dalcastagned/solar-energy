import React from 'react';

import * as S from './elements';

const ButtonRemove = ({onClick}) => {
    return (
        <S.Container>
            <S.Button onClick={onClick}>Remover</S.Button>
        </S.Container>
    )
};

export default ButtonRemove;
