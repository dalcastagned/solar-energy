import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
    Container,
    ContainerTop,
    ContainerInfo,
    ContainerButtons
} from './elements'
import { useNavigate } from 'react-router-dom';

const CardUnity = ({unity, handleRemove}) => {
    
    const navigate = useNavigate();

    return (
        <Container>
        <ContainerTop color='red'>
            <p>{unity.nickname}</p>
            <ContainerButtons>
            <button onClick={() => navigate(`/unidades/edicao/${unity.id}`)} >
               <FaEdit/>
            </button>
            <button onClick={() => handleRemove(unity.id)} >
               <MdDelete/>
            </button>
            </ContainerButtons>
        </ContainerTop>
        <ContainerInfo color='red'>
            <p>{`Local: ${unity.place}`}</p>
            <p>{`Marca: ${unity.brand}`}</p>
            <p>{`Modelo: ${unity.model}`}</p>
            <p>{unity.active ? "Unidade Ativa" : "Unidade Inativa"}</p>
        </ContainerInfo>
    </Container>
    )
};

export default CardUnity;
