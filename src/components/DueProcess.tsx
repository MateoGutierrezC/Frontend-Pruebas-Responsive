import '../assets/css/DueProcess.css'


interface DueProc {
    text: string
}

function DueProcess({ text }: DueProc) {
    return (
        <div className="procCont">

            <div className='procCircle'>
            </div>
            <div className="procText">
                <a href="#">{text}</a>
            </div>
        </div>
    )
}

export default DueProcess