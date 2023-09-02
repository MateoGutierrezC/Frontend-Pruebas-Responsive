import '../assets/css/SidebarButton.css'
import Link from 'next/link';
import { createElement } from 'react';
import { IconType } from 'react-icons';

interface SBbutton {
    text?: string
    icon: IconType
    href: string
}

function SidebarButton({ text, icon, href }: SBbutton) {

    return (
        <div className="sbuttonC">
            <Link className='sbutton' href={href}>
                <span>
                    {createElement(icon, {})}
                </span>
                <p className="text">{text}</p>
            </Link>
        </div>
    );
};

export default SidebarButton;