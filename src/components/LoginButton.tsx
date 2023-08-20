import '../assets/css/LoginButton.css'

interface LoginButton {
    title: string
}

function LoginButton({ title }: LoginButton) {
    return (
        <div className='buttonContainer'>
            <a className='loginButton'>{title}</a>
        </div>
    )
}


export default LoginButton