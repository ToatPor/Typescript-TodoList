import styled, { css } from 'styled-components';
import { IButton } from './UI-Type/Ibutton';
import PropTypes from 'prop-types';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  meduim: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    width: 100%;
  `,
};

//when use with union type need to specify all type
const variations = {
  primary: css`
    color: var(--color-grey-100);
    background-color: var(--color-purple-100);
  `,
  confirm: css`
    color: var(--color-grey-100);
    background-color: var(--color-complete);
  `,
  danger: css`
    color: var(--color-grey-100);
    background-color: var(--color-todo);
  `,
};

export const Button = styled.button<IButton>`
  border-radius: 4px;
  border: none;
  box-shadow: var(--shadow-sm);
  text-transform: capitalize;
  cursor: pointer;
  text-shadow: 1px 0px 2px var(--color-grey-500);

  ${(props) => props.size && sizes[props.size]}
  ${(props) => props.$variation && variations[props.$variation]}

  &:disabled {
    background-color: var(--color-grey-500);
  }
`;

Button.defaultProps = {
  size: 'small',
  $variation: 'primary',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'meduim', 'large']),
  $variation: PropTypes.oneOf(['primary', 'confirm', 'danger']),
};
