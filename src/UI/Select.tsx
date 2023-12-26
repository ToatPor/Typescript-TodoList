import { FC, ReactElement } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
import { Iselected } from './UI-Type/ISelectfield';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const SelectIcon = styled(FiChevronDown)`
  color: var(--color-grey-50);
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  pointer-events: none;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  color: var(--color-grey-50);
  font-weight: 500;
  background-color: var(--color-black-100);
  border-radius: var(--border-radius-tiny);
  border: 1px solid var(--color-grey-500);
  appearance: none;
  transition: all 0.5s;

  &:hover,
  &:focus {
    outline: 1px solid rgba(168, 85, 247, 0.8);
  }

  &:hover ~ label {
    color: rgba(168, 85, 247, 0.8);
  }
`;

export const SlideTaskSelect: FC<Iselected> = function (props): ReactElement {
  const { id, items, render, isCreating } = props;
  const { register } = useFormContext();
  // console.log(field);

  // const onChangeHandle = function (event: React.ChangeEvent<HTMLSelectElement>) {
  //   console.log(event.target);
  // };

  return (
    <>
      <StyledSelect
        id={id}
        {...register(id, { required: true })}
        disabled={isCreating}
        name={id}
      >
        {items.map(render)}
      </StyledSelect>
      <SelectIcon />
    </>
  );
};

SlideTaskSelect.prototype = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  // render: PropTypes.func.isRequired,
};
