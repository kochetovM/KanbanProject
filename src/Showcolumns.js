import React, {useState} from 'react';

function Showcolumns(props) {
   const colums= [
       "dolist",
       "progress",
       "review",
       "done"
    ];

    return (
       <div className="btn-group dropright">
            <button className="btn btn-secondary dropdown-toggle" type="button"
                    data-toggle="dropdown"  id="dropdownMenuButton" aria-haspopup="true" aria-expanded="true"> Move to
            </button>

           <div class="dropdown-menu"  >
                    {colums.map( column => {
                            if (column != props.column_name)  {
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

export default Showcolumns;