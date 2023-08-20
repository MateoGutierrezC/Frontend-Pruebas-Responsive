import '../assets/css/InfoForModal.css'


interface InfModal{
    title?: string,
    text?: string
}

function InfoForModal({title,text}:InfModal){
    return(
        <div className='IMCont'>
            <div className='IMTitle'>{title}</div>
            <div className='IMText'>{text}</div>
        </div>
    )
}

export default InfoForModal