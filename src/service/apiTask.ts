import { IcreatTask, IgetTask, Tupdatetask } from './ITask';

const URL: string = import.meta.env.VITE_URL;

//read Create task
export const createData = async function (data: unknown): Promise<IcreatTask> {
  const sendData = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return (await sendData.json()) as Promise<IcreatTask>;
};

//read Get task Data
export const getTaskData = async function name(): Promise<IgetTask[]> {
  const getTask = await fetch(URL);
  if (!getTask.ok) throw Error('Failed getting task');
  const taskData = await getTask.json();

  return taskData as Promise<IgetTask[]>;
};

export const completTask = async function (
  id: string,
  data: unknown,
): Promise<Tupdatetask> {
  const completeData = await fetch(`${URL}${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const completeTask = await completeData.json();

  return completeTask as Promise<Tupdatetask>;
};
