import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar transitioning'>
      <div className='logo-font'>
        Sennar Academy
      </div>

      <div className='nav-links'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/subjects'>
          Subjects
        </Link>
        <Link to='/departments'>
          Departments
        </Link>
      </div>
    </nav>
  )
}



