import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UserList />} />
        <Route path="/usuarios/novo" element={<UserForm />} />
        <Route path="/usuarios/editar/:id" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;

