import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ButtonAction from '../../components/ButtonAction';
import CardUnity from '../../components/CardUnity';
import Table from '../../components/Table';
import { deleteInfo, getInfo } from '../../services/Api';
import {
    Container,
    ContainerButton,
    ContainerCard
} from './elements';


const Unidades = () => {

    const [updateUnits, setUpdateUnits] = useState(false)
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
    }, [updateUnits]);

    function handleRemove(id) {
        deleteInfo(
            `/unidades/${id}`,
        ).then(() => {
            setUpdateUnits(!updateUnits)
        })

    }

    return (
        <Container>
            <h1>Lista de unidades</h1>
            <Table data={units} handleRemove={handleRemove} />
            <ContainerCard>
                {React.Children.toArray(units.map(unity => (
                    <CardUnity unity={unity} handleRemove={handleRemove} />
                )))}
            </ContainerCard>
            <ContainerButton>
                <ButtonAction text="Nova Unidade" onClick={() => navigate('/unidades/cadastro')} />
            </ContainerButton>
        </Container>
    )
};

export default Unidades;
