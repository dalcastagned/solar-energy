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
    z-index: 999;   
    
    @media screen and (max-width: 1024px){
        width: 100vw;
        left: 0;
        justify-content: center;
        height: 45px;
        border-bottom: 2px solid #374557;
        display: ${({ visible }) => (visible ? `grid` : 'none')};
        grid-template-columns: 45px 1fr 45px;  
    }

    img {
        display: none;

        @media screen and (max-width: 1024px){
            display: block;
            margin: 0 auto;
        }
    }

    h1 {
        font-size: 36px;
        line-height: 54px;
        color: #374557;    
        text-align: center;
        padding-left: 60px;

        @media screen and (max-width: 1025px){
            font-size: 20px;
            line-height: 22px;
            padding-left: 0px;
        }

        
        @media screen and (max-width: 380px){
            font-size: 18px;
            line-height: 20px;
        }
    }
    
 
`
