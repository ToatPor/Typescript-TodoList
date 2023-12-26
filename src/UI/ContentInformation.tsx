import styled from 'styled-components';

import PropTypes from 'prop-types';

import { IPriority } from '../feature/IFeature/IPriority';

export const ContentInformation = styled.section<IPriority>`
  display: grid;
  grid-template-columns: minmax(3rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(
      3rem,
      1fr
    );
  grid-template-rows: minmax(3rem, 6rem) max-content minmax(3rem, 6rem);
  padding: 2.4rem 3rem;
  row-gap: 2rem;
  background-color: var(--color-black-100);
  border: 1px solid ${(props) => props.$priority};
  border-radius: 8px;
  width: 80%;
`;

ContentInformation.propTypes = {
  $priority: PropTypes.string,
};
