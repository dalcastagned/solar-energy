import React from 'react';

import * as S from './elements';

const ButtonEdit = ({onClick}) => {
    return (
        <S.Container>
            <S.Button onClick={onClick}>Editar</S.Button>
        </S.Container>
    )
};

export default ButtonEdit;
