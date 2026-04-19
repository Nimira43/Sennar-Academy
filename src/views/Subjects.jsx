import { SUBJECTS } from '../data/data'

export default function Subjects() {
  return (
    <div className="table-container transitioning">
      <h2>Subjects</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dept</th>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {SUBJECTS.map(sub => (
            <tr key={sub.id}>
              <td>{sub.id}</td>
              <td>{sub.department_id}</td>
              <td>{sub.code}</td>
              <td>{sub.name}</td>
              <td>{sub.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
