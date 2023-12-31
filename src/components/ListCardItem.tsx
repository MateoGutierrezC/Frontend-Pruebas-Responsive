import '../assets/css/ListCardItem.css'
import DefaultButton from './DefaultButton'

interface ListItem {
    state: string,
    typedoc: string,
    date: Date,
}

function ListCardItem({ state, typedoc, date }: ListItem) {
    return (
        <div className="clContainer">
            <div className="stateItem">
                {state === "aprobado" && <div className="circleItem aprobado"></div>}
                {state === "rechazado" && <div className="circleItem rechazado"></div>}
                {state === "pendiente" && <div className="circleItem pendiente"></div>}
                <p >{state}</p>
            </div>
            <div className="typedocItem">
                <p>{typedoc}</p>
            </div>
            <div className="dateItem">
                <p>{date.toLocaleDateString()}</p>
            </div>
            <div className="buttonItem">
                <DefaultButton title='Información' type={"button"}></DefaultButton>
            </div>
        </div>
    )
}

export default ListCardItem