import {memo} from 'react';

import {Task} from '@sternx/types';

import {TaskItem} from './item.component';

export interface TaskListProps {
	/**
	 * The list of tasks.
	 */
	tasks: Task[];
}

/**
 * The task list component. Renders a list of tasks.
 */
function TaskList({tasks}: TaskListProps) {
	return (
		<>{tasks.map((task) => (!task.parentId ? <TaskItem key={task.id} task={task} tasks={tasks} level={1} /> : null))}</>
	);
}

const MemoizedTaskList = memo(TaskList);
export {MemoizedTaskList as TaskList};
