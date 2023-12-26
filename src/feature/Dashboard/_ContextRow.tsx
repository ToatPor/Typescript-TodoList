import { ContentInformation } from '../../UI/ContentInformation';
import { ContentHeader } from './_ContentHeader';
import { ContentInfo } from './_ContentInfo';
import { FormToggle } from '../../UI/FormToggle';
import { TyproGraphy } from '../../UI/Typroraphy';
import Table from '../../UI/Table';
import Input from '../../UI/Input';
import { Button } from '../../UI/Button';
import { checkPriotity } from '../../Utils/helper';
import { FC, ReactElement } from 'react';
import { IgetTask } from '../../service/ITask';
import { Status } from '../../UI/Enum/Status';
import { useCompleteTask } from './useCompleteTask';

export const ContentRow: FC<IgetTask> = function (prop): ReactElement {
  const { id, Priority, Description, Date: date, Status: statusData, Title } = prop;
  const { updateComplete, completePending } = useCompleteTask();

  const onHandleCompleteTask = function () {
    updateComplete({ id, data: { Status: 'completed' } });
  };
  const onHandleToggleTask = function () {
    updateComplete({
      id,
      data: { Status: statusData === 'todo' ? 'inProgress' : 'todo' },
    });
  };
  return (
    <>
      {statusData === Status.todo || statusData === Status.inProgress ? (
        <ContentInformation $priority={checkPriotity(Priority)}>
          <Table $column="2/10">
            <ContentHeader date={new Date(date)} title={Title} />

            <ContentInfo description={Description} />
          </Table>

          {/* read Table Footer content */}
          <Table.Footer>
            {/* label id need to be unique wait for query */}
            <FormToggle label={`toggle-${id}`}>
              <Input
                type="checkbox"
                id={`toggle-${id}`}
                onChange={onHandleToggleTask}
                defaultChecked={statusData === Status.inProgress}
                disabled={completePending}
              />
            </FormToggle>
            <TyproGraphy size="small">In-Progress</TyproGraphy>
            <Button
              size="meduim"
              $variation="confirm"
              onClick={onHandleCompleteTask}
              disabled={completePending}
            >
              mark complete
            </Button>
          </Table.Footer>
        </ContentInformation>
      ) : null}
    </>
  );
};
