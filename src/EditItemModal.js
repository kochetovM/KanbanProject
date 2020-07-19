import React, {useState} from "react";

function EditItemModal(props) {

    const [currentTaskName, setTaskName] = useState(props.task_obj.name);
    const [currentPriority, setPriority] = useState(props.task_obj.priority);

    const onTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };
    const onPriorityChange = (e) => {
        let isnum = /^\d+$/.test(e.target.value);
        if (!isnum) { setPriority(currentPriority) }
        else { setPriority(e.target.value); }
    };

    const onClickSaveChanges = () => {
        //Сохраняем изменения
       // props.edit_post(props.id, props.currentlist,props.setList );
        const updatedtask = {
            id: props.task_obj.id,
            name: currentTaskName,
            priority: parseInt(currentPriority)
        };

        const create_updated_list = props.currentlist.map( el => (el.id===props.task_obj.id) ? updatedtask : el  )
        props.save_updated_list(create_updated_list,props.setList);
    };

    return (
        <div className="modal fade" id={props.modal_id} tabIndex="-1" role="dialog"  aria-hidden="true">
            <div className="modal-dialog" role="document">

                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="formInput">Task</label>
                            <input type="text" className="form-control" id="formInput"
                                   value={currentTaskName} onChange={onTaskNameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formInput">Priority</label>
                            <input type="text" className="form-control" id="formInput"
                                   value={currentPriority} onChange={onPriorityChange}/>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => onClickSaveChanges()} >
                            Save</button> {/*Save changes*/}
                    </div>

                </div>
            </div>
        </div>
    );
};


export default EditItemModal;