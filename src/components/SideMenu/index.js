import React from 'react';

import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

import logo from '../../images/logo.png'
import ButtonMenu from '../../components/ButtonMenu';
import * as S from './elements';

const SideMenu = () => {

    const { pathname } = useLocation()

    if (pathname === '/') {
        return null
    } else {
        return (
            <S.Container>
                <img src={logo} alt='Logo' />
                <ButtonMenu route='/dashboard' icon={<FaChartPie />} text='Dashboard' active={pathname === '/dashboard'} />
                <ButtonMenu route='/unidades' icon={<MdShowChart />} text='Unidade consumidora' active={pathname.search("unidades") !== -1} />
                <ButtonMenu route='/geracao/cadastro' icon={<BsGearFill />} text='Cadastro de energia gerada' active={pathname === '/geracao/cadastro'} />
            </S.Container>
        )
    }
};

export default SideMenu;
