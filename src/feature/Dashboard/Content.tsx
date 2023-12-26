import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Heading from '../../UI/heading';
import { format } from 'date-fns';
import { ContentBox } from './_ContentCounter';
import { Status } from '../../UI/Enum/Status';
import { Row } from '../../UI/Row';
import { useGetTask } from './useGetTask';
import { ContentRow } from './_ContextRow';
import Spinner from '../../UI/Spinner';
import { SpinnerCotainer } from '../../UI/SpinnerContainer';

const StyledContent = styled.main`
  display: grid;
  gap: 7rem;
  grid-template-rows: 5rem minmax(5rem, 10rem) auto;
  margin: 2.4rem 3rem;

  justify-content: center;
  align-items: center;
`;
//read need to loop over status to get dynamic
export const Content: FC = function (): ReactElement {
  const { isTaskPending, taskData = [] } = useGetTask();

  const counTodo = taskData.filter((el) => el.Status === Status.todo).length;
  const counInprogess = taskData.filter((el) => el.Status === Status.inProgress).length;
  const countComplete = taskData.filter((el) => el.Status === Status.completed).length;

  if (isTaskPending)
    return (
      <SpinnerCotainer>
        <Spinner />
      </SpinnerCotainer>
    );

  return (
    <StyledContent>
      <div style={{ padding: '1.2rem 2.4rem' }}>
        <Heading as="h3">Status of Your task As on {format(new Date(), 'PPPP')}</Heading>
      </div>
      <Row $space="space-evenly">
        {/* loop need to get data first || or need to covert string to status.enum before loop*/}
        <ContentBox count={counTodo} $status={Status.todo} />
        <ContentBox count={counInprogess} $status={Status.inProgress} />
        <ContentBox count={countComplete} $status={Status.completed} />
      </Row>

      <Row direction="vertical">
        {taskData.map((val, i) => (
          <ContentRow
            id={val.id}
            Title={val.Title}
            Status={val.Status}
            Date={val.Date}
            Description={val.Description}
            Priority={val.Priority}
            key={i}
          />
        ))}
      </Row>
    </StyledContent>
  );
};
