import "./main.css";
import Title from "../title/Title";
import AddTask from "../addTask/AddTask";

function Main({taskArr}){
    //console.dir(props);
    console.log(taskArr);
    return<>
    <div className="main container">
        <Title text="Список задач на сегодня"/>
        <AddTask taskArr={taskArr}/>
        <Title text="Осталось ___ задач"/>
    </div>
    </>
}

export default Main;