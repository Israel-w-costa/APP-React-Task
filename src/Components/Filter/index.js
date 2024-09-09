import "./Filter.css"

function Filter ({filter, setFilter}) {

    return (
        <div className="filther">
            <h2 className="h2filter">Filther:</h2>
            <select className="selectFilther" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option className="options" value="all"> All</option>
                <option className="options"  value="done">done</option>
                <option className="options" value="to do">to do</option>
            </select>
            </div>
    )
}

export default Filter;