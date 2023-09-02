import '../assets/css/ItemsContainer.css'
import ListCardItem from './ListCardItem'

function ItemsContainer() {
    const solicitudes = [
        { state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "aprobado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "pendiente", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "aprobado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "rechazado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "aprobado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "pendiente", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "aprobado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "rechazado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "aprobado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "aprobado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
    ]

    return (
        <div className='itemsContainer'>
            {solicitudes.map(solicitud => (
                <ListCardItem state={solicitud.state} typedoc={solicitud.typedoc} date={new Date(solicitud.date)}></ListCardItem>
            ))}
        </div>
    )

}
export default ItemsContainer