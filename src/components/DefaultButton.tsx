import '../assets/css/DefaultButton.css'
import { IconType } from 'react-icons'
import { createElement } from 'react'

interface DefaultButton {
    type: 'submit' | 'button' | 'reset' | undefined,
    title?: string,
    icon?: IconType,
    color?: string,
}

function DefaultButton({ type, title, icon, color }: DefaultButton) {
    const btnStyle: React.CSSProperties = {
        backgroundColor: color
    };

    return (
        <div>
            <button
                type={type}
                style={btnStyle}
                className='btn'>
                {title}
                {icon && <a className='iBtn' href="#">{createElement(icon, {})}
                </a>}
            </button>
        </div>
    )

}

export default DefaultButton