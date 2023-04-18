import {TaskList} from '@sternx/components';
import {Page} from '@sternx/types';

const defaultTasks = [
	{
		id: 1,
		parentId: null,
		title: 'Task1',
		description: 'Description',
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

const Home: Page = () => {
	return <TaskList tasks={defaultTasks} />;
};

Home.ns = 'home';
export default Home;
