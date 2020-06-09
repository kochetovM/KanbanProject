import React, {useState} from 'react';
import './App.css';
import math from 'math';


function CreateTask(props) {

    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [priorityInput, setPriorityInput] = useState('');
    const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);

    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    };
    const onTaskChange = (e) => {
        setIsActiveButtonTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);
    };
    const onPriorityChange = (e) => {
        let isnum = /^\d+$/.test(e.target.value);
        if (!isnum) { setPriorityInput(priorityInput) }
        else { setPriorityInput(e.target.value); }
    };

    const taskReset = () => {
        setTaskInput('');
        setIsOpenCreateTaskForm(false);
        setIsActiveButtonTaskCreate(false);
        setPriorityInput('');
    };

    const taskSubmit = (e) => {
        e.preventDefault();
        console.log(taskInput);
        console.log(priorityInput);
        const new_task= {
            id: math.random(),
            name: taskInput,
            priority: parseInt(priorityInput)
        }

        props.addnewtask(new_task); // Adding new task to our toDo list

        taskReset();
    };

    return (
        <div>
            <div className="">

            {!isOpenCreateTaskForm &&
            <button className="btn btn-primary" onClick={openCreateTaskForm}>Create
                Task</button>}

            {isOpenCreateTaskForm &&
            <form>
                <div className="form-group">
                    <input type="text" className="form-control"
                           placeholder={"Enter a new task..."}
                           value={taskInput}
                           onChange={onTaskChange}/>
                    <input type="text" className=""
                           placeholder={"Priority of task"}
                           value={priorityInput}
                           onChange={onPriorityChange}/>
                </div>
                <button type="submit" className="btn btn-primary"
                        onClick={taskSubmit}
                        disabled={!isActiveButtonTaskCreate}>Submit
                </button>
                <button className="btn btn-secondary"
                        onClick={taskReset}
                >Cancel
                </button>
            </form>
            }
            </div>
         </div>

    );
}

export default CreateTask;