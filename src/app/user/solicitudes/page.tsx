import SearchBar from "@/components/SearchBar"
import SideBar from "@/components/SideBar"
import SidebarButton from "@/components/SidebarButton"
import { BiFile, BiSolidUser, BiSolidLeftArrowCircle } from 'react-icons/bi'

function Solicitudes() {
  return (
    <div>
      <h2>Lista de solicitudes</h2>
      <SearchBar text={"Buscar"}></SearchBar>
    </div>
  )
}

export default Solicitudes