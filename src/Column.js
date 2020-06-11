import React, {useState} from 'react';
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";


function Column(props) {

    return (
        <div className="col columnstyle" >
            <h5>{props.ColumnsNames_and_Headers[props.column_name]}</h5>
            <div className="columnheader">
                <CreateTask addnewtask={props.addnewtask} current_column_list={props.current_column_list} setList={props.column_Setfunc} />
                <button type="button" className="stepahead btn btn-sm btn-outline-info "  onClick={() => props.sort_bypriority(props.current_column_list,props.column_Setfunc )  }>
                    Sort.. </button>
            </div>
            <div>
                { props.current_column_list.map((el,i) =>
                    <TaskCard
                    el={el} index={i}
                    currentlist={props.current_column_list}
                    setList={props.column_Setfunc}
                    current_column_name={props.column_name}
                    ColumnsNames_and_Headers={props.ColumnsNames_and_Headers}

                    delete_post={props.delete_post}
                    save_updated_list={props.save_updated_list}
                    move_up={props.move_up}
                    move_down={props.move_down}
                    move_to={props.move_to}
                />)
                }
            </div>
        </div>
    );
}

export default Column;