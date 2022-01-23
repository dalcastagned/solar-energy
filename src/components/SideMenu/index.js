import React from 'react';
import ButtonMenu from '../../components/ButtonMenu';
import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import logo from '../../images/logo.png'
import { Container } from './elements';

const SideMenu = ({activeUnidade, activeDashboard, activeGeracao}) => {
    return (
        <Container>
            <img src={logo} alt='Logo' />
            <ButtonMenu route='/dashboard' icon={<FaChartPie />} text='Dashboard' active={activeDashboard} />
            <ButtonMenu route='/unidades' icon={<MdShowChart />} text='Unidade consumidora' active={activeUnidade} />
            <ButtonMenu route='/geracao/cadastro' icon={<BsGearFill />} text='Cadastro de energia gerada' active={activeGeracao} />
        </Container>
    )
};

export default SideMenu;
