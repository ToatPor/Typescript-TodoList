import { FC, ReactElement } from 'react';
import { TyproGraphy } from '../../UI/Typroraphy';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { IContentHeader } from '../IFeature/IContentHeader';
import Table from '../../UI/Table';

const ShowDate = styled.div`
  border: 1px solid var(--color-grey-500);
  color: var(--color-grey-400);
  padding: 0.6rem 1.2rem;
  margin-right: 1.5rem;
  border-radius: 100rem;
`;

export const ContentHeader: FC<IContentHeader> = function (props): ReactElement {
  const { date = new Date(), title } = props;
  return (
    <Table.Header>
      <TyproGraphy size="meduim">{title}</TyproGraphy>
      <ShowDate>
        <span>{format(date, 'PP')}</span>
      </ShowDate>
    </Table.Header>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
