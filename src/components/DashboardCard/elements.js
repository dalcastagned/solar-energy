import styled from 'styled-components'

export const Container = styled.div`
    max-width: 258px;
    height: 134px;
    width: 100%;
    text-align: center;
    border: 1px solid #DFE0EB;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{   
        border: 1px solid #3751FF;

        h2 {
            color: #3751FF;
        }

        p{
            color: #3751FF;
        }
    }

    h2 {
        font-size: 19px;
        font-weight: 700;
        color: #9FA2B4;
    }

    p{
        font-size: 40px;
        font-weight: 700;
        color: #252733;
        padding-top: 12px;
    }

    span {
        padding-left: 5px;
    }
`
