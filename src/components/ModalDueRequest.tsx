import '../assets/css/ModalDueRequest.css'
import DefaultButton from './DefaultButton'
import DefaultContainer from './DefaultContainer'
import InfoForModal from './InfoForModal'
import { FaDownload } from 'react-icons/fa'

function ModalDueRequest() {
    const solicitud = 12131231
    return (
        <div className='ModDueReqCont'>
            <div className="ContainerModInfo">
                <label htmlFor="ModInfo">Solicitud {solicitud}</label>
                <div className="ModInfo" id='ModInfo'>
                    <InfoForModal title='Nombre' text='Andres Lopez'></InfoForModal>
                    <InfoForModal title='N Documento' text='12345678910'></InfoForModal>
                    <InfoForModal title='Telefono' text='1234567890'></InfoForModal>
                    <InfoForModal title='Correo' text='asdasdasd@asdasdasd.com'></InfoForModal>
                    <InfoForModal title='Contrato' text='12433254534234'></InfoForModal>
                    <InfoForModal title='Codigo Paz y Salvo' text='4234235444253'></InfoForModal>
                    <InfoForModal title='Supervisor' text='Pepito Perez'></InfoForModal>
                </div>
            </div>
            <div className="ModCont">
                <DefaultContainer showDueProcess={true} text='Parece que tiene algunos procesos pendiente'></DefaultContainer>
            </div>
            <div className="ModButton">
                <DefaultButton title='Aceptar' type={"button"}></DefaultButton>
            </div>
        </div>
    )
}

export default ModalDueRequest