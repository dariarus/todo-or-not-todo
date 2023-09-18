import React, {useEffect, useState} from 'react';

import appStyles from './app.module.css';

import {AddTaskForm} from '../add-task-form/add-task-form';
import {Task} from '../task/task';
import {RadioButton} from '../radio-button/radio-button';

import {radioButtonsInitialState} from '../../utils/constants';

import {IRadioButtonsState} from '../../services/types/state';
import {TTask} from '../../services/types/props';

function App() {
  const [filterRadioButtons, setFilterRadioButtons] = useState<IRadioButtonsState>(radioButtonsInitialState);
  const [tasksArray, setTasksArray] = useState<Array<TTask>>([]);
  const [showingArray, setShowingArray] = useState<Array<TTask>>(tasksArray);

  const handleSetTasksArray = (task: TTask) => {
    let copiedTasks = tasksArray.map(task => {
      return {...task}
    });
    copiedTasks.push(task);
    setTasksArray(copiedTasks);
  }

  const refreshTasksArray = () => {
    if (filterRadioButtons.allIsChecked) {
      setShowingArray(tasksArray);
    } else if (filterRadioButtons.undoneIsChecked) {
      const filteredUndoneTasksArray = tasksArray.filter(task => !task.isDone);
      setShowingArray(filteredUndoneTasksArray);
    } else {
      const filteredDoneTasksArray = tasksArray.filter(task => task.isDone);
      setShowingArray(filteredDoneTasksArray);
    }
  }

  const handleOnCompleteTask = (taskId: string) => {
    let copiedTasks = tasksArray.map(task => {
      return {...task}
    });
    if (taskId) {
      const task = copiedTasks.find(task => task.id === taskId);
      if (task) {
        task.isDone = !task.isDone;
      }
    }
    setTasksArray(copiedTasks);
  }

  const handleOnDeleteTask = (taskId: string) => {
    let copiedTasks = tasksArray.map(task => {
      return {...task}
    });
    if (taskId) {
      const task = copiedTasks.find(task => task.id === taskId);
      let taskIndex = -1;
      if (task) {
        taskIndex = copiedTasks.indexOf(task);
      }
      if (taskIndex > -1) {
        copiedTasks.splice(taskIndex, 1);
      }
    }
    setTasksArray(copiedTasks);
  }

  useEffect(() => {
    refreshTasksArray();
  }, [tasksArray, filterRadioButtons.allIsChecked, filterRadioButtons.undoneIsChecked, filterRadioButtons.doneIsChecked])

  return (
    <div className={appStyles.main}>
      <h1 className={appStyles['todos-board__heading']}>Мои задачи</h1>
      <div className={appStyles['todos-board']}>
        <AddTaskForm tasksArray={tasksArray} onAddTask={handleSetTasksArray}/>
        <div className={appStyles['todos-board__tasks-wrap']}>
          <div className={appStyles['radio-button-wrap']}>
            <RadioButton label="Все задачи" value="all" isChecked={filterRadioButtons.allIsChecked}
                         onClickRadio={() => {
                           setFilterRadioButtons({
                             allIsChecked: true,
                             undoneIsChecked: false,
                             doneIsChecked: false
                           });
                         }}/>
            <RadioButton label="Невыполненные" value="undone" isChecked={filterRadioButtons.undoneIsChecked}
                         onClickRadio={() => {
                           setFilterRadioButtons({
                             allIsChecked: false,
                             undoneIsChecked: true,
                             doneIsChecked: false
                           });
                         }}/>
            <RadioButton label="Выполненные" value="done" isChecked={filterRadioButtons.doneIsChecked}
                         onClickRadio={() => {
                           setFilterRadioButtons({
                             allIsChecked: false,
                             undoneIsChecked: false,
                             doneIsChecked: true
                           });
                         }}/>
          </div>
          <div className={appStyles['todos-board__scroll-wrap']}>
            {
              showingArray.map((task) => (
                <React.Fragment key={task.id}>
                  <div className={appStyles.task}>
                    <input type="checkbox"
                           checked={task.isDone}
                           className={appStyles['task__checkbox']}
                           onChange={() => {
                             handleOnCompleteTask(task.id);
                           }}
                    />
                    <Task id={task.id}
                          name={task.name}
                          description={task.description}
                          isDone={task.isDone}
                    />
                    <button className={appStyles['task__cross-button']}
                            onClick={() => {
                              handleOnDeleteTask(task.id);
                            }}
                    />
                  </div>
                </React.Fragment>
              )).reverse()
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
