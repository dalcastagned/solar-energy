import styled from 'styled-components'

export const Container = styled.fieldset`
    display: flex;
    align-items: center;
    border: ${({errorMessage}) => errorMessage ? '1px solid #f00' : '1px solid #000'};
    max-width: 518px;
    padding: 10px 20px 30px 20px;
    border-radius: 10px;
    height: 70px;
    width: 100%;
 
    @media screen and (max-width: 580px){
            height: 50px;
    }

    i {
        display: flex;
        align-items: center;
        font-size: 28px;
        color: #A098AE;

        @media screen and (max-width: 580px){
            margin-top: 10px;
        }
    }

    input {
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        color: #A098AE;
        margin-left: 15px;
        font-size: 16px;
        width: 100%;
        background: transparent;

        @media screen and (max-width: 580px){
            margin-top: 10px;
        }
    }

    legend {
        padding: ${({errorMessage}) => errorMessage ? '0 5px' : '0'} ;
        color: #f00;
        height: 16px;
    }
`
