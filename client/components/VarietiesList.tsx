import { useQuery } from '@tanstack/react-query'
import { getVarieties } from '../apis/varieties'
import DeleteButton from './DeleteButton'
import { useState } from 'react'
import EditVariety from './EditVariety'

function VarietiesList() {
  const [editingId, setEditingId] = useState<number | null>(null)
  const {
    data: varieties,
    isPending,
    error,
  } = useQuery({
    queryKey: ['variety'],
    queryFn: () => getVarieties(),
  })

  if (isPending) return <p>loading...</p>
  if (error) return <p>error... {error.message}</p>

  return (
    <>
      <h2>Vareties List:</h2>
      <ul>
        {varieties.map((variety) => {
          return (
            <li key={variety.id}>
              {variety.name} <DeleteButton id={variety.id} />{' '}
              <button type="button" onClick={() => setEditingId(variety.id)}>
                Edit
              </button>
              {editingId === variety.id && (
                <EditVariety
                  variety={variety}
                  onDone={() => setEditingId(null)}
                />
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default VarietiesList
