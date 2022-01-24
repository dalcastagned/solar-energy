import React from 'react';import {
    NavMobile,
    NavLinksMobile,
    NavMenuMobile,
    NavItemMobile,
} from './elements'
import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

const BottomBar = () => {

    const {pathname} = useLocation()

    return (
        <NavMobile visible={pathname !== '/'}>
            <NavMenuMobile>
                <NavItemMobile active={pathname === '/dashboard'} $border={true}>
                    <NavLinksMobile to='/dashboard'>
                        <div>
                            <FaChartPie className='icon' />
                        </div>
                    </NavLinksMobile>
                </NavItemMobile>
                <NavItemMobile active={pathname.search("unidades") !== -1} $border={true}>
                    <NavLinksMobile to='/unidades'>
                        <div>
                            <MdShowChart className='icon' />
                        </div>
                    </NavLinksMobile>
                </NavItemMobile>
                <NavItemMobile active={pathname === '/geracao/cadastro'} $border={false}>
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
