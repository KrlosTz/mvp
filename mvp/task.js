"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(description) {
        this.taskDescription = description;
        this.isCompleted = false;
    }
    getDescription() {
        return this.taskDescription;
    }
    isTaskCompleted() {
        return this.isCompleted;
    }
    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}
exports.default = Task;
