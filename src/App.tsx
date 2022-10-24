import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'App.scss'

import { Paths } from 'constants/routes'

import IndexPage from './pages/Index'
import CartPage from './pages/CartPage'


function App() {
  return (
    <div className={'App'}>
      <Routes>
        <Route path={Paths.INDEX} element={<IndexPage />} />
        <Route path={Paths.CART} element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
