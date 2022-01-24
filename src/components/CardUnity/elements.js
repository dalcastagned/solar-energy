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

export const ContainerButtons = styled.div`
    position: absolute;
    right: 10px;
    top: 9px;

    button {
        border: none;
        background-color: transparent;
        color: #000;
        font-size: 25px;
        cursor: pointer;
        padding-left: 5px;
    }
`

export const ContainerInfo = styled.div`
    border: 2px solid rgba(232, 232, 232, 0.8);
    border-radius: 0 0 10px 10px;

    p {
        padding: 10px;
    }
`
