import React from 'react';

import { useLocation } from 'react-router-dom';

import logo from '../../images/mini_logo.png'
import * as S from './elements';

const TopBar = () => {

    const { pathname } = useLocation()
    const title = (pathname === '/dashboard' ? 'Dasboard' : pathname.search("unidades") !== -1 ? 'Unidades' : pathname === '/geracao/cadastro' && 'Lançamento Mensal')

    if (pathname === '/') {
        return null
    } else {
        return (
            <S.Container>
                <img src={logo} alt='Logo' />
                <h1>{title}</h1>
                <img src={logo} alt='Logo' />
            </S.Container>
        )
    }
};

export default TopBar;
