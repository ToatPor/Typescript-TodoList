import { FC, ReactElement, useEffect, useState } from 'react';

import styled from 'styled-components';
import { FormRow } from '../../UI/FormRow';
import Input from '../../UI/Input';
import Textarea from '../../UI/TextArea';
import InputDate from '../../UI/InputDate';
import { SlideTaskSelect } from '../../UI/Select';
import { Option } from '../../UI/Options';
import { Status } from '../../UI/Enum/Status';
import { Priority } from '../../UI/Enum/Priorty';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../UI/Button';
import { Alert } from '../../UI/Alert';
import { useCreateTask } from './useCreateTask';
import { IcreatTask } from '../../service/ITask';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
`;
const StyledFormRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const CreateForm: FC = function (): ReactElement {
  const [alertContent, setAlertContent] = useState<boolean>(false);
  const { createTask, isCreating, isSuccess } = useCreateTask();
  //what type you want to form to look like
  const { register, handleSubmit, reset } = useForm<IcreatTask>();
  const method = useForm({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (isSuccess) setAlertContent((val) => !val);

    const contentTime = setTimeout(() => {
      setAlertContent(false);
    }, 5000);

    return function () {
      clearTimeout(contentTime);
    };
  }, [isSuccess]);

  //submidhandler check type for us
  const onSuccessSubmit: SubmitHandler<IcreatTask> = function (data) {
    createTask({ ...data, ...method.getValues() });
    reset();
  };

  //read need to use useForm getting value from input
  //mutate to data base
  return (
    <>
      {alertContent && <Alert />}
      <FormProvider {...method}>
        <StyledForm onSubmit={handleSubmit(onSuccessSubmit)}>
          <FormRow label="Title" $position={{ top: 1, left: 2 }}>
            <Input
              disabled={isCreating}
              type="text"
              placeholder="title"
              id="Title"
              {...register('Title', { required: 'This field is required' })}
            />
          </FormRow>

          <FormRow label="Description" $position={{ top: 1, left: 2 }}>
            <Textarea
              disabled={isCreating}
              id="Description"
              defaultValue=""
              placeholder="Description"
              {...register('Description', { required: 'This field is required' })}
            />
          </FormRow>
          <FormRow label="Date" $position={{ top: 4, left: 2 }}>
            <InputDate
              disabled={isCreating}
              id="Date"
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              {...register('Date', { required: 'This field is required' })}
            />
          </FormRow>

          <StyledFormRow>
            <FormRow label="Status" $position={{ top: -1, left: 2 }}>
              <SlideTaskSelect
                id="Status"
                items={[
                  { label: Status.todo, value: Status.todo },
                  { label: Status.completed, value: Status.completed },
                  { label: Status.inProgress, value: Status.inProgress },
                ]}
                render={(value) => (
                  <Option key={value.label + value.value} value={value.value}>
                    {value.label.toUpperCase()}
                  </Option>
                )}
                isCreating={isCreating}
              />
            </FormRow>
            <FormRow label="Priority" $position={{ top: -1, left: 2 }}>
              <SlideTaskSelect
                id="Priority"
                items={[
                  { label: Priority.low, value: Priority.low },
                  { label: Priority.normal, value: Priority.normal },
                  { label: Priority.high, value: Priority.high },
                ]}
                render={(value) => (
                  <Option key={value.label + value.value} value={value.value}>
                    {value.label.toUpperCase()}
                  </Option>
                )}
                isCreating={isCreating}
              />
            </FormRow>
          </StyledFormRow>
          <Button size="large" disabled={isCreating}>
            create new tesk
          </Button>
        </StyledForm>
      </FormProvider>
    </>
  );
};
