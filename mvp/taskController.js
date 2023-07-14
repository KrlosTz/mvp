"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("./task"));
class TaskController {
    constructor(view) {
        this.taskView = view;
        this.tasks = [];
    }
    createTask(description) {
        const task = new task_1.default(description);
        this.tasks.push(task);
        return task;
    }
    toggleTaskCompletion(task) {
        task.toggleCompletion();
    }
    displayTasks() {
        this.tasks.forEach((task) => {
            this.taskView.renderTask(task);
        });
    }
}
exports.default = TaskController;
