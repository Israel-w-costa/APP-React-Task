import './List.css'



function List({ task, setTask, filter, search }) {

    function completeTask(id) {
        const newTask = [...task]
        newTask.map(((item) => item.id === id ? (item.isCompleted = !item.isCompleted) : item))
        setTask(newTask)
    }

    function removeTask(id) {
        const newTask = [...task]
        const filteredTask = newTask.filter((item) => item.id !== id ? item : null)
        setTask(filteredTask)
    }

    const chechButton = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZ1JREFUSEvtls8rBVEUxz9PZCcpSrayQoqtX0tZsLKSv8GTrNmSLMRaWSIlG1J+lBULpPcPkBILVhThHp2p6Xr3NdO9781bmM1M986cz/2eued7T46MrlxGXKoO3Ah0AzWeGfkCboAXO04xxXlgEaj1hEaffxjwNLAej2eD24D7QMB4mG8DbgGeo0EbPACc6qQov/JcRA+wojEGgTMXeAg41slh4MQT7IxnK/4Hp0l1M9Cq5RP9obKnug44BzqBKXPfVnLZwZvApMKWgLlKgGeAZQXtmRIcB6Ru5QqieFXLaydWYlJyR2qtBaAPeIvNe4NnAUnhJzAKHAId5vkCaACegF7gzqp7b7BsmA34Pc1E0YQ6UjvwDvQDl0XMxhssMcd0t9qHhyxiy+FwQcASewTYBeoVtGDu8yVsNRhYGJLWA7OR9jXlpew8KFhAsntv9f9WFJz00AquODg4s0ZATpeHpHJSvCcWKrEfXR2IjEtjJt7r22FGDGn2pI1aiy/U1Vc3AV3qVCmE/XlV2ttrA361Z6quofdRmejbzBT/ALuWeh+0Y9XdAAAAAElFTkSuQmCC"
    const removeButton = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPtJREFUSEvtlq8TAUEUxz8nif4CI0iqoqFKRjEU/jQSwYymcl0VzUiiJBv3zIVz7O5b5W7Gbtz9ft/3/drdF1HQigrSRSssuAHQBioGZx/AEdhpgtEKb4GhxiCwBiYurEa4BZxchnLnTeBs42iEe8A+NdIHDgaDWtyLXhrhBjDPRSR7s3RvmZxfDBG7cIssNx9xNl2eZXXC38pUGuGs29JEXSBOGkoy4bOcXFtzOckWT5zcIBxqHLpae5fDdfrIVHhA/vsBkWlxrL0/BtwKmH47szVXJx3yqj+K35O/XKYOmbW9ulrAdWAE1DzFb8AGuJp4minTU1MHL0z4CfGDXR8pdlN5AAAAAElFTkSuQmCC"

    return (
        <div className="task">
            {task.filter(item => filter === "all"
                ? true
                : filter === "done"
                ? item.isCompleted
                : !item.isCompleted
            ).map(
                (item) => (
                    <div className='taskList' key={item.id} style={{ background: item.isCompleted ? "rgb(159, 120, 66)" : "" }}>
                        <div >
                            <p >{item.Text}</p>
                            <p >{item.category}</p>
                        </div>
                        <div >
                            <img
                                className='check button'
                                src={chechButton}
                                onClick={() => completeTask(item.id)}
                            />
                            <img
                                className='remove button'
                                src={removeButton}
                                onClick={() => removeTask(item.id)}
                            />
                        </div>
                    </div>
                )
            )}
        </div>

    )

}

export default List;
