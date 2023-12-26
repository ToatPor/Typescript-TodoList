import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

:root{
    --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;


 --color-purple-100:  rgba(168,85,247,.80);
  --color-purple-200:  rgba(168,85,247,.65);
  --color-purple-300: rgba(168,85,247,.28);
  --color-black-100: #151515;
  --color-black-200: rgba(0,0,0,.96);

  --color-todo: #fbb6c7;
  --color-progress: #f0f1c1;
  --color-complete: #22c55e;
;




  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  /* transition: background-color 0.3s, border 0.3s; */
}

html {
  font-size: 62.5%;
}

body {
  
font-family: 'Nunito', sans-serif;

  color: var(--color-grey-300);
/* transition: color 0.3s, background-color 0.3s; */
  /* min-height: 100vh; */
  line-height: 1.5;
  font-size: 1.6rem;
}

`;
