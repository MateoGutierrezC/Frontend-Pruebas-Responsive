"use client"
import "../../../assets/css/user/userPerfil.css"
import React from 'react'

function Perfil() {

  const user = {
    nombre: "Pepito",
    apellido: "Perez",
    correo: "PepitoPerez@prueba.com",
    telefono: "3130001234",
    ciudad: "Bogota",
    centroFormacion: "CEET"
  }

  return (
    <div className="perfil-container">
      <h2>Perfil</h2>
      <div className="perfilInfo-container">
        <div className="perfilInfo-item">
          <label htmlFor="nombre">Nombre: </label>
          <input name="nombre" type="text" value={user.nombre} readOnly/>
        </div>

        <div className="perfilInfo-item">
          <label htmlFor="apellido">Apellido: </label>
          <input name="apellido" type="text" value={user.apellido} readOnly/>
        </div>

        <div className="perfilInfo-item">
          <label htmlFor="correo">Correo: </label>
          <input name="correo" type="text" value={user.correo} readOnly/>
        </div>

        <div className="perfilInfo-item">
          <label htmlFor="telefono">Telefono: </label>
          <input name="telefono" type="text" value={user.telefono} readOnly/>
        </div>

        <div className="perfilInfo-item">
          <label htmlFor="ciudad">Ciudad: </label>
          <input name="ciudad" type="text" value={user.ciudad} readOnly/>
        </div>
        
        <div className="perfilInfo-item">
          <label htmlFor="centroFormacion">Centro de Formacion: </label>
          <input name="centroFormacion" type="text" value={user.centroFormacion} readOnly/>
        </div>
      </div>
    </div>
  )
}

export default Perfil