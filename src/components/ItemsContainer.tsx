import '../assets/css/ItemsContainer.css'
import ListCardItem from './ListCardItem'

function ItemsContainer() {
    const solicitudes = [
        { userid: "1", state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "2", state: "aprobado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "3", state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "4", state: "pendiente", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "5", state: "aprobado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "6", state: "rechazado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "7", state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "8", state: "aprobado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "9", state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "10", state: "pendiente", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "11", state: "aprobado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "12", state: "rechazado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "13", state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "14", state: "aprobado", typedoc: "CERTIFICADO", date: "2023, 11, 12" },
        { userid: "15", state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "16", state: "pendiente", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "17", state: "aprobado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
        { userid: "18", state: "rechazado", typedoc: "PAZ Y SALVO", date: "2023, 11, 12" },
    ]

    return (
        <div className='itemsContainer'>
            {solicitudes.map(solicitud => (
                <ListCardItem key={solicitud.userid} state={solicitud.state} typedoc={solicitud.typedoc} date={new Date(solicitud.date)}></ListCardItem>
            ))}
        </div>
    )

}
export default ItemsContainer