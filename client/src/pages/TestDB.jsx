import { useEffect, useState } from 'react';

export default function TestDB() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/test-db`)
      .then(res => res.json())
      .then(data => setResult(data.resultado))
      .catch(err => console.error('Error al conectar:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Prueba conexión Backend + MySQL</h1>
      {result !== null ? (
        <p>Resultado: {result}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
