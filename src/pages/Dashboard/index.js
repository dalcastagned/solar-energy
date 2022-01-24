import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DashboardCards from '../../components/DashboardCard';
import { getInfo } from '../../services/Api';
import { Container, Cards } from './elements';

const Dashboard = () => {

    const [activeUnits, setActiveUnits] = useState([])
    const [units, setUnits] = useState([])
    const [generation, setGeneration] = useState([])
    const [averageGeneration, setAverageGeneration] = useState(0)

    const getActiveUnits = (data) => {
        setActiveUnits(data.filter(item => item.active === true))
    }

    const getGeneration = (data) => {

        let totalGeneration = 0

        data.map(data => {
            totalGeneration += parseFloat(data.kw)
        })

        setAverageGeneration(totalGeneration/12)
    }

    useEffect(() => {
        getInfo("/unidades")
            .then((data) => {
                setUnits(data)
                getActiveUnits(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados')
            });

            getInfo("/geracao")
            .then((data) => {
                setGeneration(data)
                getGeneration(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados')
            });
    }, []);

    return (
        <Container>
            <Cards>
                <DashboardCards text='Total Unidades' value={units.length} measure='' />
                <DashboardCards text='Unidades Ativas' value={activeUnits.length} measure='' />
                <DashboardCards text='Unidades Inativas' value={units.length - activeUnits.length} measure='' />
                <DashboardCards text='Média de Energia' value={averageGeneration.toFixed(2)} measure='kW' />
            </Cards>
        </Container>
    )
};

export default Dashboard;
