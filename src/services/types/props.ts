import {ChangeEvent} from 'react';

export type TTask = {
  id: string,
  name: string,
  description: string | undefined,
  isDone: boolean,
}

export type TRadioButton = {
  label: string,
  value: string,
  isChecked: boolean,
  onClickRadio: (event: ChangeEvent<HTMLInputElement>) => void
}

export type TAddTasksForm = {
  tasksArray: Array<TTask>,
  onAddTask: (task: TTask) => void,
}
