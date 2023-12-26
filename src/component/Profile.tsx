import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TyproGraphy } from '../UI/Typroraphy';
import { FC, ReactElement } from 'react';
import { IProfile } from './ComponentType/IProfile';

export const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 2.4rem;
    text-transform: uppercase;
  }
`;

export const Profile: FC<IProfile> = function (props): ReactElement {
  const { name } = props;

  return (
    <>
      <Avatar color="rgba(168,85,247,.80)">
        <p>{name.substring(0, 1)}</p>
      </Avatar>
      <TyproGraphy as="h6" size="meduim">{`Welcome ${name}`}</TyproGraphy>
      <TyproGraphy size="small">This is your personal task manager</TyproGraphy>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
