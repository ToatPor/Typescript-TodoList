import styled, { css } from 'styled-components';
import { IRow } from './UI-Type/IRow';
import PropTypes from 'prop-types';

export const Row = styled.div<IRow>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$space};
  flex-basis: 50%;
  gap: 1.6rem;

  ${(props) =>
    props.direction === 'vertical' &&
    css`
      flex-direction: column;
      gap: 2.4rem;
    `}

  & button {
    margin-left: auto;
  }
`;

Row.prototype = {
  direction: PropTypes.string,
  $space: PropTypes.string,
  column: PropTypes.string,
};
