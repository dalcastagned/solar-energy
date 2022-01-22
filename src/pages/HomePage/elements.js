import styled from 'styled-components'
import usina from '../../images/usina.png'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    img{
        max-width: 280px;   

    @media screen and (max-width: 320px){
        max-width: 180px;  
    }
    }

    h1 {
        font-size: 24px;
        color: #374557;   
        font-weight: 500;
        line-height: 32px;
        text-align: center;
        padding: 40px 0;
        
    @media screen and (max-width: 320px){
        font-size: 20px;
    }
    }
`


export const ContainerImage = styled.div`
    width: 50%;
    height: 100%;
    background: url(${usina}) center no-repeat;
    background-size: cover;

    @media screen and (max-width: 980px){
        display: none;
    }
`

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 980px){
        width: 100%;
        background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.9) -10%, 
            rgba(255, 255, 255, 0.9) 180%), 
            url(${usina});
        background-size: cover;
    }
`

export const Form = styled.form`
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`


