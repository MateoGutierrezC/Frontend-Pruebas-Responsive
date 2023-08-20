import '../assets/css/RejectedComment.css'

interface RComment{
    comment:string
    reason:string
}

function RejectedComent({comment,reason}:RComment) {
    return (
        <div className="RCContainer">
            <p className='RComment'>{comment}</p>
            <p className='RReason'>● {reason}</p>
        </div>
    )
}

export default RejectedComent