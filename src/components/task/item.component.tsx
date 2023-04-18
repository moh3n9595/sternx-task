import {memo, useMemo, useState} from 'react';

import clsx from 'clsx';
import Collapsible from 'react-collapsible';

import {ChevronUp} from '@sternx/assets/icons';
import {childFinder} from '@sternx/services';

import {TaskListProps} from './list.component';

interface TaskItemProps {
	/**
	 * The task to render.
	 */
	task: TaskListProps['tasks'][0];
	/**
	 * The list of tasks.
	 */
	tasks: TaskListProps['tasks'];
	/**
	 * The level of the task. Used for indentation. Starts at 1.
	 */
	level: number;
}

/**
 * The task item component. Renders a task and its children.
 */
function TaskItem({task, tasks, level}: TaskItemProps) {
	const [open, setOpen] = useState(false);

	const childTasks = useMemo(() => childFinder(task, tasks, 'id', 'parentId'), [task, tasks]);

	const trigger = useMemo(() => {
		return (
			<div
				data-testid={`task-item-level-${level}`}
				className={clsx(
					'py-3 px-4 border bg-primary/5 rounded-lg hover:border-primary border-gray-400 transition-all my-2 flex flex-row items-center',
				)}
				style={{
					marginLeft: `${Math.min((level - 1) * 5, 75)}%`,
				}}
			>
				<div className='flex-1 mr-1'>
					<h3 className='font-bold'>{task.title}</h3>
					<p>{task.description}</p>
				</div>
				{childTasks.length > 0 && (
					<ChevronUp size={20} className={clsx(['fill-primary transition-all rotate-180', open && 'rotate-0'])} />
				)}
			</div>
		);
	}, [childTasks.length, level, open, task.description, task.title]);

	return (
		<Collapsible trigger={trigger} onOpening={() => setOpen(true)} onClosing={() => setOpen(false)}>
			{childTasks.map((childTask) => (
				<TaskItem key={childTask.id} level={level + 1} task={childTask} tasks={tasks} />
			))}
		</Collapsible>
	);
}

const MemoizedTaskItem = memo(TaskItem);
export {MemoizedTaskItem as TaskItem};
