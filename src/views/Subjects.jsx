import { SUBJECTS } from '../data/data'
import useSort from '../hooks/useSort'
import useSearch from '../hooks/useSearch'

export default function Subjects() {
  const { sortedData, requestSort, sortConfig } = useSort(SUBJECTS)
  const { query, setQuery, filteredData } = useSearch(sortedData, [
    'name',
    'code',
    'description',
    'department_id',
  ])

  const getArrow = (key) => {
    if (sortConfig.key !== key) return ''
    return sortConfig.direction === 'asc' ? '▲' : '▼'
  }

  return (
    <div className='table-container transitioning'>
      <h2 className='table-title'>
        Subjects
      </h2>

      <input
        className='search-input'
        type='text'
        placeholder='Search subjects...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th 
              onClick={
                () => requestSort('id')
              }
            >
              ID {getArrow('id')}
            </th>
            
            <th 
              onClick={
                () => requestSort('department_id')
              }
            >
              Dept {getArrow('department_id')}
            </th>
            
            <th 
              onClick={
                () => requestSort('code')
              }
            >
              Code {getArrow('code')}
            </th>
            
            <th 
              onClick={
                () => requestSort('name')
              }
            >
              Name {getArrow('name')}
            </th>
            
            <th 
              onClick={
                () => requestSort('description')
              }
            >
              Description {getArrow('description')}
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((sub) => (
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

