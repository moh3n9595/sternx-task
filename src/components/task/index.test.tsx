import {fireEvent, render, screen} from '@testing-library/react';

import {TaskItem} from './item.component';
import {TaskList} from './list.component';

describe('Task', () => {
	it('List', () => {
		const tasks = [
			{
				id: 1,
				parentId: null,
				title: 'Task1',
				description: 'Description1',
			},
			{
				id: 2,
				parentId: 3,
				title: 'Task2',
				description: 'Description2',
			},
			{
				id: 3,
				parentId: 1,
				title: 'Task3',
				description: 'Description3',
			},
			{
				id: 4,
				parentId: 3,
				title: 'Task4',
				description: 'Description4',
			},
			{
				id: 5,
				parentId: 3,
				title: 'Task5',
				description: 'Description5',
			},
			{
				id: 6,
				parentId: null,
				title: 'Task6',
				description: 'Description6',
			},
			{
				id: 7,
				parentId: 5,
				title: 'Task7',
				description: 'Description7',
			},
			{
				id: 8,
				parentId: 7,
				title: 'Task8',
				description: 'Description8',
			},
		];
		render(<TaskList tasks={tasks} />);

		const rootTasksEl = screen.getAllByTestId('task-item-level-1');
		expect(rootTasksEl.length).toBe(2);

		const nestedTasksEl = screen.getAllByTestId('task-item-level-2');
		expect(nestedTasksEl.length).toBe(1);
	});

	it('Item', () => {
		const tasks = [
			{
				id: 1,
				parentId: null,
				title: 'Task1',
				description: 'Description1',
			},
			{
				id: 2,
				parentId: 3,
				title: 'Task2',
				description: 'Description2',
			},
			{
				id: 3,
				parentId: 1,
				title: 'Task3',
				description: 'Description3',
			},
			{
				id: 4,
				parentId: 3,
				title: 'Task4',
				description: 'Description4',
			},
			{
				id: 5,
				parentId: 3,
				title: 'Task5',
				description: 'Description5',
			},
			{
				id: 6,
				parentId: null,
				title: 'Task6',
				description: 'Description6',
			},
			{
				id: 7,
				parentId: 5,
				title: 'Task7',
				description: 'Description7',
			},
			{
				id: 8,
				parentId: 7,
				title: 'Task8',
				description: 'Description8',
			},
		];
		render(<TaskItem tasks={tasks} task={tasks[0]} level={1} />);

		fireEvent.click(screen.getByTestId('task-item-level-1'));
		expect(screen.getByTestId('task-item-level-1').querySelector('svg')?.getAttribute('class')).toContain('rotate-0');
		fireEvent.click(screen.getByTestId('task-item-level-1'));
		expect(screen.getByTestId('task-item-level-1').querySelector('svg')?.getAttribute('class')).not.toContain(
			'rotate-0',
		);
	});
});
