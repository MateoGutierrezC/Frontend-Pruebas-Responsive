import "./pruebas.css"
import CommentInput from "@/components/CommentInput"
import DefaultButton from "@/components/DefaultButton"
import DefaultContainer from "@/components/DefaultContainer"
import DueProcess from "@/components/DueProcess"
import InfoDefault from "@/components/InfoDefault"
import InfoForModal from "@/components/InfoForModal"
import InputDefault from "@/components/InputDefault"
import InputOptions from "@/components/InputOptions"
// import ItemRequestRejected from "@/components/ItemRequestRejected"
import ItemsContainer from "@/components/ItemsContainer"
import LeftSideContainer from "@/components/LeftSideContainer"
import ListCardItem from "@/components/ListCardItem"
import LoginButton from "@/components/LoginButton"
import LoginInput from "@/components/LoginInput"
import Logo from "@/components/Logo"
import ModalAproved from "@/components/ModalAproved"
import ModalDueRequest from "@/components/ModalDueRequest"
import ModalRequest from "@/components/ModalRequest"
import RejectedComment from "@/components/RejectedComment"
import RightSideContainer1 from "@/components/RightSideContainer1"
import RightSideContainer2 from "@/components/RightSideContainer2"
import SearchBar from "@/components/SearchBar"
import SideBar from "@/components/SideBar"
import SidebarButton from "@/components/SidebarButton"
import UpdateUserData from "@/components/UpdateUserData"


import { BiFile, BiSolidUser,BiSolidLeftArrowCircle } from 'react-icons/bi'

function page() {
  return (
    <div className="pruebaComponente">
      {/* <CommentInput></CommentInput> */}
      {/* <DefaultButton title={"hola"}></DefaultButton> */}
      {/* <DefaultContainer></DefaultContainer> */}
      {/* <DueProcess text={"Hola"}></DueProcess> */}
      {/* <InfoDefault text={"hola"}></InfoDefault> */}
      {/* <InfoForModal title="hola" text="sdaasda"></InfoForModal> */}
      {/* <InputDefault text={"Hola"}></InputDefault> */}
      {/* <InputOptions text={"hola"} option1={"1"} option2={"2"} option3={"3"}></InputOptions> */}
      {/* <ItemRequestRejected></ItemRequestRejected> */}
      {/* <ItemsContainer></ItemsContainer> */}
      {/* <LeftSideContainer></LeftSideContainer> */}
      {/* <ListCardItem state={"asd"} typedoc={"asdasd"} date={new Date(2023, 11, 12)}></ListCardItem> */}
      {/* <LoginButton title={"click"}></LoginButton> */}
      {/* <LoginInput title={"Contraseña"} inputType={"text"}></LoginInput> */}
      {/* <Logo src={"/img/Logo.svg"} alt={"Logo"} ></Logo> */}
      {/* <ModalAproved firsttext={"asd"} secondtext={"asd"} icon1={BiSolidUser} icon2={BiSolidUser}></ModalAproved> */}
      {/* <ModalDueRequest></ModalDueRequest> */}
      <ModalRequest></ModalRequest>
      {/* <RejectedComment comment={"comentario"} reason={"Razon"}></RejectedComment> */}
      {/* <RightSideContainer1></RightSideContainer1> */}
      {/* <RightSideContainer2></RightSideContainer2> */}
      {/* <SearchBar text={"Buscar"}></SearchBar> */}
      {/* <SideBar></SideBar> //Problema con iconos */}
      {/* <SidebarButton icon={BiFile}></SidebarButton> //Problema con iconos */}
      {/* <UpdateUserData text={"Pepito Perez"}></UpdateUserData> */}
    </div> 
  )
}

export default page