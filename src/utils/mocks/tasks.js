class Task {
	constructor(id, content, status) {
		this.id = id;
		this.content = content;
		this.status = status;
	}

	get() {
		return this;
	}
}

class TaskList {
	constructor(...tasks) {
		this.tasks = [...tasks];
	}

	get() {
		return this.tasks;
	}
}

const taskA = new Task(
	'a1',
	'Task A comes here, my friend Task A comes here, my friend Task A comes here, my friend Task A comes here, my friend Task A comes here, my friend.',
	'open'
);
const taskB = new Task('a2', 'Task B comes here, my friend.', 'open');
const taskC = new Task('a3', 'Task C comes here, my friend.', 'open');
const taskD = new Task('a4', 'Task D comes here, my friend.', 'done');

const taskList = new TaskList(taskA.get(), taskB.get(), taskC.get(), taskD.get());

const taskListMock = taskList.get();

export { taskListMock };
