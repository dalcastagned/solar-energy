import ButtonLogin from "./components/ButtonLogin";
import InputLogin from "./components/InputLogin";
import GlobalStyle, { Container } from "./styles/globalStyles";
import { MdMailOutline } from "react-icons/md";
import { VscLock  } from "react-icons/vsc";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <InputLogin icon={<MdMailOutline/>} type='email' placeholder='E-mail'/>
      <InputLogin icon={<VscLock/>} type='password' placeholder='Senha'/>
      <ButtonLogin />
    </Container>
  );
}

export default App;
