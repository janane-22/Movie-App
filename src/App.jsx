import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import WatchList from './pages/WatchList'
import Navbar from './pages/Navbar'
import './index.css'
import {WatchListProvider} from './context/WatchListContext'

function App() {

  return (
    <WatchListProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<WatchList />} />

      </Routes>
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
