import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonAction from '../../components/ButtonAction';
import InputCheckbox from '../../components/InputCheckbox';
import InputText from '../../components/InputText';
import { Container, Form } from './elements';

const UnidadesCadastro = () => {

    const { pathname } = useLocation()
    const title = (pathname === '/unidades/cadastro' ? "Cadastro de Unidade Geradora" : "Atualização de Unidade Geradora")

    return (
        <Container>
            <h1>{title}</h1>
            <Form>
                <InputText
                    label='Apelido'
                    errorMessage={false}
                    errorText="Campo Obrigatório"
                    smallInput={true}
                    placeholder='Painel 1'
                />
                <InputText
                    label='Local'
                    errorMessage={false}
                    errorText="Campo Obrigatório"
                    smallInput={false}
                    placeholder='Rua Alberto 430'
                />
                <InputText
                    label='Marca'
                    errorMessage={false}
                    errorText="Campo Obrigatório"
                    smallInput={false}
                    placeholder='Resun'
                />
                <InputText
                    label='Modelo'
                    errorMessage={false}
                    errorText="Campo Obrigatório"
                    smallInput={false}
                    placeholder='155W'
                />
                <InputCheckbox
                    label='Ativo'
                />
                <ButtonAction
                    text='Salvar'
                />
            </Form>
        </Container>
    )
};

export default UnidadesCadastro;
