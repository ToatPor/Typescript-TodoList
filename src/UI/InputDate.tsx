import styled from 'styled-components';

const InputDate = styled.input`
  outline: 0.1px solid var(--color-grey-500);
  border: none;
  background-color: var(--color-black-100);
  border-radius: var(--border-radius-tiny);
  padding: 1rem 1.6rem;
  /* box-shadow: var(--shadow-sm); */
  width: 100%;
  font-family: 'Nunito', sans-serif;
  color: var(--color-grey-0);
  cursor: text;

  &:hover,
  &:focus {
    outline: 0.1px solid rgba(168, 85, 247, 0.8);
  }

  &:hover + label {
    color: rgba(168, 85, 247, 0.8);
  }

  &::-webkit-datetime-edit {
    padding: 0.5rem;
  }
  &::-webkit-calendar-picker-indicator {
    /* background: var(--color-grey-50); */
    filter: invert(1);
    cursor: pointer;
  }
`;

export default InputDate;
