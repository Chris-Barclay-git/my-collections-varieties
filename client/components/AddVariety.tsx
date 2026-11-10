import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addVariety } from '../apis/varieties'
import { VarietyData } from '../../models/varieties'

const emptyVariety: VarietyData = {
  name: '',
  colour: '',
  country: '',
}

function AddVariety() {
  const [item, setItem] = useState<VarietyData>(emptyVariety)
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (variety: VarietyData) => addVariety(variety),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['variety'] })
      setItem(emptyVariety)
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
    addMutation.mutate(item)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a variety:</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="colour">colour: </label>
        <input
          id="colour"
          name="colour"
          value={item.colour}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="country">country: </label>
        <input
          id="country"
          name="country"
          value={item.country}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add variety</button>
    </form>
  )
}

export default AddVariety
