import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import NestedComponent from './components/NestedComponent'
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState([])
  const url =
    'https://xeno-canto.org/api/2/recordings?query=cnt:brazil'

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setApiData(json)
  //     })
  // }, [apiData])

  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
  headers.append('Origin', 'http://localhost:3000')
  
    useEffect(() => {
        fetch(url, {
          headers: headers,
          mode: 'no-cors'
         })
          .then((res) => res.json())
          .then(json => {
            setApiData(json)
            console.log(apiData)
          })
          .catch(console.error)
      },
      [headers, apiData]
    )
  
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
