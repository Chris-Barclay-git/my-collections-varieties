import { useQuery } from '@tanstack/react-query'
import { getVarieties } from '../apis/varieties'
import DeleteButton from './DeleteButton'

function VarietiesList() {
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
              {variety.name} <DeleteButton id={variety.id} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default VarietiesList
