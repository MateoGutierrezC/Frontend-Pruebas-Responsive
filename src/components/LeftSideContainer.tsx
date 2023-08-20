import '../assets/css/LeftSideContainer.css'
import LoginButton from './LoginButton'


function LeftSideContainer() {
    return (
        <div className='leftContainer'>
            <div className='btn-left'>
                <LoginButton title='Iniciar Sesion'></LoginButton>
                <LoginButton title='Recuperar Contrasena'></LoginButton>
            </div>
        </div>
    )
}

export default LeftSideContainer