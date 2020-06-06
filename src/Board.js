import React, {useState} from 'react';
import './App.css';

function Board(props) {

  return (
      <div className="">
          <li key={props.id}>
              {props.el.name} <br/>Priority: {props.el.priority}
              <br/>

              <button className="btn btn-primary" onClick={() => props.delete_post(props.el.id, props.currentlist,props.setList )  }>Del
              </button>

              <button className="btn btn-primary" onClick={() => props.move_up(props.el.id, props.currentlist,props.setList )  }>
                  <i className="glyphicon glyphicon-arrow-up"></i>
              </button>

              <button className="btn btn-primary" onClick={() => props.move_down(props.el.id, props.currentlist, props.setList )}>
                  <i className="glyphicon glyphicon-arrow-down"></i>
              </button>

              {props.move_left &&
              <button className="btn btn-primary" onClick={() => props.move_left(props.el.id, props.currentlist, props.leftlist, props.setList, props.setLeftList)}>
                  <i className="glyphicon glyphicon-arrow-left"></i>
              </button>}

              {props.move_right &&
              <button className="btn btn-primary" onClick={() => props.move_right(props.el.id, props.currentlist, props.rightlist, props.setList, props.setRightList )}>
                  <i className="glyphicon glyphicon-arrow-right"></i>
              </button>}

          </li>

      </div>

  );
}

export default Board;