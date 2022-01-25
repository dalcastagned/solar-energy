import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.08);

    @media screen and (max-width: 380px){
        width: 260px;
    }
`

export const ContainerTop = styled.div`
    background-color: rgba(232, 232, 232, 0.8);
    border: none;
    border-radius: 10px 10px 0 0;
    padding: 10px;

    p {
        color: #000;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }
`

export const ContainerInfo = styled.div`
    border: 2px solid rgba(232, 232, 232, 0.8);
    border-radius: 0 0 10px 10px;

    div {
        display: flex;
        padding: 5px 10px 10px 10px;
    }

    p {
        padding: 10px;
    }
`
