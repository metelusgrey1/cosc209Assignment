import { Routes, Route ,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import './App.css'

function App() {

  return (
      <div>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App
