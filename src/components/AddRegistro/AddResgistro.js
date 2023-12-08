import React, { useState } from 'react';
import "./AddRegistro.css"
import { apiUrl } from "../API/ApiConfig"


// Definir el componente funcional
const AddRegistro = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    fecha: '',
    situacion: '',
    emociones: '',
    pensamientos_automaticos: '',
    distorsiones_cognitivas: '',
    respuesta_racional: '',
    resultado: '',
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes realizar la lógica para enviar los datos al backend
    // Por ejemplo, puedes usar fetch() para hacer una solicitud POST al servidor

 
     fetch(`${apiUrl}/agregar-registro`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     })
       .then(response => response.json())
       .then(data => {
         console.log('Registro agregado con éxito:', data);
         // Puedes realizar acciones adicionales después de agregar el registro
       })
       .catch(error => {
         console.error('Error al agregar el registro:', error);
       });
  };

  return (
    <div>
      <h2>Añadir Registro Psicológico</h2>
      <form className='formAddRegistro' onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input type="text" name="fecha" value={formData.fecha} onChange={handleInputChange} />
        </label>
        <label>
          Situación:
          <textarea name="situacion" value={formData.situacion} onChange={handleInputChange} />
        </label>
        <label>
          Emociones:
          <textarea name="emociones" value={formData.emociones} onChange={handleInputChange} />
        </label>
        <label>
          Pensamientos Automáticos:
          <textarea name="pensamientos_automaticos" value={formData.pensamientos_automaticos} onChange={handleInputChange} />
        </label>
        <label>
          Distorsiones Cognitivas:
          <textarea name="distorsiones_cognitivas" value={formData.distorsiones_cognitivas} onChange={handleInputChange} />
        </label>
        <label>
          Respuesta Racional:
          <textarea name="respuesta_racional" value={formData.respuesta_racional} onChange={handleInputChange} />
        </label>
        <label>
          Resultado:
          <textarea name="resultado" value={formData.resultado} onChange={handleInputChange} />
        </label>
        <button type="submit">Añadir Registro</button>
      </form>
    </div>
  );
};

// Exportar el componente funcional
export default AddRegistro;
