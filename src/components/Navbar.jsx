export default function Navbar() {
  return (
    <nav className='navbar transitioning'>
      <div className='logo-font title'>
        Sennar Data Academy
      </div>
      <div className='nav-links'>
        <a href='/subjects'>
          Subjects
        </a>
        <a href='/departments'>
          Departments
        </a>
      </div>
    </nav>
  )
}
