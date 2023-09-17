import React, {ChangeEvent} from 'react';

export type TTask = {
  name: string,
  description: string | undefined,
  isDone: boolean
}

export type TRadioButton = {
  label: string,
  value: string,
  checked: boolean,
  onClickRadio: (event: ChangeEvent<HTMLInputElement>) => void
}

export type TAddTasksForm = {
  tasksArray: Array<TTask>,
  // onAddTask: React.Dispatch<React.SetStateAction<Array<TTask>>>
  onAddTask: (task: TTask) => void
}
