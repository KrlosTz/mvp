class Task {
    private taskDescription: string;
    private isCompleted: boolean;
  
    constructor(description: string) {
      this.taskDescription = description;
      this.isCompleted = false;
    }
  
    getDescription(): string {
      return this.taskDescription;
    }
  
    isTaskCompleted(): boolean {
      return this.isCompleted;
    }
  
    toggleCompletion(): void {
      this.isCompleted = !this.isCompleted;
    }
  }
  
  export default Task;
  