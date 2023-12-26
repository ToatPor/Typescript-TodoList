import { IDashboardChildren } from '../../feature/IFeature/IDashboard';

export interface ITypeButton {
  type?: string;
}

export interface IToggle extends IDashboardChildren {
  label: string;
}
