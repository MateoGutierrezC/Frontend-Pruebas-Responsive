"use client"
import '../assets/css/FormLogin.css'
import DefaultButton from './DefaultButton'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation';


function FormLogin() {
    const router = useRouter()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
        
    async function enviar(dataToSend: string) {
        try {
            // const response = await fetch('/ruta-del-backend', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(dataToSend),
            // });

            // if (!response.ok) {
            //     throw new Error('Error en la solicitud al servidor');
            // }

            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error('Error al enviar datos al servidor:', error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        const dataToSend = JSON.stringify(data)
        console.log(dataToSend);
        enviar(dataToSend)
        reset()
        if(data.document === "user"){
            router.push('/user/solicitudes')
        }
    })

    return (
        <div>
            <form className='LoginFormContainer' action="" onSubmit={onSubmit}>
                <input
                    className='loginInput'
                    type="text"
                    placeholder='Documento'
                    {...register("document", {
                        required: true
                    })}
                />
                {
                    errors.document?.type === "required" && <span className='form-validation'>Documento requerido</span>
                }
                <input
                    className='loginInput'
                    type="password"
                    placeholder='Contraseña'
                    {...register("password", {
                        required: true
                    })}
                />
                {
                    errors.password && <span className='form-validation'>Contraseña requerida</span>
                }
                <div className='Login-ButtonContainer'>
                    <DefaultButton title='Ingresar' type={'submit'}></DefaultButton>
                </div>
                {/* {
                    error con la peticion && <span className='form-validation'>Usuario no encontrado</span>
                } */}
            </form>
        </div>
    )
}

export default FormLogin