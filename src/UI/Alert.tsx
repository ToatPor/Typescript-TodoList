import { ReactElement, FC } from 'react';
import styled from 'styled-components';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const StyledAlert = styled.div`
  width: 100%;
  background-color: #00210d;
  padding: 1.2rem 2.4rem;
  display: grid;
  grid-template-columns: 2rem 1fr;
  justify-content: center;
  gap: 1rem;

  & div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  & p {
    font-size: 1.2rem;
    color: var(--color-grey-100);
  }
`;

const Icon = styled(IoCheckmarkCircleOutline)`
  grid-row: 1/3;
  width: 2rem;
  height: 2rem;
  color: #047857;
`;

export const Alert: FC = function (): ReactElement {
  return (
    <StyledAlert>
      <Icon />
      <p>Success</p>

      <p>The task has been created succesfully</p>
    </StyledAlert>
  );
};
