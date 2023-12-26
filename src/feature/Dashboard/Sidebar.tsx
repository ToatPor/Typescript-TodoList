import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Profile } from '../../component/Profile';
import { CreateTaskForm } from './_SlideBarcreateTask';

const StyledSidebar = styled.div`
  position: fixed;
  height: 100dvh;
  width: 35rem;
  top: 0;
  right: 0;
  background-color: var(--color-black-100);
  padding: 3.2rem 2.6rem;
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const SideBar: FC = function (): ReactElement {
  return (
    <StyledSidebar>
      <Profile name={'por'} />
      <CreateTaskForm />
    </StyledSidebar>
  );
};
