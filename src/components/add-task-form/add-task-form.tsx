import React, {FunctionComponent} from 'react';

import addTaskFormStyles from './add-task-form.module.css';

export const AddTaskForm: FunctionComponent = () => {
  return (
    <form className={addTaskFormStyles.form}>
      <div className={addTaskFormStyles['form__input-wrap']}>
        <input type="text"
               placeholder="Кратко опишите задачу"
               className={`${addTaskFormStyles.input} ${addTaskFormStyles['text-input']}`}/>
        {/*<div className={`${addTaskFormStyles['text-area-wrap']}`}>*/}
          <textarea placeholder="Добавьте подробное описание задачи"
                    className={` ${addTaskFormStyles['text-area']}`}/>
        {/*</div>*/}
      </div>
      <button className={addTaskFormStyles.button}>Добавить<br/>задачу</button>
    </form>
  )
}