import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ButtonEdit from '../ButtonEdit'
import ButtonRemove from '../ButtonRemove';
import {
    Container,
    ContainerTop,
    ContainerInfo
} from './elements'
import { useNavigate } from 'react-router-dom';

const CardUnity = ({ unity, handleRemove }) => {

    const navigate = useNavigate();

    return (
        <Container>
            <ContainerTop color='red'>
                <p>{unity.nickname}</p>
            </ContainerTop>
            <ContainerInfo color='red'>
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
            </ContainerInfo>
        </Container>
    )
};

export default CardUnity;
