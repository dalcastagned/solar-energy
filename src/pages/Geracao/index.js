import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { getInfo, setInfo } from '../../services/Api';
import ButtonAction from '../../components/ButtonAction';
import InputSelect from '../../components/InputSelect';
import InputNumber from '../../components/InputNumber';
import InputDate from '../../components/InputDate';
import * as S from './elements';

const UnidadesCadastro = () => {

    const [options, setOptions] = useState([])
    const [units, setUnits] = useState([])
    const [unity, setUnity] = useState('')
    const [date, setDate] = useState(new Date())
    const [kw, setKw] = useState('')
    const [error, setError] = useState({})

    useEffect(() => {
        getInfo("/unidades?active=true")
            .then((data) => {
                setUnits(data)
                setOptions(data.map(item => item.nickname))
            })
            .catch(() => {
                toast.error('Erro ao buscar dados das unidades')
            });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        const id = units.filter(item => item.nickname === unity)

        setError({
            unityError: (unity.length < 1 ? true : false),
            kwError: (kw.length < 1 ? true : false)
        })

        if (unity.length > 0 &&
            kw.length > 0) {
            setInfo(
                '/geracao',
                {
                    idUnity: id[0].id,
                    unity: unity,
                    date: date,
                    kw: kw,
                }
            )
            setUnity('')
            setDate(new Date())
            setKw('')
        }
    }

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <InputSelect
                    label='Unidade Geradora'
                    errorMessage={error.unityError}
                    errorText="Campo Obrigatório"
                    options={options}
                    placeholder='Painel 1'
                    value={unity}
                    onChange={(e) => {
                        setUnity(e.target.value)
                        setError({})
                    }}
                />
                <InputDate
                    label='Data'
                    date={date}
                    setDate={setDate}
                />
                <InputNumber
                    label='Total kW gerado'
                    errorMessage={error.kwError}
                    errorText="Campo Obrigatório"
                    placeholder='80'
                    value={kw}
                    onChange={(e) => {
                        setKw(e.target.value)
                        setError({})
                    }}
                />
                <ButtonAction
                    text='Cadastrar'
                    type='submit'
                />
            </S.Form>
        </S.Container>
    )
};

export default UnidadesCadastro;
