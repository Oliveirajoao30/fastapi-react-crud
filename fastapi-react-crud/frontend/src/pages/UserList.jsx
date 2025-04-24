import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:8000/usuarios';

export default function UserList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setUsuarios(res.data);
    });
  }, []);

  const excluirUsuario = (id) => {
    if (confirm('Tem certeza que deseja excluir?')) {
      axios.delete(`${API_URL}/${id}`).then(() => {
        setUsuarios(usuarios.filter((u) => u.id !== id));
      });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} ({usuario.email}) -
            <Link to={`/usuarios/editar/${usuario.id}`}> Editar </Link> |
            <button onClick={() => excluirUsuario(usuario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
