import React from 'react';import {
    NavMobile,
    NavLinksMobile,
    NavMenuMobile,
    NavItemMobile,
} from './elements'
import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";

const BottomBar = ({activeUnidade, activeGeracao, activeDashboard}) => {
    return (
        <NavMobile>
            <NavMenuMobile>
                <NavItemMobile active={activeDashboard} $border={true}>
                    <NavLinksMobile to='/dashboard'>
                        <div>
                            <FaChartPie className='icon' />
                        </div>
                    </NavLinksMobile>
                </NavItemMobile>
                <NavItemMobile active={activeUnidade} $border={true}>
                    <NavLinksMobile to='/unidades'>
                        <div>
                            <MdShowChart className='icon' />
                        </div>
                    </NavLinksMobile>
                </NavItemMobile>
                <NavItemMobile active={activeGeracao} $border={false}>
                    <NavLinksMobile to='/geracao/cadastro'>
                        <div>
                            <BsGearFill className='icon' />
                        </div>
                    </NavLinksMobile>
                </NavItemMobile>
            </NavMenuMobile>
        </NavMobile>
    )
};

export default BottomBar;
