import styled, { css } from 'styled-components';
import { THeading, EHeading } from './UI-Type/THeading';
import PropTypes from 'prop-types';
const Heading = styled.h1<THeading>`
  ${(props) =>
    props.as === EHeading.h1 &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === EHeading.h2 &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === EHeading.h3 &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === EHeading.h4 &&
    css`
      font-size: 1.3rem;
      font-weight: 500;
      text-align: center;
    `}
    
  line-height: 1.4;
`;

export default Heading;
Heading.propTypes = {
  as: PropTypes.oneOf<EHeading>([EHeading.h1, EHeading.h2, EHeading.h3, EHeading.h4])
    .isRequired,
};
