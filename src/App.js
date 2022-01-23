import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Unidades from "./pages/Unidades";
import Dashboard from "./pages/Dashboard";
import UnidadesCadastro from "./pages/UnidadesCadastro";
import Geracao from "./pages/Geracao";
import BottomBar from './components/BottomBar';
import SideMenu from './components/SideMenu';
import TopBar from './components/TopBar';

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <TopBar/>
        <SideMenu />
        <BottomBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/unidades/cadastro" element={<UnidadesCadastro />} />
          <Route path="/unidades/edicao/:id" element={<UnidadesCadastro />} />
          <Route path="/geracao/cadastro" element={<Geracao />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
