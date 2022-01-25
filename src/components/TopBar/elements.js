import styled from 'styled-components'

export const Container = styled.div`
    width: calc(100vw - 345px);
    height: 120px;
    display: ${({ visible }) => (visible ? `flex` : 'none')};
    align-items: center;
    position: fixed;
    top: 0;
    left: 345px;
    background: #fff;
    margin-left: 1px solid black;
    z-index: 999;   
    
    @media screen and (max-width: 1024px){
        width: 100vw;
        left: 0;
        justify-content: center;
        height: 60px;
        border-bottom: 1px solid #374557;
    }

    h1 {
        font-size: 36px;
        line-height: 54px;
        color: #374557;    
        text-align: center;
        padding-left: 60px;

        @media screen and (max-width: 1025px){
            font-size: 22px;
            line-height: 28px;
            padding-left: 0px;
        }
    }
    
 
`
