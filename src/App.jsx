import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Private from './pages/Private.jsx'

function App() {
  
  return (
    <div className="app">
      <header>
        <h2>Header do site</h2>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/private'>Private</Link>
        </nav>
        <hr />
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/private' element={<Private/>}/>
      </Routes>
    </div>
  )
}

export default App
