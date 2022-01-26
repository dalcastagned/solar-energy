import React from 'react'; 

import { FaChartPie } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

import * as S from './elements'

const BottomBar = () => {

    const { pathname } = useLocation()

    if (pathname === '/') {
        return null
    } else {
        return (
            <S.NavMobile>
                <S.NavMenuMobile>
                    <S.NavItemMobile active={pathname === '/dashboard'} $border={true}>
                        <S.NavLinksMobile to='/dashboard'>
                            <div>
                                <FaChartPie className='icon' />
                            </div>
                        </S.NavLinksMobile>
                    </S.NavItemMobile>
                    <S.NavItemMobile active={pathname.search("unidades") !== -1} $border={true}>
                        <S.NavLinksMobile to='/unidades'>
                            <div>
                                <MdShowChart className='icon' />
                            </div>
                        </S.NavLinksMobile>
                    </S.NavItemMobile>
                    <S.NavItemMobile active={pathname === '/geracao/cadastro'} $border={true}>
                        <S.NavLinksMobile to='/geracao/cadastro'>
                            <div>
                                <BsGearFill className='icon' />
                            </div>
                        </S.NavLinksMobile>
                    </S.NavItemMobile>
                    <S.NavItemMobile $border={false}>
                        <S.NavLinksMobile to='/'>
                            <div>
                                <BiLogOut className='icon' />
                            </div>
                        </S.NavLinksMobile>
                    </S.NavItemMobile>
                </S.NavMenuMobile>
            </S.NavMobile>
        )
    }
};

export default BottomBar;
