import React, { useState } from 'react';
import logo from '../../images/logo.png'
import InputLogin from '../../components/InputLogin'
import ButtonLogin from '../../components/ButtonLogin'
import { AiOutlineMail } from "react-icons/ai";
import { CgLock } from "react-icons/cg";
import {
    Container,
    ContainerInfo,
    ContainerLogin,
    ContainerImage,
    Form
} from './elements'

const HomePage = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();

        let user = email.substring(0, email.indexOf("@"));
        let domain = email.substring(email.indexOf("@") + 1, email.length);

        if ((user.length >= 1) &&
            (domain.length >= 3) &&
            (user.search("@") == -1) &&
            (domain.search("@") == -1) &&
            (user.search(" ") == -1) &&
            (domain.search(" ") == -1) &&
            (domain.search(".") != -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length - 1)) {
        } else {
            setEmailError(true)
        }

        if (password.length < 6) {
            setPasswordError(true)
        }
    }
    return (
        <Container>
            <ContainerImage />
            <ContainerLogin>
                <ContainerInfo>
                    <img src={logo} />
                    <h1>Seja bem vindo</h1>
                </ContainerInfo>
                <Form onSubmit={handleSubmit}>
                    <InputLogin
                        errorMessage={emailError}
                        icon={<AiOutlineMail />}
                        errorText='E-mail Obrigatório'
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailError(false)
                            setPasswordError(false)
                        }}
                        value={email}
                        placeholder='E-mail'
                    />
                    <InputLogin
                        errorMessage={passwordError}
                        icon={<CgLock />}
                        errorText='Senha de 6 Digitos Obrigatória'
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setPasswordError(false)
                            setEmailError(false)
                        }}
                        value={password}
                        placeholder='Senha'
                    />
                    <ButtonLogin />
                </Form>
            </ContainerLogin>
        </Container>
    )
};

export default HomePage;
