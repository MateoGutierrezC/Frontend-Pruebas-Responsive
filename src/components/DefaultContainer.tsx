import '../assets/css/DefaultContainer.css'
import DueProcess from './DueProcess'
import RejectedComent from './RejectedComment'

interface DefaultContainer {
    text?: string
    showDueProcess?: boolean
    showRejectedComent?:boolean
}

function DefaultContainer({ text, showDueProcess, showRejectedComent }: DefaultContainer) {
    return (
        <div className="defContainer">
            <div className="defCText">
                <p>{text}</p>
            </div>
            <div className="defCContent">
                {showDueProcess && <DueProcess text='Hola' />}
                {showRejectedComent && <RejectedComent comment='Motivo:' reason='Falta un libro en biblioteca'/>}

            </div>
        </div>
    )
}

export default DefaultContainer