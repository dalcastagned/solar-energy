import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 252px;
    height: 64px;
    background: ${({active}) => active ? '#4CBC9A' : 'transparent'};
    border-radius: 20px;

    button {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        cursor: pointer;
        font-weight: 500;
        text-align: left;
        font-size: 18px;
        color: ${({active}) => active ? '#fff' : '#A098AE'};
    }

    i{
        display: flex;
        align-items: center;
        color: ${({active}) => active ? '#fff' : '#A098AE'};
        padding: 0 30px;
        font-size: 32px;
    }
`
