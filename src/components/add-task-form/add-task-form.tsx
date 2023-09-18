import React, {ChangeEvent, MouseEvent, FunctionComponent, useState, MouseEventHandler, FormEvent} from 'react';

import addTaskFormStyles from './add-task-form.module.css';

import {IInputsValuesState} from '../../services/types/state';

import {inputsValuesInitialState} from '../../utils/constants';
import {TAddTasksForm} from '../../services/types/props';

export const AddTaskForm: FunctionComponent<TAddTasksForm> = (props) => {
  const [inputsValues, setInputsValues] = useState<IInputsValuesState>(inputsValuesInitialState);

  const generateUniqId = (): string => Date.now().toString(36) + Math.random().toString(36).substring(2);

  return (
    <form className={addTaskFormStyles.form}
          onChange={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
    >
      <div className={addTaskFormStyles['form__input-wrap']}>
        <input type="text"
               value={inputsValues.textInputValue}
               placeholder="Задача"
               className={`${addTaskFormStyles.input} ${addTaskFormStyles['text-input']}`}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                 setInputsValues({
                   ...inputsValues,
                   textInputValue: e.target.value
                 })
               }}
        />
        <textarea value={inputsValues.textAreaValue}
                  placeholder="Описание (опционально)"
                  className={addTaskFormStyles['text-area']}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setInputsValues({
                      ...inputsValues,
                      textAreaValue: e.target.value
                    })
                  }}
        />
      </div>
      <button className={addTaskFormStyles.button}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                props.onAddTask({
                  id: generateUniqId(),
                  name: inputsValues.textInputValue,
                  description: inputsValues.textAreaValue ? inputsValues.textAreaValue : undefined,
                  isDone: false
                });
                setInputsValues(inputsValuesInitialState);
              }}
      >
        Добавить<br/>задачу
      </button>
    </form>
  )
}