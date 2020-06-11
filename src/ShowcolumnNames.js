import React, {useState} from 'react';

function ShowcolumnNames(props) {
    return (
       <div className="btn-group dropright">
            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button"
                    data-toggle="dropdown"  aria-haspopup="true" aria-expanded="true"
                    onClick={() => {console.log(props.columns_names);
                        console.log(props.current_column_name) }} > Move to
            </button>

           <div class="dropdown-menu"  >
                    {props.columns_names.map( column => {
                            if (column != props.current_column_name)  {
                                return(
                                <div>
                                    <a className="dropdown-item" href="#" onClick={() => {
                                        props.move_to(column, props.index, props.currentlist, props.setList); }
                                    }> {column} </a>
                                </div> ) }
                            })
                    }
            </div>
        </div>
    )
}

export default ShowcolumnNames;