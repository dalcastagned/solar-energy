import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getInfo, setInfo, updateInfo } from '../../services/Api';
import ButtonAction from '../../components/ButtonAction';
import InputCheckbox from '../../components/InputCheckbox';
import InputText from '../../components/InputText';
import * as S from './elements';

const UnidadesCadastro = () => {

    const { pathname } = useLocation()
    const [nickname, setNickname] = useState('')
    const [place, setPlace] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [active, setActive] = useState(false)
    const [error, setError] = useState({})
    const params = useParams();
    const navigate = useNavigate();
    const title = (pathname === '/unidades/cadastro' ? "Cadastro de Unidade Geradora" : "Atualização de Unidade Geradora")
    const titleButton = (pathname === '/unidades/cadastro' ? "Salvar" : "Atualizar")

    useEffect(() => {
        if (pathname.search("unidades/edicao") !== -1) {
            getInfo(`/unidades?id=${params.id}`)
                .then((data) => {
                    setNickname(data[0].nickname)
                    setPlace(data[0].place)
                    setBrand(data[0].brand)
                    setModel(data[0].model)
                    setActive(data[0].active)
                })
                .catch(() => {
                    toast.error('Erro ao buscar dados')
                });
        } else return
    }, [params.id, pathname]);

    function handleUpdate(event) {
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
            model.length > 0) {
            updateInfo(
                `/unidades/${params.id}`,
                {
                    id: params.id,
                    nickname: nickname,
                    place: place,
                    brand: brand,
                    model: model,
                    active: active
                }
            ).then(() => {
                navigate('/unidades')
            })
        }
    }

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
            model.length > 0) {
            setInfo(
                '/unidades',
                {
                    nickname: nickname,
                    place: place,
                    brand: brand,
                    model: model,
                    active: active
                }
            ).then(() => {
                navigate('/unidades')
            })
        }
    }

    return (
        <S.Container>
            <h1>{title}</h1>
            <S.Form onSubmit={pathname === '/unidades/cadastro' ? handleSubmit : handleUpdate}>
                <InputText
                    label='Apelido'
                    errorMessage={error.nicknameError}
                    errorText="Campo Obrigatório"
                    smallInput={true}
                    placeholder='Painel 1'
                    value={nickname}
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
                    value={place}
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
                    value={brand}
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
                    value={model}
                    onChange={(e) => {
                        setModel(e.target.value)
                        setError({})
                    }}
                />
                <InputCheckbox
                    label='Ativo'
                    checked={active}
                    onChange={() => { setActive(!active) }}
                />
                <ButtonAction
                    text={titleButton}
                    type='submit'
                />
            </S.Form>
        </S.Container>
    )
};

export default UnidadesCadastro;
