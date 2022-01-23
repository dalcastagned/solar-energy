import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: calc(100vw - 345px);
    height: calc(100vh - 120px);
    margin: 120px 0 0 345px;
    background: #FAFAFA;
    
    @media screen and (max-width: 980px){
        padding: 0;
    }
`

export const ContainerPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: #FAFAFA;
`
