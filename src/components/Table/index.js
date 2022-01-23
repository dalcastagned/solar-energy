import React from 'react';
import ButtonEdit from '../ButtonEdit';
import ButtonRemove from '../ButtonRemove';
import {
    TableContainer,
    Thead,
    Tbody,
} from './elements'

const Table = () => {
    return (
        <TableContainer>
            <Thead>
                <tr>
                    <th>ID</th>
                    <th>Apelido</th>
                    <th>Local</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th></th>
                    <th></th>
                </tr>
            </Thead>
            <Tbody>
                <tr>
                    <td>123456</td>
                    <td>Usina 1</td>
                    <td>Germany</td>
                    <td>Marcaasd</td>
                    <td>216354</td>
                    <td><ButtonEdit /></td>
                    <td><ButtonRemove /></td>
                </tr>
            </Tbody>
        </TableContainer>
    )
};

export default Table;
