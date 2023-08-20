import '../assets/css/InputDefault.css'

interface InputDef {
    text: string
}

function InputDefault({ text }: InputDef) {
    return (
        <div className='inpDef'>
            <div className='textInp'>
                <p>{text}</p>
            </div>
            <div className='Inp'>
                <input type="text" />
            </div>
        </div>
    )

}
export default InputDefault