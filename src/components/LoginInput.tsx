import '../assets/css/LoginInput.css'


interface LoginInput {
    title: string
    inputType:string
}

function LoginInput({ title, inputType }: LoginInput) {
    return (
        <div className='inputContainer'>
            <input placeholder={title} className="loginInput" type={inputType} name={`${title}`}></input>
        </div>
    )
}

export default LoginInput 
