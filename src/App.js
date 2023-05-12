import React from 'react';
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Prac from './Practise';
import Prop from './Prop';
import Counter from './counter/Counter';
import Todo from './todo/Todo';
import Routing from './Routing';
import Stopwatch from './stopwatch/Stopwatch';
import StopwatchTimer from './stopwatch/StopwatchTimer';

function App() {

  return (
  <>
  <BrowserRouter>
  <Routing/>
  <Routes>
   <Route path='/counter' element={<Counter/>}/>
   <Route path='/todo' element={<Todo/>}/>
   <Route path='/prop' element={<Prop/>}/>
   <Route path='/prac' element={<Prac/>}/>
   <Route path='/stopwatch' element={<Stopwatch/>}/>
   <Route path='/stopwatchTimer' element={<StopwatchTimer/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
