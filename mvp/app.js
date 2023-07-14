"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskView_1 = __importDefault(require("./taskView"));
const taskController_1 = __importDefault(require("./taskController"));
const taskView = new taskView_1.default();
const taskController = new taskController_1.default(taskView);
const newTask1 = taskController.createTask("Hacer la compra");
const newTask2 = taskController.createTask("Llamar al médico");
const newTask3 = taskController.createTask("Estudiar para el examen");
taskController.toggleTaskCompletion(newTask2);
taskController.displayTasks();
