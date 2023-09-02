import '../assets/css/SideBar.css'
import { BiFile, BiSolidUser, BiSolidLeftArrowCircle } from 'react-icons/bi'
import SidebarButton from './SidebarButton'
import Logo from './Logo'


function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className='sidebar'>
      <div className='logo-sb'>
        <Logo src="../img/Logo.svg" alt='LogoSena' ></Logo>
      </div>
      <div className='btn-sb'>
        {children}
      </div>
      <div className='log-out'>
        <SidebarButton text='Cerrar Sesion' icon={BiSolidLeftArrowCircle} href={'/'}></SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar