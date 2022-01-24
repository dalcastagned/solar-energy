import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './elements';

const TopBar = () => {

    const {pathname} = useLocation()
    const title = (pathname === '/dashboard' ? 'Dasboard' : pathname.search("unidades") !== -1 ? 'Unidades' : pathname === '/geracao/cadastro' && 'Lançamento de geração mensal')
    
    return (
        <Container visible={pathname !== '/'}>
            <h1>{title}</h1>
        </Container>
    )
};

export default TopBar;
