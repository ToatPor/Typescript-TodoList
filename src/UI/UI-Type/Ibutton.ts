import { ITyproGraphy } from './ITyproGraphy';

export interface IButton extends ITyproGraphy {
  $variation?: 'danger' | 'confirm' | 'primary';
}
