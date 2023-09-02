import '../assets/css/SearchBar.css'

interface SearchBar {
    text: string
}


function SearchBar({ text }: SearchBar) {
    return (
        <div className='searchBar'>
            <div className='sbButton'>
                <button className='submitButton' type='submit'>
                    {/* <input type="submit" value={text} /> */}
                    {text}
                </button>
            </div>
            <div className="sbInput">
                <input type="text" />
            </div>
        </div>
    )
}

export default SearchBar