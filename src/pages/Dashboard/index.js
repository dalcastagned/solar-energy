import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import Chart from '../../components/Chart';
import DashboardCards from '../../components/DashboardCard';
import { getInfo } from '../../services/Api';
import * as S from './elements';

const Dashboard = () => {

    const [activeUnits, setActiveUnits] = useState([])
    const [units, setUnits] = useState([])
    const [averageGeneration, setAverageGeneration] = useState(0)
    const [last12MonthText, setLast12MonthText] = useState([])
    const [monthlyGeneration, setMonthlyGeneration] = useState([])

    const getLastMonth = (date, diff) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + diff);
        return newDate;
    }

    const getLast12Month = (date) => {
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
        dates.map((value) => (
            months.unshift(monthNumberToLabelMap[value.getMonth()])
        ))
        setLast12MonthText(months);
        return dates
    }

    const getActiveUnits = (data) => {
        setActiveUnits(data.filter(item => item.active === true))
    }

    const getMonthlyGeneration = (data) => {

        let initialDate = new Date(new Date().setMonth(new Date().getMonth() - 12))

        const last12Month = getLast12Month(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`))

        let getGeneration = []

        last12Month.map(month => {
            getGeneration.unshift(data.filter(item => {
                if ((new Date(item.date) >= initialDate) && (new Date(item.date) <= new Date()) && new Date(item.date).getMonth() === month.getMonth()) {
                    return true
                } else {
                    return false
                }
            }))
            return null
        })

        let getTotalMontlyGeneration = []

        getGeneration.map(item => {
            let total = 0
            item.map(newItem => (
                total += parseFloat(newItem.kw)
            ))
            getTotalMontlyGeneration.push(total)
            return null
        })

        setMonthlyGeneration(getTotalMontlyGeneration)
    }

    const getAverageGeneration = (data) => {
        if (units.length < 1) {
            setAverageGeneration(0)
        } else {
            let totalGeneration = 0
            data.map(data => (
                totalGeneration += parseFloat(data.kw)
            ))
            setAverageGeneration(totalGeneration / units.length)
        }
    }

    useEffect(() => {
        getInfo("/unidades")
            .then((data) => {
                setUnits(data)
                getActiveUnits(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados das unidades')
            });

        getInfo("/geracao")
            .then((data) => {
                getMonthlyGeneration(data)
                getAverageGeneration(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados de geração')
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.Container>
            <S.Cards>
                <DashboardCards text='Total Unidades' value={units.length} measure='' />
                <DashboardCards text='Unidades Ativas' value={activeUnits.length} measure='' />
                <DashboardCards text='Unidades Inativas' value={units.length - activeUnits.length} measure='' />
                <DashboardCards text='Média de Energia' value={averageGeneration.toFixed(2)} measure='kW' />
            </S.Cards>
            <S.ContainerChart>
                <h1>Total de energia gerada por mês</h1>
                <Chart labels={last12MonthText} dataPlot={monthlyGeneration} />
            </S.ContainerChart>
        </S.Container>
    )
};

export default Dashboard;
