import React from 'react';
import SideMenu from '../../components/SideMenu';
import TopBar from '../../components/TopBar';
import { Container, ContainerPage } from './elements';

const Dashboard = () => {
    return (
        <ContainerPage>
            <TopBar title='Dashboard' />
            <SideMenu activeDashboard={true} />
            <Container>

            </Container>
        </ContainerPage>
    )
};

export default Dashboard;
