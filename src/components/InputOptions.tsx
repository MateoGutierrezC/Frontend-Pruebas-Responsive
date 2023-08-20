import '../assets/css/InputOptions.css'

interface InputOpt {
    text: string,
    option1 :string
    option2 :string
    option3 :string
}


function InputOptions({ text, option1,option2,option3 }: InputOpt) {
    return (
        <div className='InpOpt'>
            <label className='textInpOp'>
                <p>{text}</p>
            </label>

            <div className='InpO'>
                <select id="options" name="options" >
                    <option selected>{option1}</option>
                    <option >{option2}</option>
                    <option >{option3}</option>
                </select>
            </div>
        </div>
    )

}
export default InputOptions