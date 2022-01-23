import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<HomePage/>} />
          <Route path="/unidades" element={<HomePage/>} />
          <Route path="/unidades/cadastro" element={<HomePage/>} />
          <Route path="/unidades/edicao/:id" element={<HomePage/>} />
          <Route path="/geracao/cadastro" element={<HomePage/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
