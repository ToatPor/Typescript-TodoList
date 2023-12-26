import styled from 'styled-components';
import { SideBar } from '../feature/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';
import { FC, ReactElement } from 'react';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 35rem;
  position: relative;
`;

export const AppLayout: FC = function (): ReactElement {
  return (
    <Container>
      <Outlet />
      <SideBar />
    </Container>
  );
};
