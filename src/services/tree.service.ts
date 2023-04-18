/**
 * Finds all children of an item in a list of items
 * @param item The item to find children for
 * @param list The list of items to search through
 * @param primaryKey The name of the primary key property on the item
 * @param relationKey The name of the relation key property on the item
 * @returns The list of items that have the item's primary key as their relation key
 * @example childFinder({id: 1}, [{id: 1, parentId: 2}, {id: 2, parentId: 2}], 'id', 'parentId') // [{id: 1, parentId: 2}]
 */
export function childFinder<T extends object>(item: T, list: T[], primaryKey: keyof T, relationKey: keyof T) {
	return list.filter((listItem) => listItem[relationKey] === item[primaryKey]);
}
