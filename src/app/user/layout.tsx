import SideBar from "@/components/SideBar"
import SidebarButton from "@/components/SidebarButton"
import { BiFile, BiSolidUser, BiSolidLeftArrowCircle } from 'react-icons/bi'
import '../../assets/css/user/userLayout.css'

function UserLayout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="container  h-screen">
      <section className="sideBar bg-black  h-screen">
        <SideBar>
          <SidebarButton text='Solicitudes' icon={BiFile} href={"/user/solicitudes"}></SidebarButton>
          <SidebarButton text='Perfil' icon={BiSolidUser} href={"/user/perfil"}></SidebarButton>
        </SideBar>
      </section>
      <section className="bg-slate-500">
        {children}
      </section>
    </div>
  )
}

export default UserLayout