import '../assets/css/ModalDueRequest.css'
import DefaultButton from './DefaultButton'
import DefaultContainer from './DefaultContainer'
import InfoForModal from './InfoForModal'
import {FaDownload} from 'react-icons/fa'

function ModalDueRequest() {
    return (
        <div className='ModDueReqCont'>
            <div className="ModInfo">  
            <InfoForModal title='Nombre' text='infooooooooo'></InfoForModal>
            <InfoForModal title='N Documento' text='infooooooooo'></InfoForModal>
            <InfoForModal title='Telefono' text='infooooooooo'></InfoForModal>
            <InfoForModal title='Correo' text='infooooooooo'></InfoForModal>
            <InfoForModal title='Contrato' text='infooooooooo'></InfoForModal>
            <InfoForModal title='Codigo Paz y Salvo' text='infooooooooo'></InfoForModal>
            <InfoForModal title='Supervisor' text='infooooooooo'></InfoForModal>

            </div>
            <div className="ModCont">
                <DefaultContainer showComponent={true} text='Parece que tiene algunos procesos pendiente'></DefaultContainer>
            </div>
            <div className="ModDload">
                <DefaultButton title='Descargar' icon={FaDownload}></DefaultButton>
            </div>
            <div className="ModButton">
                <DefaultButton title='Aceptar'></DefaultButton>
            </div>
        </div>
    )
}

export default ModalDueRequest