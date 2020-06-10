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
        //console.log(taskInput);
        //console.log(priorityInput);
        const new_task= {
            id: math.floor( math.random()*10000),
            name: taskInput,
            priority: parseInt(priorityInput)
        }

        props.addnewtask(new_task,props.currentlist,props.setList); // Adding new task to our toDo list

        taskReset();
    };

    return (
        <>
            {!isOpenCreateTaskForm &&
            <button className="btn btn-sm btn-outline-info " onClick={openCreateTaskForm}>New</button>}

            {isOpenCreateTaskForm &&
            <form className="addnewitem_style">
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
        </>

    );
}

export default CreateTask;