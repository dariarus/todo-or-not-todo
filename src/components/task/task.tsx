import React, {FunctionComponent} from 'react';

import taskStyles from './task.module.css';

import {TTask} from '../../services/types/props';

export const Task: FunctionComponent<TTask> = (props) => {
  return (
    <div className={taskStyles.task}>
      <input type="checkbox" className={taskStyles['task__checkbox']}/>
      <div className={taskStyles['task__item']}>
        <p className={`${taskStyles['task__text']} ${taskStyles['task__text_heading']}`}>{props.name}</p>
        <span className={`${taskStyles['task__text']} ${taskStyles['task__text_description']}`}>{props.description}</span>
      </div>
    </div>
  )
}