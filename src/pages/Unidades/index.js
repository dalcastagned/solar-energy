import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { deleteInfo, getInfo } from '../../services/Api';
import ButtonAction from '../../components/ButtonAction';
import CardUnity from '../../components/CardUnity';
import Table from '../../components/Table';
import * as S from './elements';

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
        deleteInfo(`/unidades/${id}`)
            .then(() => {
                getInfo(`/geracao/?idUnity=${id}`)
                    .then((data) => {
                        data.map(data => (
                            deleteInfo(`/geracao/${data.id}`))
                        )
                    })
                    .catch (() => {return null})               
                toast.success('Removido com sucesso')
                setUpdateUnits(!updateUnits)
            })
            .catch(() => {
                toast.error('Erro ao remover')
            })
    }
    return (
        <S.Container>
            <h1>Lista de unidades</h1>
            <Table data={units} handleRemove={handleRemove} />
            <S.ContainerCard>
                {React.Children.toArray(units.map(unity => (
                    <CardUnity unity={unity} handleRemove={handleRemove} />
                )))}
            </S.ContainerCard>
            <S.ContainerButton>
                <ButtonAction text="Nova Unidade" onClick={() => navigate('/unidades/cadastro')} />
            </S.ContainerButton>
        </S.Container>
    )
};

export default Unidades;
