import { DEPARTMENTS } from '../data/data'

export default function Departments() {
  return (
    <div className='table-container transitioning'>
      <h2>Departments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {DEPARTMENTS.map(dep => (
            <tr key={dep.id}>
              <td>{dep.id}</td>
              <td>{dep.code}</td>
              <td>{dep.name}</td>
              <td>{dep.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
