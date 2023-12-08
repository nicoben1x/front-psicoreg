import React, { useState, useEffect } from 'react';
import "./RegistroPsico.css"
import { apiUrl } from "../API/ApiConfig"

// Definir el componente funcional
const RegistroPsico = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://back-psicoreg.onrender.com/obtener-datos');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al obtener datos desde el backend:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Registro Psicológico</h2>
      {data.map((row) => (
        <ul key={row.id} className="registro-psico-item">
          <li><strong>ID:</strong> {row.id}</li>
          <li><strong>Fecha:</strong> {row.fecha}</li>
          <li><strong>Situación:</strong> {row.situacion}</li>
          <li><strong>Emociones:</strong> {row.emociones}</li>
          <li><strong>Pensamientos Automáticos:</strong> {row.pensamientos_automaticos}</li>
          <li><strong>Distorsiones Cognitivas:</strong> {row.distorsiones_cognitivas}</li>
          <li><strong>Respuesta Racional:</strong> {row.respuesta_racional}</li>
          <li><strong>Resultado:</strong> {row.resultado}</li>
        </ul>
      ))}
    </div>
  );
};


// Exportar el componente funcional
export default RegistroPsico;
