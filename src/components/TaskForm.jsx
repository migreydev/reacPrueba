import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, completed: false });
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="container mt-4">
      <br />
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titulo:</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={title} 
            onChange={handleChange} 
            placeholder="Ingrese el título de la tarea" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
