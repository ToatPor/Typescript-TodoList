export enum EHeading {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

export type THeading = {
  as: EHeading.h1 | EHeading.h2 | EHeading.h3 | EHeading.h4;
};
