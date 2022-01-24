import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: #FAFAFA;
    padding: 160px 20px 40px 365px;

    @media screen and (max-width: 1025px){    
            padding: 120px 20px 120px 20px;
    }
`

export const Cards = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 20px;
`
