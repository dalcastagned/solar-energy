import styled from 'styled-components'

export const TableContainer = styled.table`
    max-width: 1224px;
    width: 100%;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.08);
    background: #fff;
    margin: 0 auto;

    
    @media screen and (max-width: 750px){
            display: none;
        }
`

export const Thead = styled.thead`
    background: rgba(232, 232, 232, 0.2);
    border-bottom: 1px solid #E8E8E8;
    height: 56px;
`

export const Tr = styled.tr`
    background: #fff;
    border-bottom: 1px solid #E8E8E8;
    height: 56px;
    text-align: center;
`


export const TdButtons = styled.td`
    padding-right: 5px;
`





