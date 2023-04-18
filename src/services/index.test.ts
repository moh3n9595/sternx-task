import {childFinder} from './tree.service';

describe('Services', () => {
	it('Tree', () => {
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
		expect(childFinder(tasks[0], tasks, 'id', 'parentId').length).toBe(1);
		expect(childFinder(tasks[2], tasks, 'id', 'parentId').length).toBe(3);
	});
});
