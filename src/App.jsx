import Navbar from './components/Navbar'
import Departments from './views/Departments'
import Subjects from './views/Subjects'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div className='page'>
              <h2>Welcome</h2>
            </div>}
        />
        <Route
          path='/departments'
          element={
            <Departments />
          }
        />
        <Route
          path='/subjects'
          element={
            <Subjects />
          }
        />
      </Routes>
    </>
  )
}
