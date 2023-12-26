import { useMutation, useQueryClient } from '@tanstack/react-query';
import { completTask } from '../../service/apiTask';
import { TupdateParameter } from '../../service/ITask';

export const useCompleteTask = function () {
  const queryClient = useQueryClient();
  const { isPending: completePending, mutate: updateComplete } = useMutation({
    mutationFn: ({ id, data }: TupdateParameter) => completTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { completePending, updateComplete };
};
