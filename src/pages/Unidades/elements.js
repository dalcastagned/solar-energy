import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: #FAFAFA;
    padding: 120px 20px 40px 365px;

    @media screen and (max-width: 1025px){    
            padding: 80px 20px 120px 20px;
    }

    h1 {
        padding: 60px 20px 60px 60px ;

        @media screen and (max-width: 1025px){    
            padding: 40px 0px 40px 0px;
        }

        @media screen and (max-width: 750px){
            text-align: center;
        }
    }
`

export const ContainerButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin: 0 auto;
    padding-top: 40px;
    max-width: 1224px;

    @media screen and (max-width: 750px){
        justify-content: center;
    }
`


export const ContainerCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (min-width: 750px){
        display: none;
    }
`
