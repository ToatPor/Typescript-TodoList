import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createData } from '../../service/apiTask';

export function useCreateTask() {
  const queryClinet = useQueryClient();
  const {
    mutate: createTask,
    isPending: isCreating,
    isSuccess,
  } = useMutation({
    mutationFn: createData,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { createTask, isCreating, isSuccess };
}
