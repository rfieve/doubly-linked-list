import { makeFindManyFromTraversal } from '../helpers/make-find-many-from-traversal';
import { makeFindManyTraversal } from '../helpers/make-find-many-traversal';
import { CompareFunction, DLL } from '../types';

const traverseEquivalent = makeFindManyTraversal((comparison: number) => comparison === 0);

/**
 * Finds all nodes equivalent to the given element into the given double linked list with the given compare function.
 * @param dll The source double linked list.
 * @param compare The compare function.
 * @param element The element to be found.
 * @returns The found result.
 */
export const findMany = makeFindManyFromTraversal(traverseEquivalent);

/**
 * Creates a find many function for the given double linked list with the given compare function.
 * @param compare The compare function.
 * @returns The bound find function.
 */
export function makeFindMany<T>(compare: CompareFunction<T>) {
    return function (dll: DLL<T>, element: T) {
        return findMany(dll, compare, element);
    };
}
