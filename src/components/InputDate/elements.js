import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    max-width: 282px;
    padding: 10px 20px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 20px;

    .datepicker {
        border: none;
        color: #A098AE;
        font-size: 24px;
        line-height: 21px;
        width: 100%;
        outline: none;
        background: transparent;

        @media screen and (max-width: 580px){
            font-size: 16px;
        }
    }
`

export const Label = styled.label`
    font-size: 32px;
    color: #53575D;
    font-weight: 700;

    @media screen and (max-width: 580px){
        font-size: 20px;
    }
`