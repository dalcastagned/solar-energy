import React from 'react';

import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import ButtonEdit from '../ButtonEdit'
import ButtonRemove from '../ButtonRemove';
import * as S from './elements'

const CardUnity = ({ unity, handleRemove }) => {

    const navigate = useNavigate();

    return (
        <S.Container>
            <S.ContainerTop color='red'>
                <p>{unity.nickname}</p>
            </S.ContainerTop>
            <S.ContainerInfo color='red'>
                <p>{`Local: ${unity.place}`}</p>
                <p>{`Marca: ${unity.brand}`}</p>
                <p>{`Modelo: ${unity.model}`}</p>
                <p>{unity.active ? "Unidade Ativa" : "Unidade Inativa"}</p>
                <div>
                    <ButtonEdit onClick={() => navigate(`/unidades/edicao/${unity.id}`)} >
                        <FaEdit />
                    </ButtonEdit>
                    <ButtonRemove onClick={() => handleRemove(unity.id)} >
                        <MdDelete />
                    </ButtonRemove>
                </div>
            </S.ContainerInfo>
        </S.Container>
    )
};

export default CardUnity;
