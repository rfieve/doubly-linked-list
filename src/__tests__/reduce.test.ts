import { reduce } from '../functions/reduce';
import { toDLL } from '../functions/to-doubly-linked-list';
import { DLLNode, ReduceFunction } from '../types';
import { mockedArray } from './_mocks';

const reducer: ReduceFunction<number, string> = (
    acc: string,
    node: DLLNode<number>,
    index: number
) => `${acc}${node.data + index}`;

describe('reduce', () => {
    it('should reduce a dll correctly', () => {
        const dll = toDLL(mockedArray);
        const reduced = reduce(dll, reducer, '');
        expect(reduced).toEqual('1033155931056');
    });
});