import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.08);

    @media screen and (max-width: 380px){
        width: 260px;
    }
`

export const ContainerTop = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-color: rgba(232, 232, 232, 0.8);
    border: none;
    border-radius: 10px 10px 0 0;
    padding: 10px;

    p {
        color: #000;
        font-size: 20px;
        font-weight: 700;
    }
`

export const ContainerInfo = styled.div`
    border: 2px solid rgba(232, 232, 232, 0.8);
    border-radius: 0 0 10px 10px;

    div {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        display: flex;
        padding: 10px;
    }
    
    &:hover div {
        opacity: 1;
        transition: max-height 0.25s ease-in;
        max-height: 500px;
        }


    p {
        padding: 10px;
    }
`
