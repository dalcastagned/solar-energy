import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: ${({errorMessage}) => errorMessage ? '1px solid #f00' : '1px solid #000'};
    max-width: 518px;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    height: 85px;
`

export const Icon = styled.i`
    display: flex;
    font-size: 28px;
    color: #A098AE;
`

export const InputItem = styled.input`
    border: none;
    outline: none;
    color: #A098AE;
    margin-left: 15px;
    font-size: 16px;
    line-height: 21px;
    width: 100%;
    background: transparent;
`

export const ErrorText = styled.p`
    display: ${({errorMessage}) => errorMessage ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 15px;
    transform: translatey(-50%);
    background-color: #FAFAFA;
    padding: 0 5px;
    color: #f00;
`