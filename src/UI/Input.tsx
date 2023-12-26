import styled, { css } from 'styled-components';
import { ITypeButton } from './UI-Type/IToggle';
import PropTypes from 'prop-types';

const Input = styled.input<ITypeButton>`
  outline: 0.1px solid var(--color-grey-500);
  border: none;
  background-color: var(--color-black-100);
  border-radius: var(--border-radius-tiny);
  padding: 1.2rem 1.6rem;
  /* box-shadow: var(--shadow-sm); */
  width: 100%;
  font-family: 'Nunito', sans-serif;
  color: var(--color-grey-50);
  transition: all 0.2s;
  &:focus,
  &:hover,
  &:hover {
    outline: 0.1px solid rgba(168, 85, 247, 0.8);
    z-index: 1;
  }

  &::placeholder {
    color: transparent;
  }

  &:hover + label {
    color: rgba(168, 85, 247, 0.8);
  }

  &:not(:placeholder-shown) + label {
    padding: 0.3rem 0.6rem;
    transform: translateY(-2.7rem) translateX(-0.5rem);
    z-index: 0;
  }
  ${(props) =>
    props.type === 'checkbox' &&
    css`
      display: none;
      visibility: hidden;
      opacity: 0;
      width: 0;

      &:checked ~ label {
        background-color: #fdd544;
      }
      &:checked ~ label span::before {
        transform: translateX(2.4rem);
        background-color: #f2c521;
      }

      &:checked ~ label:hover span::before {
        box-shadow: #f8d03c 0px 0px 7px;
      }
    `}
`;

export default Input;

Input.propTypes = {
  type: PropTypes.string,
};
