import Task from './task';
import TaskView from './taskView';
import TaskController from './taskController';

const taskView = new TaskView();
const taskController = new TaskController(taskView);

const newTask1 = taskController.createTask("Hacer la compra");
const newTask2 = taskController.createTask("Llamar al médico");
const newTask3 = taskController.createTask("Estudiar para el examen");

taskController.toggleTaskCompletion(newTask2);

taskController.displayTasks();
