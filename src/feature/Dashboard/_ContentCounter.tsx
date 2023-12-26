import { FC, ReactElement } from 'react';
import { CounterShape } from '../../UI/CounterShape';
import { IContent } from '../IFeature/IStatus';
import { TyproGraphy } from '../../UI/Typroraphy';
import { emitCorrectLabel } from '../../Utils/helper';
import PropTypes from 'prop-types';
import { Status } from '../../UI/Enum/Status';
import { Row } from '../../UI/Row';

// when working with enum make sure you are using enum value
export const ContentBox: FC<IContent> = function (prop): ReactElement {
  const { count = 0, $status = Status.completed } = prop;

  return (
    <Row direction="vertical">
      <CounterShape $status={$status}>
        <TyproGraphy size="large">{count}</TyproGraphy>
      </CounterShape>
      <TyproGraphy size="large">{emitCorrectLabel($status)}</TyproGraphy>
    </Row>
  );
};

ContentBox.propTypes = {
  count: PropTypes.number.isRequired,
  $status: PropTypes.oneOf([Status.completed, Status.inProgress, Status.todo]).isRequired,
};
