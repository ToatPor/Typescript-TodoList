import { Status } from '../UI/Enum/Status';
import { Priority } from '../UI/Enum/Priorty';
export const emitCorrectLabel = (value: Status): string => {
  switch (value) {
    case Status.todo:
      return 'Todo`s';
    case Status.completed:
      return 'Complete';
    case Status.inProgress:
      return 'in-progress';
    default:
      return 'Todo`s';
  }
};

export const checkPriotity = (value: string): string => {
  switch (value) {
    case Priority.high:
      return '#f2c521';
    case Priority.low:
      return '#ff6666';
    case Priority.normal:
      return '#f9fafb';
    default:
      return '#f9fafb';
  }
};
