import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Header from './components/Header';
document.body.style = 'background: rgb(237 237 237);';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Header />
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={12} country='us' category='' />}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={12} country='us' category='general' />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={12} country='us' category='business' />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={12} country='us' category='health' />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={12} country='us' category='science' />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={12} country='us' category='sports' />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={12} country='us' category='technology' />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;