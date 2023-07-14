"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskView {
    renderTask(task) {
        const status = task.isTaskCompleted() ? "[X]" : "[ ]";
        console.log(`${status} ${task.getDescription()}`);
    }
}
exports.default = TaskView;
