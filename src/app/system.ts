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
  newTask(task: ITask) {
    this.list.push(task);
  }
  setCompleted(task: ITask) {
    task.completed = !task.completed;
  }
}

export const system = new System();
