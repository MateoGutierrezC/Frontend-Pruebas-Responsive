"use client"
import '../assets/css/SearchBar.css'

interface SearchBar {
  text: string
}


function SearchBar({ text }: SearchBar) {
  const onClick = () => {
    console.log("Buscando");
  }

  return (
    <div className='searchBar'>
      <button className='sbButton' type='submit' onClick={onClick}>
        {text}
      </button>
      <input type="text" className="sbInput" />
    </div>
  )
}

export default SearchBar