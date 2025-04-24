import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: 16, background: '#007bff', color: 'white' }}>
    <Link to="/" style={{ color: 'white', marginRight: 16 }}>Início</Link>
    <Link to="/usuarios" style={{ color: 'white', marginRight: 16 }}>Usuários</Link>
    <Link to="/usuarios/novo" style={{ color: 'white' }}>Novo Usuário</Link>
  </nav>
);

export default Navbar;
