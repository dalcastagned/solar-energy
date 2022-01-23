import React from 'react';
import SideMenu from '../../components/SideMenu';
import { Container } from './elements';

const Dashboard = () => {
    return (
        <>
            <SideMenu activeDashboard={true} />
            <Container>

            </Container>
        </>
    )
};

export default Dashboard;
