import Task from './task';
import TaskView from './taskView';

class TaskController {
  private taskView: TaskView;
  private tasks: Task[];

  constructor(view: TaskView) {
    this.taskView = view;
    this.tasks = [];
  }

  createTask(description: string): Task {
    const task = new Task(description);
    this.tasks.push(task);
    return task;
  }

  toggleTaskCompletion(task: Task): void {
    task.toggleCompletion();
  }

  displayTasks(): void {
    this.tasks.forEach((task) => {
      this.taskView.renderTask(task);
    });
  }
}

export default TaskController;
