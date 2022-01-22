import styled from 'styled-components'

export const Container = styled.div`
    max-width: 564px;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`

export const InputItem = styled.input`
    width: 29px;
    height: 28px;
    border: 1px solid rgba(0, 0, 0, 1);
    -webkit-appearance: none;

    :checked {
        background: url("https://i.ibb.co/p1KfzLN/check.png") center no-repeat, -webkit-linear-gradient(#FCFCFC, #DFDFDF);
        background-size: 22px;
    }
`