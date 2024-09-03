import "./Filter.css"

function Filter ({filter, setFilter}) {

    return (
        <div className="filther">
            <h2>Filther:</h2>
            <select className="selectFilther" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all"> All</option>
                <option  value="done">done</option>
                <option value="to do">to do</option>
            </select>
            </div>
    )
    
}

export default Filter;