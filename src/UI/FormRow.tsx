import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IPosition, IFormRow } from './UI-Type/IFormRow';
const StyledFormRow = styled.div`
  width: 100%;
  position: relative;
`;

const Label = styled.label<IPosition>`
  /* display: block; */
  font-size: 1.2rem;
  position: absolute;
  transition: all 0.3s;
  /* outline: none; */
  background-color: #151515;
  letter-spacing: 2px;
  top: ${(props) => props.$position.top}rem;
  left: ${(props) => props.$position.left}rem;

  &[for='Date'] {
    padding: 0.3rem 0.6rem;
    transform: translateY(-5rem) translateX(-0.5rem);
    z-index: 0;
  }
`;

export const FormRow: React.FC<IFormRow> = function (props) {
  const { label, children, $position } = props;
  return (
    <StyledFormRow>
      {children}
      {label && (
        <Label htmlFor={children.props.id} $position={$position}>
          {label}
        </Label>
      )}
    </StyledFormRow>
  );
};

FormRow.prototype = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  $position: PropTypes.object.isRequired,
};
