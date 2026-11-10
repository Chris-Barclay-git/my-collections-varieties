import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteVarietiesByID } from '../apis/varieties'

interface Props {
  id: number
}

function DeleteButton({ id }: Props) {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: () => deleteVarietiesByID(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['variety'] })
    },
  })

  const handleDelete = () => {
    deleteMutation.mutate()
  }

  return (
    <>
      {' '}
      <button type="button" onClick={handleDelete} aria-label="Delete variety">
        X
      </button>
      {deleteMutation.error && <p>error... {deleteMutation.error.message}</p>}
    </>
  )
}

export default DeleteButton
