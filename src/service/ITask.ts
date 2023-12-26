import { Status } from './../UI/Enum/Status';
import { Priority } from '../UI/Enum/Priorty';

export interface ITask {
  Title: string;
  Description: string;
  Date: string;
}
export interface IcreatTask extends ITask {
  Status: string;
  Priority: string;
}

export interface IgetTask extends ITask {
  id: string;
  Status: `${Status}`;
  Priority: `${Priority}`;
}

export type Tupdatetask = Pick<IcreatTask, 'Status'>;

export type TupdateParameter = { id: string; data: unknown };
