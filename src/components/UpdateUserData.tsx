import '../assets/css/UpdateUserData.css'
import DefaultButton from './DefaultButton'
import InputDefault from './InputDefault'

interface Update {
    text: string
}

function UpdateUserData({ text }: Update) {
    return (
        <div className='UpContainer'>
            <div className="Uptitle">
                <p>{text}</p>
            </div>
            <div className="UpInputs">
                <InputDefault text='Nombre'></InputDefault>
                <InputDefault text='Apellidos'></InputDefault>
                <InputDefault text='Telefono'></InputDefault>
                <InputDefault text='Correo'></InputDefault>
                <InputDefault text='Ciudad'></InputDefault>
            </div>
            <div className="UpButton">
                <DefaultButton title='Guardar'></DefaultButton>
            </div>
        </div>
    )
}

export default UpdateUserData