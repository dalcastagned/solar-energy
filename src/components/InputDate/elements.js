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
`

export const Label = styled.label`
    font-size: 24px;
    color: #53575D;
`

export const InputItem = styled.input`
    border: none;
    outline: none;
    color: #A098AE;
    font-size: 21px;
    line-height: 21px;
    width: 100%;
    background: transparent;
    padding-left: 10px;
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