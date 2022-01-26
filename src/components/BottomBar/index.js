import React from 'react'; import {
    NavMobile,
    NavLinksMobile,
    NavMenuMobile,
    NavItemMobile,
} from './elements'
import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

const BottomBar = () => {

    const { pathname } = useLocation()

    if (pathname === '/') {
        return null
    } else {
        return (
            <NavMobile>
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
                    <NavItemMobile active={pathname === '/geracao/cadastro'} $border={true}>
                        <NavLinksMobile to='/geracao/cadastro'>
                            <div>
                                <BsGearFill className='icon' />
                            </div>
                        </NavLinksMobile>
                    </NavItemMobile>
                    <NavItemMobile $border={false}>
                        <NavLinksMobile to='/'>
                            <div>
                                <BiLogOut className='icon' />
                            </div>
                        </NavLinksMobile>
                    </NavItemMobile>
                </NavMenuMobile>
            </NavMobile>
        )
    }
};

export default BottomBar;
