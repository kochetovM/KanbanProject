import React, { useState } from 'react';
import './App.css';
import Board from './Board';

const todo_start = [
    {
        id: 11,
        name: 'Create App1',
        priority: 10
    },
    // <--
    {
        id: 12,
        name: 'Create App2',
        priority: 23
    } ,
    {
        id: 13,
        name: 'Create App2',
        priority: 25
    },
    {
        id: 21,
        name: 'Create Module 1',
        priority: 28
    },
    {
        id: 22,
        name: 'Create Module2',
        priority: 35
    }
];
const progress_start = [
    {
        id: 15,
        name: 'Test Module3',
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
        name: 'Test Module4',
        priority: 15
    },
    {
        id: 16,
        name: 'Create F7',
        priority: 9
    },
    {
        id: 23,
        name: 'Create App77',
        priority: 25
    }
];

const done_start = [
    {
        id: 19,
        name: 'Create F8',
        priority: 40
    }
];


function App() {
  return (
    <div className="Content">
      <Board todo_start={todo_start} progress_start={progress_start} review_start={review_start} done_start={done_start}  />
    </div>
  );
}

export default App;
