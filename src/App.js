import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import NestedComponent from './components/NestedComponent'
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState([])
  const url = 'https://kitsu.io/api/edge/trending/anime'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setApiData(json.data)
      })
  }, [])
  
  console.log(apiData)

  if (!apiData) {
    <p>Site Loading</p>
  }

  return (
    <div><nav><Link to='/'>Home</Link></nav>
      <Routes>
        <Route path='/' element={ <NestedComponent nestedData={ apiData } />} />
      </Routes>
    </div>
  )
}

export default App;
