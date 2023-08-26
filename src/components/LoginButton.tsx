"use client"
import '../assets/css/LoginButton.css'

interface LoginButton {
    title: string
}


function LoginButton({ title }: LoginButton) {
    return (
        <div className='buttonContainer my-3'>
            <button
                className='loginButton'>
                {title}
            </button>
        </div>
    )
}


export default LoginButton