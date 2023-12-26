import { ReactElement } from 'react';
import { Priority } from '../Enum/Priorty';
import { Status } from '../Enum/Status';

interface ISelectedItem {
  label: Priority | Status;
  value: Priority | Status;
}

export interface Iselected {
  items: ISelectedItem[];
  id: string;
  isCreating: boolean;
  render: (value: ISelectedItem) => ReactElement;
}
