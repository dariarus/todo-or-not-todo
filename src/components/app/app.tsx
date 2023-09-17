import React, {useState} from 'react';

import appStyles from './app.module.css';

import {AddTaskForm} from '../add-task-form/add-task-form';
import {Task} from '../task/task';
import {RadioButton} from '../radio-button/radio-button';

import {radioButtonsInitialState} from '../../utils/constants';

import {IRadioButtonsState} from '../../services/types/state';
import {TTask} from '../../services/types/props';

function App() {
  const [radioButtons, setRadioButtons] = useState<IRadioButtonsState>(radioButtonsInitialState);
  const [tasksArray, setTasksArray] = useState<Array<TTask>>([]);

  const handleSetTasksArray = (task: TTask) => {
    let copiedTasks = [...tasksArray];
    copiedTasks.push(task);
    setTasksArray(copiedTasks);
  }

  return (
    <div className={appStyles.main}>
      <h1 className={appStyles['todos-board__heading']}>Мои задачи</h1>
      <div className={appStyles['todos-board']}>
        <AddTaskForm tasksArray={tasksArray} onAddTask={handleSetTasksArray}/>
        <div className={appStyles['todos-board__tasks-wrap']}>
          <div className={appStyles['radio-button-wrap']}>
            <RadioButton label="Все задачи" value="all" checked={radioButtons.allIsChecked}
                         onClickRadio={() => {
                           setRadioButtons({
                             allIsChecked: true,
                             undoneIsChecked: false,
                             doneIsChecked: false
                           })
                         }}/>
            <RadioButton label="Невыполненные" value="undone" checked={radioButtons.undoneIsChecked}
                         onClickRadio={() => {
                           setRadioButtons({
                             allIsChecked: false,
                             undoneIsChecked: true,
                             doneIsChecked: false
                           })
                         }}/>
            <RadioButton label="Выполненные" value="done" checked={radioButtons.doneIsChecked}
                         onClickRadio={() => {
                           setRadioButtons({
                             allIsChecked: false,
                             undoneIsChecked: false,
                             doneIsChecked: true
                           })
                         }}/>
          </div>
          <div className={appStyles['todos-board__scroll-wrap']}>
            {
              tasksArray.map((task, index) => (
                <Task key={index} name={task.name} description={task.description} isDone={task.isDone}/>
              )).reverse()
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
