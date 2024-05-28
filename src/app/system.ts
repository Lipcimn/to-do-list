interface ITask {
  name: string;
  completed: boolean;
}

interface ISystem {
  list: ITask[];
  newTask: (task: ITask) => void;
  setCompleted: (task: ITask) => void;
}

class System implements ISystem {
  list: ITask[];
  constructor() {
    this.list = [];
  }
  /** 
    Creates a new task in the system
    @param task the task itself
   */
  newTask(task: ITask) {
    this.list.push(task);
  }
  /**
   * Change the boolean value of the task
   * @param taks the task itself
   */
  setCompleted(task: ITask) {
    task.completed = !task.completed;
  }
}

export const system = new System();
