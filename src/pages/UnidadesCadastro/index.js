import React from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react/cjs/react.development';
import ButtonAction from '../../components/ButtonAction';
import InputCheckbox from '../../components/InputCheckbox';
import InputText from '../../components/InputText';
import { setInfo } from '../../services/Api';
import { Container, Form } from './elements';

const UnidadesCadastro = () => {

    const { pathname } = useLocation()
    const [nickname, setNickname] = useState('')
    const [place, setPlace] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [active, setActive] = useState(false)
    const [error, setError] = useState({})
    const title = (pathname === '/unidades/cadastro' ? "Cadastro de Unidade Geradora" : "Atualização de Unidade Geradora")

    function handleSubmit(event) {
        event.preventDefault();

        setError({
            nicknameError: (nickname.length < 1 ? true : false),
            placeError: (place.length < 1 ? true : false),
            brandError: (brand.length < 1 ? true : false),
            modelError: (model.length < 1 ? true : false)
        })

        if (nickname.length > 0 &&
            place.length > 0 &&
            brand.length > 0 &&
            model.length > 0){
                setInfo(
                    '/unidades',
                    {
                        id: uuidv4(),
                        nickname: nickname,
                        place: place,
                        brand: brand,
                        model: model,
                        active: active
                    }
                )
            }
    }

    return (
        <Container>
            <h1>{title}</h1>
            <Form onSubmit={handleSubmit}>
                <InputText
                    label='Apelido'
                    errorMessage={error.nicknameError}
                    errorText="Campo Obrigatório"
                    smallInput={true}
                    placeholder='Painel 1'
                    onChange={(e) => {
                        setNickname(e.target.value)
                        setError({})
                    }}
                />
                <InputText
                    label='Local'
                    errorMessage={error.placeError}
                    errorText="Campo Obrigatório"
                    smallInput={false}
                    placeholder='Rua Alberto 430'
                    onChange={(e) => {
                        setPlace(e.target.value)
                        setError({})
                    }}
                />
                <InputText
                    label='Marca'
                    errorMessage={error.brandError}
                    errorText="Campo Obrigatório"
                    smallInput={false}
                    placeholder='Resun'
                    onChange={(e) => {
                        setBrand(e.target.value)
                        setError({})
                    }}
                />
                <InputText
                    label='Modelo'
                    errorMessage={error.modelError}
                    errorText="Campo Obrigatório"
                    smallInput={false}
                    placeholder='155W'
                    onChange={(e) => {
                        setModel(e.target.value)
                        setError({})
                    }}
                />
                <InputCheckbox
                    label='Ativo'
                    onChange={() => { setActive(!active) }}
                />
                <ButtonAction
                    text='Salvar'
                    type='submit'
                />
            </Form>
        </Container>
    )
};

export default UnidadesCadastro;
