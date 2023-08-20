import { IconType } from 'react-icons'
import '../assets/css/DefaultButton.css'
import {createElement } from 'react'

interface DefaultButton {
    title?: string,
    // icon?: IconType,
    color?: string,
}

function DefaultButton({ title, icon, color }: DefaultButton) {
    const btnStyle: React.CSSProperties = {
        backgroundColor: color
    };

    return (
        <div className='defaultBtn' >
            <a style={btnStyle} className='btn'>{title} {icon && <a className='iBtn' href="#">{createElement(icon, {})}</a>}</a>
        </div>
    )

}

export default DefaultButton