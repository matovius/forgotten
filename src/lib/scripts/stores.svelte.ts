import { browser } from '$app/environment';
import type { Task } from './types';

function getSavedTasks(): Task[] {
	const initialList: Task[] = [];
	let savedTasks: Task[] = initialList;

	if (browser) {
		const localTasks = localStorage.getItem('current-tasks');

		if (localTasks !== undefined && localTasks !== null) {
			savedTasks = JSON.parse(localTasks);
			return savedTasks;
		} else {
			localStorage.setItem('current-tasks', JSON.stringify(initialList));
		}
	}

	return savedTasks;
}

/**
 * A store that keeps track of whether the Add Task experience is open.
 */
export const isAddTaskExperienceOpen: boolean = $state(false);

export const tasks = $state({
	list: getSavedTasks()
});
