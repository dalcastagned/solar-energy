import GlobalStyle, { Container } from "./styles/globalStyles";
import InputSelect from "./components/InputSelect";
import InputNumber from "./components/InputNumber";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <InputSelect label='Unidade Geradora' errorText='Campo Obrigatório' errorMessage={false} options={['1','2','3']}>
      </InputSelect>
      <InputNumber label='Unidade Geradora' errorText='Campo Obrigatório' errorMessage={false} placeholder="80" options={['1','2','3']}>
      </InputNumber>
    </Container>
  );
}

export default App;
