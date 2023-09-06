"use client"
import "../../../assets/css/user/userRequests.css"
import DefaultButton from "@/components/DefaultButton"
import DueProcess from "@/components/DueProcess"
import SearchBar from "@/components/SearchBar"
import SideBar from "@/components/SideBar"
import SidebarButton from "@/components/SidebarButton"
import ItemsContainer from "@/components/ItemsContainer"
import { useRouter } from 'next/navigation'


function Solicitudes() {
  const router = useRouter()

  const onClick = () => {
    router.push('./solicitudes/nueva-solicitud')
  }

  return (
    <div className="rightSection">
      <h2>Lista de solicitudes</h2>
      <div className="search-container">
        <SearchBar text={"BUSCAR"}></SearchBar>
        <DefaultButton type={undefined} title="Ordenar por" />
      </div>
      <ItemsContainer />
      <div className="requestButton">
        <button type="button" className="btn-Solicitud" onClick={onClick}>
          Realizar Nueva Solicitud
        </button>
      </div>
    </div>
  )
}

export default Solicitudes