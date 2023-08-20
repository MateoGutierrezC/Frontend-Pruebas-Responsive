import '../assets/css/SideBar.css'
import { BiFile, BiSolidUser,BiSolidLeftArrowCircle } from 'react-icons/bi'

import SidebarButton from './SidebarButton'
import Logo from './Logo'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo-sb'>
                <Logo src="src/assets/imgs/Logo.png" alt='LogoSena' ></Logo>
            </div>
            <div className='btn-sb'>
                <SidebarButton text='Solicitudes' icon={BiFile}></SidebarButton>
                <SidebarButton text='Perfil' icon={BiSolidUser}></SidebarButton>
            </div>
            <div className='log-out'>
                <SidebarButton text='Cerrar Sesion' icon={BiSolidLeftArrowCircle}></SidebarButton>
            </div>
        </div>
    )
}

export default Sidebar