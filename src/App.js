import { useState } from "react";

import FormTask from "./Components/FormTask";
import Title from "./Components/Title";
import List from "./Components/List";
import Search from "./Components/Search";


function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      Text: "business meeting",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      Text: "study React",
      category: "Study",
      isCompleted: false,
    },

  ])

  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const addTask = (Text, category)=>{  
   const newTask=   [...task, {
      id:Math.floor(Math.random()),
      Text,
      category,
      isCompleted:false
    }]
  setTask(newTask)
  }

  return (
    <div className="app">
      <Title/>
      <FormTask addTask={addTask}/>
      <Search 
      filter={filter} setFilter={setFilter} 
      search={search} setSearch={setSearch}/>
      <List 
      task={task} setTask={setTask} 
      filter={filter} search={search} />
    </div>
  )
}

export default App;
