import React from 'react';
import SideMenu from '../../components/SideMenu';
import TopBar from '../../components/TopBar';
import { Container, ContainerPage } from './elements';

const Geracao = () => {
    return (
        <ContainerPage>
            <TopBar title='Lançamento de geração mensal' />
            <SideMenu activeGeracao={true} />
            <Container>

            </Container>
        </ContainerPage>
    )
};

export default Geracao;
