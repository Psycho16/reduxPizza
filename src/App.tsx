import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Paths } from 'constants/routes'

import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import IndexPage from './pages/Index'
import CartPage from './pages/CartPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={Paths.INDEX} element={<IndexPage />} />
        <Route path={Paths.CART} element={<CartPage />} />
      </Routes>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  )
}

export default App
