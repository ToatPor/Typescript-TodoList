import styled from 'styled-components';
import { Avatar } from '../component/Profile';
import { IContentBorder } from '../feature/IFeature/IStatus';
import { statusBorder } from '../Utils/varaible';
import PropTypes from 'prop-types';
import { Status } from './Enum/Status';

export const CounterShape = styled(Avatar)<IContentBorder>`
  outline: 5px solid ${(prop) => statusBorder[prop.$status]};
  width: 9rem;
  height: 9rem;
`;

CounterShape.propTypes = {
  $status: PropTypes.oneOf([Status.completed, Status.inProgress, Status.todo]).isRequired,
};
