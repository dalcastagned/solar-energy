import React from 'react';
import ButtonMenu from '../../components/ButtonMenu';
import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import logo from '../../images/logo.png'
import { Container } from './elements';
import { useLocation } from 'react-router-dom';

const SideMenu = () => {

    const {pathname} = useLocation()

    return (
        <Container visible={pathname !== '/'}>
            <img src={logo} alt='Logo' />
            <ButtonMenu route='/dashboard' icon={<FaChartPie />} text='Dashboard' active={pathname === '/dashboard'} />
            <ButtonMenu route='/unidades' icon={<MdShowChart />} text='Unidade consumidora' active={pathname.search("unidades") !== -1} />
            <ButtonMenu route='/geracao/cadastro' icon={<BsGearFill />} text='Cadastro de energia gerada' active={pathname === '/geracao/cadastro'} />
        </Container>
    )
};

export default SideMenu;
