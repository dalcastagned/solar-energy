import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonEdit from '../ButtonEdit';
import ButtonRemove from '../ButtonRemove';
import {
    TableContainer,
    Thead,
    Tr,
} from './elements'

const Table = ({ data, handleRemove }) => {

    const navigate = useNavigate();

    return (
        <TableContainer>
            <Thead>
                <tr>
                    <th>ID</th>
                    <th>Apelido</th>
                    <th>Local</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ativo</th>
                    <th></th>
                    <th></th>
                </tr>
            </Thead>
            <tbody>
                {React.Children.toArray(data.map(data => (
                    <Tr>
                        <td>{data.id.substring(0, 3) + "..."}</td>
                        <td>{data.nickname}</td>
                        <td>{data.place}</td>
                        <td>{data.brand}</td>
                        <td>{data.model}</td>
                        <td>{data.active ? "Ativo" : "Inativo"}</td>
                        <td>
                            <ButtonEdit onClick={() => navigate(`/unidades/edicao/${data.id}`)} />
                        </td>
                        <td>
                            <ButtonRemove onClick={() => handleRemove(data.id)} />
                        </td>
                    </Tr>
                )))}

            </tbody>
        </TableContainer>
    )
};

export default Table;
