import React, {useState} from 'react';
import Column from "./Column"

function Board(props) {

  const  [dolist, setDolist] = useState(props.todo_start);
  const  [progress, setProgress] = useState(props.progress_start);
  const  [review, setReview] = useState(props.review_start);
  const  [done, setDone] = useState(props.done_start);

  const ColumnsNames_and_Headers = {
    'dolist': "TO DO",
    'progress': "IN PROGRESS",
    'review': "REVIEW",
    'done': "DONE"
  };
  const allcolumns_state= {
    'dolist': [dolist,setDolist],
    'progress': [dolist,setProgress],
    'review': [review,setReview],
    "done": [done,setDone]
  };

  const addnewtask = (newtask,currentlist,setList ) => {
    setList(currentlist => [newtask,...currentlist]);
    //console.log("WholeList",dolist);
  }
  const move_up = (id,currentlist,setList) => {
    //console.log(id);
    let post=null;
    let index=0;

    currentlist.map( (el,i) => {
                if(el.id===id) {  post=el; index=i; }
    })
    if (index===0) return;

    let listcopy = [...currentlist];
    listcopy.splice(index, 1);
    listcopy.splice((index-1), 0, post);
    setList(listcopy)
  };

  const move_down = (id,currentlist,setList ) => {
    let post=null;
    let index=0;

    currentlist.map( (el,i) => { if(el.id===id) {  post=el; index=i; }})

    if (index===currentlist.length-1) return;

    let listcopy = [...currentlist];
    listcopy.splice(index, 1);
    listcopy.splice((index+1), 0, post);
    setList(listcopy)
  };

  const delete_post = (id,currentlist,setList ) => {
    //console.log(id);
    setList( currentlist.filter( el => (el.id!==id) ));
  };

  const move_to = (name_to,index_from,currentlist,setcurrentList) => {

    const copylist=[...currentlist];
    const copy_el = copylist[index_from];
    delete_post(currentlist[index_from].id, currentlist, setcurrentList );//Удаляем задание из тек списка

    const copylist2=[...allcolumns_state[name_to][0]];
    copylist2.push(copy_el);
    //setList_byname(name_to,copylist2);
    allcolumns_state[name_to][1](copylist2);
  }

  const save_updated_list = (updated_list,setList) => {
      setList(updated_list);
  }

  const sort_bypriority = (currentlist, setList ) => {
    let listcopy = [...currentlist];
    let sortedlist=[];
    let max=-1, index_max=0;

    while (listcopy.length!==0){
        let max=-1, index_max=0;

        listcopy.forEach( (el,i) => {
            if (el.priority > max) {
                  max=el.priority;
                  index_max = i;
                  }
            })
        sortedlist.push(listcopy[index_max]);
        listcopy.splice(index_max,1);
    }
    setList(sortedlist);
  }

  const build_column = (column_name,current_column_list,column_Setfunc) => (
    <Column
        ColumnsNames_and_Headers = {ColumnsNames_and_Headers}
        column_name = {column_name}
        current_column_list = {current_column_list}
        column_Setfunc = {column_Setfunc}

        sort_bypriority = { sort_bypriority }
        addnewtask={ addnewtask }
        delete_post={delete_post}
        save_updated_list={save_updated_list}
        move_up={move_up}
        move_down={move_down}
        move_to={move_to}
    />
  )
    {/*Whole Task Board*/}

  return (
      <div className="Board">

        <div className="row">
            <h2>Kanban progect  </h2>
            <a className="stepahead" href="https://github.com/rusbur/KanbanProject">github link</a>
        </div>

        <div className="row">

              {build_column('dolist', dolist, setDolist)}
              {build_column('progress', progress, setProgress)}
              {build_column('review', review, setReview)}
              {build_column('done', done, setDone)}

        </div>

      </div>

  );
}

export default Board;