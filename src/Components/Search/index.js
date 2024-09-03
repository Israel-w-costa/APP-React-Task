import Filter from "../Filter";
import "./Search.css"

function Search( {filter, setFilter, search, setSearch}) {

    return (
        <div className="resourses">
           <div className="Search">
            <h2>Search:</h2>
            <input 
            className="inputSearch" 
            type="text" 
            value={search}
            onChange={(e)=> setSearch(e.target.value)}  
            placeholder="Digit to Search"></input>
            </div>
            <Filter filter={filter} setFilter={setFilter}/>
        </div>
    )
    
  }
  
  export default Search;
  