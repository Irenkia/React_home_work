import './addTask.css';
import Input from '../input/Input';
import Button from '../button/Button';
import TaskList from '../taskList/TaskList'

function AddTask({taskArr}){
    return(
        <div>
            <Input/>
            <Button/>
            <TaskList taskArr={taskArr}/>
        </div>
    )
}

export default AddTask;