import { Status } from '../../UI/Enum/Status';

export interface IContentBorder {
  $status: Status.inProgress | Status.todo | Status.completed;
}

export interface IContent extends IContentBorder {
  count: number;
}
