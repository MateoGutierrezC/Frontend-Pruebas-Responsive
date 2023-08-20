import '../assets/css/InfoDefault.css'

interface InfoDefault{
    text:string
}



function InfoDefault({text}:InfoDefault) {
    return (
        <div className='infoContainer'>
            {text}
        </div>
    )
}

export default InfoDefault