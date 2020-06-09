import React, {useState} from 'react';
import Showcolumns from "./Showcolumns";

function Board(props) {
  return (
      <div className="card Cardstyle" key={props.el.id}>
          <div className="card-body" >

              <h5 class="card-title"> {props.el.name} </h5>

              <p> Priority: {props.el.priority}</p>

              <a href="#" className="btn btn-default" onClick={() => props.move_up(props.el.id, props.currentlist,props.setList )  } >  <span><svg
                  className="bi bi-arrow-up-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path fill-rule="evenodd"
                            d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
                      <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>
                    </svg></span> </a>

              <a href="#" className="btn btn-default" onClick={() => props.move_down(props.el.id, props.currentlist, props.setList )} ><span ><svg className="bi bi-arrow-down-square" width="1em" height="1em" viewBox="0 0 16 16"
                                                                                                                                                                       fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path fill-rule="evenodd"
                            d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
                    </svg></span> </a>

              <a href="#" className="btn btn-default" onClick={() => props.delete_post(props.el.id, props.currentlist,props.setList )  }>
                    <span><svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                               xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg></span> </a>

              {/*Далее происходит меню на выбор перехода в колонку */}
              <div className="">
                    <Showcolumns  column_name={props.column_name} index={props.index} move_to={props.move_to}  setList={props.setList} currentlist={props.currentlist} />
              </div>

          </div>

      </div>

  );
}

export default Board;