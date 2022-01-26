import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './elements';
import logo from '../../images/mini_logo.png'

const TopBar = () => {

    const { pathname } = useLocation()
    const title = (pathname === '/dashboard' ? 'Dasboard' : pathname.search("unidades") !== -1 ? 'Unidades' : pathname === '/geracao/cadastro' && 'Lançamento Mensal')

    if (pathname === '/') {
        return null
    } else {
        return (
            <Container>
                <img src={logo} alt='Logo' />
                <h1>{title}</h1>
                <img src={logo} alt='Logo' />
            </Container>
        )
    }
};

export default TopBar;
