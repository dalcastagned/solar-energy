import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Chart from '../../components/Chart';
import DashboardCards from '../../components/DashboardCard';
import { getInfo } from '../../services/Api';
import { Container, Cards, ContainerChart } from './elements';

const Dashboard = () => {

    const [activeUnits, setActiveUnits] = useState([])
    const [units, setUnits] = useState([])
    const [generation, setGeneration] = useState([])
    const [monthlyGeneration, setMonthlyGeneration] = useState([])
    const [averageGeneration, setAverageGeneration] = useState(0)
    const [last12Month, setLast12Month] = useState([])
    const [last12MonthText, setLast12MonthText] = useState([])

    console.log(monthlyGeneration)

    const getActiveUnits = (data) => {
        setActiveUnits(data.filter(item => item.active === true))
    }

    const getGeneration = (data) => {
        let totalGeneration = 0
        data.map(data => {
            totalGeneration += parseFloat(data.kw)
        })
        setAverageGeneration(totalGeneration / 12)
    }

    function getLastMonth(date, diff) {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + diff);
        return newDate;
    }

    function getLast12Month(date) {
        const dates = [date];
        const months = []
        const monthNumberToLabelMap = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ]
        for (let i = 1; i < 12; i++) {
            dates.push(getLastMonth(date, i * -1));
        }
        setLast12Month(dates)
        dates.map((value) => {
            months.unshift(monthNumberToLabelMap[value.getMonth()])
        })
        return months;
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

        setLast12MonthText(getLast12Month(new Date()))
    }, []);

    return (
        <Container>
            <Cards>
                <DashboardCards text='Total Unidades' value={units.length} measure='' />
                <DashboardCards text='Unidades Ativas' value={activeUnits.length} measure='' />
                <DashboardCards text='Unidades Inativas' value={units.length - activeUnits.length} measure='' />
                <DashboardCards text='Média de Energia' value={averageGeneration.toFixed(2)} measure='kW' />
            </Cards>
            <ContainerChart>
                <h1>Total de energia gerada por mês</h1>
                <Chart labels={last12MonthText} />
            </ContainerChart>
        </Container>
    )
};

export default Dashboard;
