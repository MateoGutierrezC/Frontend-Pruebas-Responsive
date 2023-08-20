import '../assets/css/RightSideContainer1.css'
import LoginInput from './LoginInput'
import Logo from './Logo'
import DefaultButton from './DefaultButton'


function RightSideContainerFirst() {
    return (
        <div className='rightContainer1'>
            <Logo src="/img/Logo.svg" alt='LogoSena'></Logo>
            <LoginInput inputType='text' title='Documento'></LoginInput>
            <LoginInput inputType='password' title='Contraseña'></LoginInput>
            <DefaultButton title='Ingresar'></DefaultButton>
        </div>
    )
}

export default RightSideContainerFirst