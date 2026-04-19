import { DEPARTMENTS } from '../data/data'
import useSort from '../hooks/useSort'
import useSearch from '../hooks/useSearch'

export default function Departments() {
  const { sortedData, requestSort, sortConfig } = useSort(DEPARTMENTS)
  const { query, setQuery, filteredData } = useSearch(sortedData, [
    'name',
    'code',
    'description',
  ])

  const getArrow = (key) => {
    if (sortConfig.key !== key) return ''
    return sortConfig.direction === 'asc' ? '▲' : '▼'
  }

  return (
    <div className='table-container transitioning'>
      <h2 className='table-title'>
        Departments
      </h2>

      <input
        className='search-input'
        type='text'
        placeholder='Search departments...'
        value={query}
        onChange={
          (e) => setQuery(e.target.value)
        }
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
              Description {getArrow('description')
              }
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((dep) => (
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

