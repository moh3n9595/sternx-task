export interface Task {
	/**
	 * The task's unique identifier.
	 */
	id: number;
	/**
	 * The task's parent task's unique identifier.
	 */
	parentId: number | null;
	/**
	 * The task's title.
	 */
	title: string;
	/**
	 * The task's description.
	 */
	description: string;
}
