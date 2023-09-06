"use client"
import '../assets/css/ModalRequest.css'
import DefaultButton from './DefaultButton'
import InfoForModal from './InfoForModal'
import InputOptions from './InputOptions'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"

function ModalRequest() {
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
        router.push('/user/solicitudes')
    })

    const user = {
        name: "Pepito",
        lastname: "Perez",
        document: "1234567890"
    }



    return (
        <div className='modalRequest-container'>

            <form className='MRCont' onSubmit={onSubmit}>
                <div className='modalRequest-info'>
                    <div className="MRInfo">
                        <div className="perfilInfo-item">
                            <p>{user.name} {user.lastname}</p>
                        </div>
                        <div className="perfilInfo-item">
                            <p>{user.document}</p>
                        </div>
                    </div>
                    <div className="MROptions">
                        <div>
                            <label htmlFor="typeRequest" className='inputRequest-Label'>Tipo de solicitud</label>
                            <select
                                id="typeRequest"
                                className='inputRequest'
                                {...register("typeRequest", {
                                    required: true
                                })}>
                                <option value="">Elija</option>
                                <option value="ps">Paz y salvo</option>
                                <option value="c">Certificado</option>
                            </select>
                            {
                                errors.typeRequest?.type === "required" && <span className='form-validationRequest'>Tipo requerido</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="contractNum" className='inputRequest-Label'>No. Contrato</label>
                            <input
                                type="text"
                                id="contractNum"
                                className='inputRequest'
                                placeholder='Escriba su numero de contrato'
                                {...register("contractNum", {
                                    required: true
                                })} />
                            {
                                errors.contractNum?.type === "required" && <span className='form-validationRequest'>No. Contrato requerido</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="MRButton">
                    <DefaultButton title='Enviar' type={"submit"}></DefaultButton>
                </div>

            </form>

        </div>
    )
}

export default ModalRequest