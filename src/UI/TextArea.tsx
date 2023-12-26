import styled from 'styled-components';

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  outline: 1px solid var(--color-grey-500);
  border-radius: 5px;
  border: none;
  background-color: var(--color-black-100);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  color: var(--color-grey-300);

  &:focus,
  &:hover {
    z-index: 1;
    outline: 1px solid rgba(168, 85, 247, 0.8);
  }

  &:hover + label {
    color: rgba(168, 85, 247, 0.8);
  }
  &::placeholder {
    color: transparent;
  }
  &:not(:placeholder-shown) + label {
    padding: 0.3rem 0.6rem;
    transform: translateY(-2.7rem) translateX(-0.5rem);
    z-index: 0;
  }
`;

export default Textarea;
