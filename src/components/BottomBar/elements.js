import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavMobile = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #374557;
    z-index: 999;
    width: 100%;
 
    @media screen and (min-width: 980px){
        display: none;
    }
`

export const NavMenuMobile = styled.ul`
    display: grid;
    list-style: none;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`

export const NavItemMobile = styled.li`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: ${({$border}) => ($border ? `1px solid #374557` : 'none')};
    background: ${({active}) => active ? '#4CBC9A' : 'transparent'};
`

export const NavLinksMobile = styled(Link)`
    color: #374557;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 8px 8px;
    height: 100%;  
    width: 100%;

    div {
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon{       
        color: #374557;
        font-size: 50px;

         
    @media screen and (max-width: 580px){
        font-size: 40px;
    }
    }
`
