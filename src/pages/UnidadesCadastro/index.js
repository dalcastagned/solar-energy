import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import ButtonAction from '../../components/ButtonAction';
import InputCheckbox from '../../components/InputCheckbox';
import InputText from '../../components/InputText';
import { UnityContext } from '../../context/Unity';
import { getInfo, setInfo, updateInfo } from '../../services/Api';
import { Container, Form } from './elements';

const UnidadesCadastro = () => {

    const { pathname } = useLocation()
    const params = useParams();
    const navigate = useNavigate();
    const { nickname,
        setNickname,
        brand,
        setBrand,
        place,
        setPlace,
        model,
        setModel,
        active,
        setActive,
        error,
        setError,
        handleSubmit
    } = useContext(UnityContext)
    const title = (pathname === '/unidades/cadastro' ? "Cadastro de Unidade Geradora" : "Atualização de Unidade Geradora")
    const titleButton = (pathname === '/unidades/cadastro' ? "Salvar" : "Atualizar")

    useEffect(() => {
        if (pathname !== '/unidades/cadastro') {
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
             )
             navigate('/unidades')
         }
    }

    return (
        <Container>
            <h1>{title}</h1>
            <Form onSubmit={pathname === '/unidades/cadastro' ? handleSubmit : handleUpdate}>
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
            </Form>
        </Container>
    )
};

export default UnidadesCadastro;
