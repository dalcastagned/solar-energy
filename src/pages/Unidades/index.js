import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonAction from '../../components/ButtonAction';
import Table from '../../components/Table';
import { deleteInfo, getInfo } from '../../services/Api';
import { Container, ContainerButton } from './elements';


const Unidades = () => {

    const [updateTable, setUpdateTable] = useState(false)
    const [units, setUnits] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getInfo("/unidades")
            .then((data) => {
                setUnits(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados')
            });
    }, [updateTable]);

    function handleRemove(id) {
        deleteInfo(
            `/unidades/${id}`,
        )
        setUpdateTable(!updateTable)
    }

    return (
        <Container>
            <h1>Lista de unidades</h1>
            <Table data={units} handleRemove={handleRemove}/>
            <ContainerButton>
                <ButtonAction text="Nova Unidade" onClick={() => navigate('/unidades/cadastro')}/>
            </ContainerButton>
        </Container>
    )
};

export default Unidades;
