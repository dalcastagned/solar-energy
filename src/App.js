import ButtonAction from "./components/ButtonAction";
import GlobalStyle, { Container } from "./styles/globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ButtonAction text='Nova Unidade' />
    </Container>
  );
}

export default App;
