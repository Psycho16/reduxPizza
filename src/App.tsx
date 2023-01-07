import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'App.scss'

import { Paths } from 'constants/routes'

import IndexPage from './pages/Index'
import CartPage from './pages/CartPage'
import RegisterPage from './pages/Register'


function App() {
  return (
    <div className={'App'}>
      <Routes>
        <Route path={Paths.INDEX} element={<IndexPage />} />
        <Route path={Paths.CART} element={<CartPage />} />
        <Route path={Paths.REGISTER} element={<RegisterPage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </div>
  )
}

export default App
