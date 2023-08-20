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
                <div className="circleItem"></div>
                <div className="stateText">{state}</div>
            </div>
            <div className="typedocItem">
                <p>{typedoc}</p>
            </div>
            <div className="dateItem">
                <p>{date.toLocaleDateString()}</p>
            </div>
            <div className="buttonItem">
                <DefaultButton title='Información'></DefaultButton>
            </div>
        </div>
    )
}

export default ListCardItem