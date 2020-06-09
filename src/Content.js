import React, {useState} from 'react';
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
  ];
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
  ];
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
  ];
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
  //const  [columnsnames,setNames] = useState(startlistcolumns);

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
  const setList_byname = (name,copylist) => {

    if (name=='dolist') {setDolist(copylist)};
    if (name=='progress') {setProgress(copylist)};
    if (name=='review') {setReview(copylist)};
    if (name=='done') {setDone(copylist)};

  }
  const move_to = (name,index,currentlist,setList) => {
    console.log(name);
    const colums= {
      'dolist': dolist,
      'progress': progress,
      'review': review,
      "done": done
    };

    const copylist=[...currentlist];
    const copy_el = copylist[index];
    delete_post(currentlist[index].id, currentlist, setList );//Удаляем задание из тек списка

    const copylist2=[...colums[name]];
    copylist2.push(copy_el);
    setList_byname(name,copylist2);
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

  return (
      <div className="container-fluid">

        <div className="row">
            <h2>Kanban</h2>
        </div>
        <div className="row Createtask">
            <CreateTask addnewtask={addnewtask} />
        </div>

        <div className="row">
          <div className="col-sm-3">
              <h4> Todo </h4>
              <div>
                  <button className="btn btn-primary" onClick={() => sort_bypriority(dolist,setDolist )  }>
                      Sort by priority </button>
              </div>
              <div>
                { dolist.map((el,i) => <Board
                                           el={el} index={i}
                                           currentlist={dolist}
                                           setList={setDolist}
                                           column_name={"dolist"}

                                           delete_post={delete_post}
                                           move_up={move_up}
                                           move_down={move_down}
                                           move_to={move_to}
                                           />)
                }
              </div>
          </div>

          <div className="col-sm-3">
              <h4>In progress</h4>
              <div>
                  <button className="btn btn-primary" onClick={() => sort_bypriority(progress,setProgress )  }>
                      Sort by priority </button>
              </div>
              <div>
                { progress.map((el,i) => <Board
                                                 el={el} index={i}
                                                 currentlist={progress}
                                                 setList={setProgress}
                                                 column_name={"progress"}

                                                 delete_post={delete_post}
                                                 move_up={move_up}
                                                 move_down={move_down}
                                                 move_to={move_to}
                                                  />)
                }
              </div>
          </div>

            <div className="col-sm-3">
                <h4> Review</h4>
                  <div>
                      <button className="btn btn-primary" onClick={() => sort_bypriority(review,setReview )  }>
                              Sort by priority </button>
                  </div>
                  <div>
                    { review.map((el,i) => <Board  el={el} index={i}
                                                   currentlist={review}
                                                   setList={setReview}
                                                   column_name={"review"}

                                                   delete_post={delete_post}
                                                   move_up={move_up}
                                                   move_down={move_down}
                                                   move_to={move_to} />)
                    }
                  </div>

            </div>

            <div className="col-sm-3">
                <h4> Done </h4>
                <div>
                  <button className="btn btn-primary" onClick={() => sort_bypriority(done,setDone )  }>
                        Sort by priority </button>
                </div>

                <div>
                { done.map((el,i) => <Board  el={el} index={i}
                                             currentlist={done}
                                             setList={setDone}
                                             column_name={"done"}

                                             delete_post={delete_post}
                                             move_up={move_up}
                                             move_down={move_down}
                                             move_to={move_to} />)
                }
              </div>

            </div>

        </div>

      </div>

  );
}

export default Content;