import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    border: ${({ errorMessage }) => errorMessage ? '1px solid #f00' : '1px solid #000'};
    max-width: 282px;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 20px;
`

export const Label = styled.label`
    font-size: 32px;
    color: #53575D;
    font-weight: 700;
 
    @media screen and (max-width: 580px){
        font-size: 24px;
    }
`

export const InputItem = styled.select`
    border: none;
    outline: none;
    color: #A098AE;
    font-size: 24px;
    line-height: 21px;
    width: 100%;
    background: transparent;
    padding-left: 10px;
    cursor: pointer;
    
    @media screen and (max-width: 580px){
            font-size: 20px;
        }
`
export const Option = styled.option`
    color: #A098AE;
    background: #FAFAFA;
`

export const ErrorText = styled.p`
    display: ${({ errorMessage }) => errorMessage ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 15px;
    transform: translatey(-50%);
    background-color: #FAFAFA;
    padding: 0 5px;
    color: #f00;
`