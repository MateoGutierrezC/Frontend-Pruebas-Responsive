"use client"
import "../../../assets/css/user/userPerfil.css"
import { useRouter } from 'next/navigation'


function Perfil() {
  const router = useRouter()

  const user = {
    nombre: "Pepito",
    apellido: "Perez",
    correo: "PepitoPerez@prueba.com",
    telefono: "3130001234",
    ciudad: "Bogota",
    centroFormacion: "CEET"
  }

  const onClick = () => {
    router.push('./perfil/actualizar-datos')
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
          <input name="correo" type="mail" value={user.correo} readOnly/>
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
      <div className="updateButton">
        <button type="button" className="btn-update" onClick={onClick} >
          Actualizar datos
        </button>
      </div>
    </div>
  )
}

export default Perfil