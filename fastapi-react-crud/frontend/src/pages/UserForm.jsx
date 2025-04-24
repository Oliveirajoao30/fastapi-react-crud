import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:8000/usuarios';

export default function UserForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((res) => {
        setNome(res.data.nome);
        setEmail(res.data.email);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = { nome, email };

    if (id) {
      axios.put(`${API_URL}/${id}`, usuario).then(() => navigate('/usuarios'));
    } else {
      axios.post(API_URL, usuario).then(() => navigate('/usuarios'));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{id ? 'Editar Usuário' : 'Novo Usuário'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
