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
    margin-bottom: 40px;
`

export const Label = styled.label`
    font-size: 32px;
    color: #53575D;
    font-weight: 700;
`

export const InputItem = styled.input`
    border: none;
    outline: none;
    color: #A098AE;
    font-size: 24px;
    line-height: 21px;
    width: 100%;
    background: transparent;
    padding-left: 10px;
    -moz-appearance: textfield;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

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