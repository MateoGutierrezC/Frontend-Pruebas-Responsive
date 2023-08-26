"use client"
import '../assets/css/RightSideContainer1.css'
import LoginInput from './LoginInput'
import DefaultButton from './DefaultButton'
import { useForm } from "react-hook-form"

function FormLogin() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <div>
            <form className='LoginFormContainer' action="" onSubmit={onSubmit}>
                <input
                    className='loginInput'
                    type="text"
                    placeholder='Documento'
                    {...register("documento", {
                        required: true
                    })}
                />
                {
                    errors.documento?.type === "required" && <span>Documento requerido</span>
                }
                <input
                    className='loginInput'
                    type="password"
                    placeholder='Contraseña'
                    {...register("contraseña", {
                        required: true
                    })}
                />
                {
                    errors.contraseña && <span>Contraseña requerida</span>
                }
                <div className='Login-ButtonContainer'>
                    <DefaultButton title='Ingresar' type={'submit'}></DefaultButton>
                </div>
            </form>
        </div>
    )
}

export default FormLogin