export interface IFormRow extends IPosition {
  label: string;
  children: React.ReactNode & { props: { id: string } };
}

export interface IPosition {
  $position: { top: number; left: number };
}
