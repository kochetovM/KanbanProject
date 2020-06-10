import React from "react";

function DeleteItemModal(props) {

    const onClickDelete = () => {
        props.delete_post(props.id, props.currentlist,props.setList );
    };

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog"  aria-hidden="true">
            <div className="modal-dialog" role="document">

                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Are you sure you wish to delete this task?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.title}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => onClickDelete()} >
                            Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};




export default DeleteItemModal;