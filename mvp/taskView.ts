import Task from './task';

class TaskView {
  renderTask(task: Task): void {
    const status = task.isTaskCompleted() ? "[X]" : "[ ]";
    console.log(`${status} ${task.getDescription()}`);
  }
}

export default TaskView;
