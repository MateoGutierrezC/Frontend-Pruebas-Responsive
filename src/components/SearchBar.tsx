import '../assets/css/SearchBar.css'

interface SearchBar {
    text: string
}


function SearchBar({ text }: SearchBar) {
    return (
        <div className='searchBar'>
            <div className='sbButton'>
                <a className='submitButton' href="#">
                    <input type="submit" value={text} />
                </a>
            </div>
            <div className="sbInput">
                <input type="text" />
            </div>
        </div>
    )
}

export default SearchBar