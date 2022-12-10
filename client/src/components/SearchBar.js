import '../CSS/search.css'

const Search = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
      className="search-bar"
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Songs/Artists"
        onChange={props.onChange}
        /> 
      <button type='submit' className="search-button">Search</button>
    </form>
  )
}

export default Search