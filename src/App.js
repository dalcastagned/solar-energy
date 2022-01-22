import InputCheckbox from "./components/InputCheckbox";
import GlobalStyle, { Container } from "./styles/globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <InputCheckbox label='Ativo' />
    </Container>
  );
}

export default App;
