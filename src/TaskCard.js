import React, {useState} from 'react';
import ShowcolumnNames from "./ShowcolumnNames";
import DeleteItemModal from "./DeleteItemModal";
import EditItemModal from "./EditItemModal";
import math from "math";

const icon_up =(<svg
    className="bi bi-arrow-up-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path fill-rule="evenodd"
          d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
    <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>
</svg>);

const icon_down = ( <svg className="bi bi-arrow-down-square" width="1em" height="1em" viewBox="0 0 16 16"
     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path fill-rule="evenodd"
          d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
    <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
    </svg>);

const icon_trash = (<svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>);

const icon_edit = (<svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
    <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>);


function TaskCard(props) {

    const modal_id_edit=props.el.id.toString()+props.el.id.toString();

    return (
      <div className="card Cardstyle" key={props.el.id}>
          <div className="card-body" >

              <div className="row">

                  <div className="col-sm-9">
                      <h5 class="card-title"> {props.el.name} </h5>
                  </div>

                  <div className="col-sm-3">
                      <span className="btn-outline-info" data-toggle="modal" data-target={"#"+modal_id_edit} >
                          {icon_edit}  </span>
                      <EditItemModal modal_id={modal_id_edit} task_obj={props.el} currentlist={props.currentlist} setList={props.setList} save_updated_list={props.save_updated_list} />
                  </div>
              </div>

              <p> Priority: {props.el.priority}</p>

              <div className="buttons_group">
                  <span className="spanstyle btn-outline-info " onClick={() => props.move_up(props.el.id, props.currentlist,props.setList )  } >
                      {icon_up} </span>

                  <span className="spanstyle btn-outline-info" onClick={() => props.move_down(props.el.id, props.currentlist, props.setList )} >
                       {icon_down}  </span>

                  <span className="spanstyle btn-outline-info" data-toggle="modal" data-target={"#"+props.el.id}>
                        {icon_trash} </span>
                  <DeleteItemModal delete_post={props.delete_post} title={props.el.name} id={props.el.id} currentlist={props.currentlist} setList={props.setList} />
              </div>

              {/*Далее происходит меню на выбор перехода в колонку */}
              <div className="">
                    <ShowcolumnNames current_column_name={props.current_column_name} columns_names={Object.keys(props.ColumnsNames_and_Headers)}  index={props.index} move_to={props.move_to}  setList={props.setList} currentlist={props.currentlist} />
              </div>

          </div>

      </div>

  );
}

export default TaskCard;