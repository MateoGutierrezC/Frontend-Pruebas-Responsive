import '../assets/css/ModalRejectedRequest.css'
import InfoForModal from './InfoForModal'
import DefaultContainer from './DefaultContainer'
import DefaultButton from './DefaultButton'

interface MMRejected {
    title: string
}

function ModalRejectedRequest({ title }: MMRejected) {
    return (
        <div className="MRRContent">
            <div className="MMRtitle">
                <h3>{title}</h3>
            </div>

            <div className="MMRInfo">
                <InfoForModal title='Nombre del Usuario' text='Infooo'></InfoForModal>
                <InfoForModal title='CC' text='Infooo'></InfoForModal>
                <InfoForModal title='Telefono' text='Infooo'></InfoForModal>
                <InfoForModal title='Correo' text='Infooo'></InfoForModal>
                <InfoForModal title='N Contrato' text='Infooo'></InfoForModal>
                <InfoForModal title='N PyZ' text='Infooo'></InfoForModal>
                <InfoForModal title='Supervisor' text='Infooo'></InfoForModal>
                <InfoForModal title='Area que rechazo' text='Infooo'></InfoForModal>
            </div>
            <div className="MMRDescrip">
                <DefaultContainer text='Su paz y salvo ha sido rechazado' showRejectedComent></DefaultContainer>
            </div>

            <div className="MMRButton">
                <DefaultButton title='Aceptar'></DefaultButton>
            </div>
        </div>
    )
}

export default ModalRejectedRequest