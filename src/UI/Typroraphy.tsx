import styled from 'styled-components';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { ITyproGraphy } from './UI-Type/ITyproGraphy';

const sizes = {
  small: css`
    font-size: 1.2rem;
    font-weight: 400;
  `,
  meduim: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: capitalize;
  `,
};
export const TyproGraphy = styled.p<ITyproGraphy>`
  ${(prorps) => (prorps.size ? sizes[prorps.size] : sizes.meduim)}
`;

TyproGraphy.propTypes = {
  size: PropTypes.oneOf(['small', 'meduim', 'large']),
};
