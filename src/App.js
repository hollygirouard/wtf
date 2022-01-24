import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink } from 'reactstrap'
import { Route, Routes, Link } from 'react-router-dom'
import NestedComponent from './components/NestedComponent'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [apiData, setApiData] = useState([])
  const [ navExpand, setNavExpand ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  // const url =
  //   'https://xeno-canto.org/api/2/recordings?query=cnt:brazil'

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setApiData(json)
  //     })
  // }, [apiData])

  // let headers = new Headers()
  // headers.append('Content-Type', 'application/json')
  // headers.append('Accept', 'application/json')
  // headers.append('Origin', 'http://localhost:3000')
  
  //   useEffect(() => {
  //       fetch(url,
  //       //   {
  //       //   headers: headers,
  //       //   mode: 'no-cors'
  //       //  }
  //        )
  //         .then((res) => res.json())
  //         .then(json => {
  //           setApiData(json)
  //           console.log(apiData)
  //         })
  //         .catch(console.error)
  //     },
  //     [ apiData ]
  //   )
  
  // console.log(apiData)
  console.log(navExpand)

  if (loading) {
    <p>Site Loading</p>
  }

  return (
    <div>
      <Navbar color='faded' light>
        <NavbarBrand className='me-auto'>Demo Page</NavbarBrand>
        <NavbarToggler
          className='me-2'
          onClick={() => setNavExpand(!navExpand)}
        />
        <Collapse navbar isOpen={ navExpand }>
          <Nav navbar>
            <NavItem>
              <NavLink href='#'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Routes>
        <Route path='/' element={<NestedComponent nestedData={apiData} />} />
      </Routes>
    </div>
  )
}

export default App;
