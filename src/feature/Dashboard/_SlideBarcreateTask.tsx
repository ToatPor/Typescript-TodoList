import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Heading from '../../UI/heading';
import { CreateForm } from './_SlidebarCreateForm';
const StyledCreateTaskForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  align-items: start;
  width: 100%;
`;

export const CreateTaskForm: FC = function (): ReactElement {
  return (
    <StyledCreateTaskForm>
      <Heading as={'h4'}>Create new task</Heading>
      <CreateForm />
    </StyledCreateTaskForm>
  );
};
