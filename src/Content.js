import React, {useState} from 'react';
import './App.css';
import Board from "./Board";
import CreateTask from "./CreateTask";

function Content(props) {

  const todo_start = [
    {
      id: 11,
      name: 'Create F1',
      priority: 10
    },
    // <--
    {
      id: 12,
      name: 'Create F2',
      priority: 23
    } ,
    {
      id: 13,
      name: 'Create F3',
      priority: 25
    }
  ]
  const progress_start = [
    {
      id: 15,
      name: 'Create F4',
      priority: 16
    },
    {
      id: 14,
      name: 'Create F5',
      priority: 20
    }
  ]
  const review_start = [
    {
      id: 17,
      name: 'Create F6',
      priority: 15
    },
    {
      id: 16,
      name: 'Create F7',
      priority: 9
    }
  ]
  const done_start = [
    {
      id: 19,
      name: 'Create F8',
      priority: 40
    }
  ];

  const  [dolist, setDolist] = useState(todo_start);
  const  [progress, setProgress] = useState(progress_start);
  const  [review, setReview] = useState(review_start);
  const  [done, setDone] = useState(done_start);

  const addnewtask = (newtask) => {
    console.log("newtaskid",newtask);

    setDolist(dolist => [...dolist,newtask]);

    console.log("WholeList",dolist);
  }
  const move_up = (id,currentlist,setList) => {
    console.log(id);
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
    console.log(id);
    let post=null;
    let index=0;

    currentlist.map( (el,i) => {
      if(el.id===id) {  post=el; index=i; }
    })
    if (index===currentlist.length-1) return;

    let listcopy = [...currentlist];
    listcopy.splice(index, 1);
    listcopy.splice((index+1), 0, post);
    setList(listcopy)
  };

  const delete_post = (id,currentlist,setList ) => {
    console.log(id);
    setList( currentlist.filter( el => (el.id!==id) ));
  };

  const move_right = (id,currentlist,rightlist, setList, setRightList) => {
    console.log(id);
    let templist = [];
    let temp_el = null;

    currentlist.forEach( el => {
          if (el.id===id) { temp_el= el; }
          else { templist.push(el) };
    })

    setList(templist); //Удаляем задание из тек списка

    templist=[...rightlist];
    templist.push(temp_el);

    setRightList( templist )  //Вставляем элемент в другой список
  };

  const move_left = (id,currentlist,leftlist, setList,setLeftList) => {
    console.log(id);
    let templist = [];
    let temp_el = null;

    currentlist.forEach( el => {
      if (el.id===id) { temp_el= el; }
      else { templist.push(el) };
    })

    setList(templist); //Удаляем задание из тек списка

    templist=[...leftlist];
    templist.push(temp_el);

    setLeftList( templist ) //Вставляем элемент в другой список
  };

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

  return (
      <div className="content">

          <h1>Kanban</h1>
          <h1>-------------------------</h1>

          <CreateTask addnewtask={addnewtask} />

          <h1>-------------------------</h1>

          <div className="row">
            <div className="col">
              To do ---
              <button className="btn btn-primary" onClick={() => sort_bypriority(dolist,setDolist )  }>
                  Sort by priority </button>
              <ul>
                { dolist.map(el => <Board  el={el}
                                           currentlist={dolist}
                                           rightlist={progress}
                                           leftlist={null}
                                           setList={setDolist}
                                           setRightList={setProgress}

                                           delete_post={delete_post}
                                           move_up={move_up}
                                           move_down={move_down}
                                           move_right={move_right}
                                           move_left={false} />) }
              </ul>
            </div>

            <div className="col">
              In progress---
              <button className="btn btn-primary" onClick={() => sort_bypriority(progress,setProgress )  }>
                  Sort by priority </button>
              <ul>
                { progress.map(el => <Board  el={el}
                                             currentlist={progress}
                                             rightlist={review}
                                             leftlist={dolist}
                                             setList={setProgress}
                                             setLeftList={setDolist}
                                             setRightList={setReview}

                                             delete_post={delete_post}
                                             move_up={move_up}
                                             move_down={move_down}
                                             move_right={move_right}
                                             move_left={move_left}  />) }
              </ul>
            </div>

            <div className="col">
              Review---
              <button className="btn btn-primary" onClick={() => sort_bypriority(review,setReview )  }>
                      Sort by priority </button>
              <ul>
                { review.map(el => <Board  el={el}
                                           currentlist={review}
                                           rightlist={done}
                                           leftlist={progress}
                                           setList={setReview}
                                           setLeftList={setProgress}
                                           setRightList={setDone}

                                           delete_post={delete_post}
                                           move_up={move_up}
                                           move_down={move_down}
                                           move_right={move_right}
                                           move_left={move_left}  />) }
              </ul>
            </div>

            <div className="col">
              Done---
              <button className="btn btn-primary" onClick={() => sort_bypriority(done,setDone )  }>
                      Sort by priority </button>
              <ul>
                { done.map(el => <Board  el={el}
                                         currentlist={done}
                                         rightlist={null}
                                         leftlist={review}
                                         setList={setDone}
                                         setLeftList={setReview}

                                         delete_post={delete_post}
                                         move_up={move_up}
                                         move_down={move_down}
                                         move_right={false}
                                         move_left={move_left}  />) }
              </ul>
            </div>

          </div>

      </div>

  );
}

export default Content;