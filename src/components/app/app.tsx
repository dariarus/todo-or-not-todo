import React from 'react';

import appStyles from './app.module.css';

import {TaskForm} from '../new-task-form/new-task-form';
import {Task} from '../task/task';

import {mockTasksArray} from '../../utils/constants';

function App() {
  return (
    <div className={appStyles.main}>
      <div className={appStyles['todos-board']}>
        <h1 className={appStyles['todos-board__heading']}>My ToDos</h1>
        <TaskForm/>
        <div className={appStyles['todos-board__tasks-wrap']}>
          <div className={appStyles['scroll-wrap']}>
            {
            mockTasksArray.map((task, index) => (
              <Task key={index} name={task.name} description={task.description} isDone={task.isDone}/>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
