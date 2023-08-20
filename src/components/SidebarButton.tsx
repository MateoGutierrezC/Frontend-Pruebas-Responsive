import { createElement } from 'react';
import '../assets/css/SidebarButton.css'
import { IconType } from 'react-icons'; 

interface SBbutton {
    text?: string
    icon: IconType;
}

function SidebarButton({ text,icon, }:SBbutton){
    return (
        <div className="sbuttonC">
            <a className='sbutton' href="">           
            {createElement(icon, {})}
            <a className="text">{text}</a>
            </a>
        </div>
    );
};

export default SidebarButton;