import React from 'react';
import BottomBar from '../../components/BottomBar';
import SideMenu from '../../components/SideMenu';
import TopBar from '../../components/TopBar';
import { Container, ContainerPage } from './elements';

const UnidadesCadastro = () => {
    return (
        <ContainerPage>
            <TopBar title='Unidades' />
            <SideMenu activeUnidade={true} />
            <BottomBar activeUnidade={true} />
            <Container>

            </Container>
        </ContainerPage>
    )
};

export default UnidadesCadastro;
