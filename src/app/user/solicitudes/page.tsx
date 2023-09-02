import "../../../assets/css/user/userRequests.css"
import DefaultButton from "@/components/DefaultButton"
import DueProcess from "@/components/DueProcess"
import SearchBar from "@/components/SearchBar"
import SideBar from "@/components/SideBar"
import SidebarButton from "@/components/SidebarButton"
import { BiFile, BiSolidUser, BiSolidLeftArrowCircle } from 'react-icons/bi'
import ItemsContainer from "@/components/ItemsContainer"

function Solicitudes() {
  return (
    <div className="rightSection">
      <h2>Lista de solicitudes</h2>
      <div className="search-container">
        <SearchBar text={"BUSCAR"}></SearchBar>
        <DefaultButton type={undefined} title="Ordenar por" />
      </div>
      <ItemsContainer />
      <div className="requestButton">
        <DefaultButton type={"button"} title="Realizar Nueva Solicitud" />
      </div>
    </div>
  )
}

export default Solicitudes