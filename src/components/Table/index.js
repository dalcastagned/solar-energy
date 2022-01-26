import React from 'react';

import { useNavigate } from 'react-router-dom';

import ButtonEdit from '../ButtonEdit';
import ButtonRemove from '../ButtonRemove';
import * as S from './elements'

const Table = ({ data, handleRemove }) => {

    const navigate = useNavigate();

    return (
        <S.TableContainer>
            <S.Thead>
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
            </S.Thead>
            <tbody>
                {React.Children.toArray(data.map(data => (
                    <S.Tr>
                        <td>{data.id.substring(0, 3) + "..."}</td>
                        <td>{data.nickname}</td>
                        <td>{data.place}</td>
                        <td>{data.brand}</td>
                        <td>{data.model}</td>
                        <td>{data.active ? "Ativo" : "Inativo"}</td>
                        <S.TdButtons>
                            <ButtonEdit onClick={() => navigate(`/unidades/edicao/${data.id}`)} />
                        </S.TdButtons>
                        <S.TdButtons>
                            <ButtonRemove onClick={() => handleRemove(data.id)} />
                        </S.TdButtons>
                    </S.Tr>
                )))}

            </tbody>
        </S.TableContainer>
    )
};

export default Table;
