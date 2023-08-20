import '../assets/css/RightSideContainer1.css'
import Logo from './Logo'
import DefaultButton from './DefaultButton'
import InfoDefault from './InfoDefault'


function RightSideContainerSecond() {
    return (
        <div className='rightContainer1'>
            <Logo src="/img/Logo.png" alt='LogoSena'></Logo>
            <InfoDefault text='
            Info
            '></InfoDefault>
            <DefaultButton title='Sofia Plus'></DefaultButton>
        </div>
    )
}

export default RightSideContainerSecond