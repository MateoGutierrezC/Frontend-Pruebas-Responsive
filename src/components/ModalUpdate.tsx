"use client"
import '../assets/css/ModalUpdate.css'
import DefaultButton from './DefaultButton'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"

function ModalUpdate() {
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
        router.push('/user/perfil')
    })

    const user = {
        name: "Pepito",
        lastname: "Perez",
        document: "1234567890"
    }



    return (
        <div className='modalUpdate-container'>

            <form className='MUCont' onSubmit={onSubmit}>
                <div className='modalUpdate-info'>
                    <h2>Actualizar datos</h2>
                    <div className="MUOptions">
                        <div>
                            <label htmlFor="name" className='inputUpdate-Label'>Nombre</label>
                            <input
                                type="text"
                                id="name"
                                className='inputUpdate'
                                placeholder='Escriba su nombre'
                                {...register("name", {
                                    required: true
                                })} />
                            {
                                errors.name?.type === "required" && <span className='form-validationUpdate'>Nombre requerido</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="lastname" className='inputUpdate-Label'>Apellido</label>
                            <input
                                type="text"
                                id="lastname"
                                className='inputUpdate'
                                placeholder='Escriba su apellido'
                                {...register("lastname", {
                                    required: true
                                })} />
                            {
                                errors.lastname?.type === "required" && <span className='form-validationUpdate'>Apellido requerido</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="mail" className='inputUpdate-Label'>Correo</label>
                            <input
                                type="text"
                                id="mail"
                                className='inputUpdate'
                                placeholder='Escriba su numero de contrato'
                                {...register("mail", {
                                    required: true
                                })} />
                            {
                                errors.mail?.type === "required" && <span className='form-validationUpdate'>Correo requerido</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="phone" className='inputUpdate-Label'>Telefono</label>
                            <input
                                type="text"
                                id="phone"
                                className='inputUpdate'
                                placeholder='Escriba su numero de contrato'
                                {...register("phone", {
                                    required: true
                                })} />
                            {
                                errors.phone?.type === "required" && <span className='form-validationUpdate'>Telefono requerido</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="city" className='inputUpdate-Label'>Ciudad</label>
                            <input
                                type="text"
                                id="city"
                                className='inputUpdate'
                                placeholder='Escriba su numero de contrato'
                                {...register("city", {
                                    required: true
                                })} />
                            {
                                errors.city?.type === "required" && <span className='form-validationUpdate'>Ciudad requerida</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="trainingCenter" className='inputUpdate-Label'>Centro de formacion</label>
                            <input
                                type="text"
                                id="trainingCenter"
                                className='inputUpdate'
                                placeholder='Escriba su numero de contrato'
                                {...register("trainingCenter", {
                                    required: true
                                })} />
                            {
                                errors.trainingCenter?.type === "required" && <span className='form-validationUpdate'>Centro de formacion requerido</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="MUButton">
                    <DefaultButton title='Enviar' type={"submit"}></DefaultButton>
                </div>

            </form>

        </div>
    )
}

export default ModalUpdate