import { useQuery } from '@tanstack/react-query';
import { getTaskData } from '../../service/apiTask';

export const useGetTask = function () {
  const {
    isPending: isTaskPending,
    data: taskData,
    error,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTaskData,
  });

  return { isTaskPending, taskData, error };
};
