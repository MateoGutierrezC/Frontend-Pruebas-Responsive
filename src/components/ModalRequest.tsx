import '../assets/css/ModalRequest.css'
import DefaultButton from './DefaultButton'
import InfoForModal from './InfoForModal'
import InputOptions from './InputOptions'

function ModalRequest() {
    return (
        <div className='MRCont'>
            <div className="MRInfo">
                <InfoForModal title='Nombre de usuario'></InfoForModal>
                <InfoForModal title='Documento'></InfoForModal>
            </div>
            <div className="MROptions">
                <InputOptions option1='a' option2='b' option3='c' text='Hola'></InputOptions>
            </div>
            <div className="MRButton">
                <DefaultButton title='Enviar' type={"button"}></DefaultButton>
            </div>
        </div>
    )
}

export default ModalRequest