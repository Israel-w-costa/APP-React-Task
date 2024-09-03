import "./FormTask.css"

import { useState } from "react"

function FormTask({ addTask }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    
    function formSubmit(e) {
        e.preventDefault();
        if (!value || !category) {
            return alert("Fill the form");
        }
        addTask(value, category);
        setValue("");  
        setCategory("");  
    }
 
    return (
        <div className="AddTask">
            <form onSubmit={formSubmit}>
                <input
                    className="inputTask"
                    type="text"
                    placeholder="Enter the Tasks"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    className="selectTask"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select your category</option>
                    <option value="Work">Work</option>
                    <option value="Study">Study</option>
                    <option value="Fun">Fun</option>
                    <option value="Food">Food</option>
                </select>
                <button type="submit" className="buttonTask">Create</button>
            </form>
        </div>
    );
 }
 
 export default FormTask;
 