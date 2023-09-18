import React, {FunctionComponent} from 'react';

import taskStyles from './task.module.css';

import {TTask} from '../../services/types/props';

export const Task: FunctionComponent<TTask> = (props) => {
  return (
    <>
      {
        props.isDone
          ? <div className={`${taskStyles['task__item']} ${taskStyles['task__item_is-done']}`}>
            <p
              className={`${taskStyles['task__text']} ${taskStyles['task__text_heading']} ${taskStyles['task__text_crossed']}`}>
              {props.name}
            </p>
            <span
              className={`${taskStyles['task__text']} ${taskStyles['task__text_description']} ${taskStyles['task__text_crossed']}`}>
              {props.description}
            </span>
          </div>
          : <div className={taskStyles['task__item']}>
            <p className={`${taskStyles['task__text']} ${taskStyles['task__text_heading']}`}>{props.name}</p>
            <span
              className={`${taskStyles['task__text']} ${taskStyles['task__text_description']}`}>{props.description}</span>
          </div>
      }
    </>
  )
}