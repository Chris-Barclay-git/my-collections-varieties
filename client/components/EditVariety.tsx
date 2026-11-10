import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateVariety } from '../apis/varieties'
import { Variety, VarietyData } from '../../models/varieties'

interface Props {
  variety: Variety
  onDone: () => void
}

function EditVariety({ variety, onDone }: Props) {
  const [item, setItem] = useState<VarietyData>({
    name: variety.name,
    colour: variety.colour,
    country: variety.country,
  })
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (updatedVariety: VarietyData) =>
      updateVariety(variety.id, updatedVariety),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['variety'] })
      onDone()
    },
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    setItem({
      ...item,
      [name]: value,
    })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    updateMutation.mutate(item)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit variety:</h3>
      <div>
        <label htmlFor={`name-${variety.id}`}>Name: </label>
        <input
          id={`name-${variety.id}`}
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`colour-${variety.id}`}>Colour: </label>
        <input
          id={`colour-${variety.id}`}
          name="colour"
          value={item.colour}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`country-${variety.id}`}>Country: </label>
        <input
          id={`country-${variety.id}`}
          name="country"
          value={item.country}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save changes</button>
      <button type="button" onClick={onDone}>
        Cancel
      </button>
      {updateMutation.error && <p>Error: {updateMutation.error.message}</p>}
    </form>
  )
}

export default EditVariety
