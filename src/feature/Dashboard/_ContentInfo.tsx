import { FC, ReactElement } from 'react';
import { IContentInfo } from '../IFeature/IContentInfo';
import PropTypes from 'prop-types';
import Table from '../../UI/Table';

export const ContentInfo: FC<IContentInfo> = function (props): ReactElement {
  const { description = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit.' } =
    props;

  return <Table.Body>{description}</Table.Body>;
};

ContentInfo.propTypes = {
  description: PropTypes.string.isRequired,
};
