import React from 'react';
import ReactLifeCycle from './components/ReactLifeCycle.jsx';
import ClickCounter from './components/ClickCounter.jsx';
import HoverCounter from './components/HoverCounter.jsx';
import Todo  from './components/Todo.jsx';

import DataFetcher from './components/DataFetcher.jsx';
import ContextSample from './components/ContextSample.jsx';

import UseRefEx from './components/UseRefEx.jsx';

import UseMemoEx from './components/UseMemoEx.jsx';
import { Routes, Route } from 'react-router-dom';
import Question1 from './components/1/Question1.jsx';
import Question2 from './components/2/Question2.jsx';
import Login from './components/Login.jsx';       
import RenderTracker from './components/RenderTracker.jsx';
import ToggleButton from './components/ToggleButton.jsx';
import HomePage from './components/Home.jsx';
import SearchPage from './components/SearchPage.jsx';
function App() {

  return (
    <>
     {/* <ReactLifeCycle/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <Todo/> */}
      {/* <DataFetcher/> */}
        {/* <ContextSample/> */}
      {/* <UseRefEx/> */}
      {/* <UseMemoEx/>

      <Routes>
        
      </Routes> */}

      {/* // Lab internal - 2 question */}
      {/* <Question1/> */}
      {/* <Question2/> */}
      {/* <Login/> */}
      {/* <RenderTracker /> */}

      {/* <ToggleButton/> */}

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path = '/search' element={<SearchPage/>}/>
      </Routes>
    </>
  )
}

export default App
