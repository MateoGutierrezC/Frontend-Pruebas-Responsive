import '../../assets/css/user/userLayout.css'
import SideBar from "@/components/SideBar"
import SidebarButton from "@/components/SidebarButton"
import { BiFile, BiSolidUser, BiSolidLeftArrowCircle } from 'react-icons/bi'

function UserLayout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <section className="left sideBar">
        <SideBar>
          <SidebarButton text='Solicitudes' icon={BiFile} href={"/user/solicitudes"}></SidebarButton>
          <SidebarButton text='Perfil' icon={BiSolidUser} href={"/user/perfil"}></SidebarButton>
        </SideBar>
      </section>
      <section className="right">
        {children}
      </section>
    </div>
  )
}

export default UserLayout