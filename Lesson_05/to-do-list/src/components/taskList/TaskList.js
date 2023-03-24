import "./taskList.css";

function TaskList({taskArr}){
    return(
        <div>
            <ul>
                {taskArr.map((task,index)=>{
                    return(<li key={index * 5 + "b"}>{task}
                    <div><i className="fa-regular fa-pen"></i></div>
                    <div><i className="fa-regular fa-trash"></i></div>
                    </li>)
                })}

            </ul>
        </div>
    )
}

export default TaskList;