import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { IToggle } from './UI-Type/IToggle';

export const StyledToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2/10;
  margin-right: 1.2rem;
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 4rem;
  height: 1rem;
  border-radius: 100rem;
  background-color: var(--color-grey-200);
  top: 2.8rem;
  z-index: 1;

  &:hover span::before {
    box-shadow: var(--color-grey-100) 0px 0px 7px;
  }
`;
const Slider = styled.span`
  position: absolute;

  transition: all 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
    top: -0.7rem;
    left: -0.7rem;
    background-color: var(--color-grey-200);
    border-radius: 100%;
    transition: all 0.4s;
    box-shadow:
      rgba(0, 0, 0, 0.12) 0px 1px 3px,
      rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

export const FormToggle: React.FC<IToggle> = function (prop) {
  const { children, label } = prop;

  return (
    <StyledToggle>
      {children}
      <Label htmlFor={label}>
        <Slider />
      </Label>
    </StyledToggle>
  );
};

FormToggle.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
