import { makeFindGt } from './find-gt'
import { makeFindGte } from './find-gte'
import { makeFindLt } from './find-lt'
import { makeFindLte } from './find-lte'
import { makeFindMany } from './find-many'
import { makeFindOne } from './find-one'
import { makeInsert } from './insert'
import { makeRemove } from './remove'
import { makeSort } from './sort'
import { makeToDLL } from './to-doubly-linked-list'
import { CompareFunction } from '../types'

/**
 * With the given compare function, creates all bound functions to work with a doubly linked list made with the same compare.
 * @param compare The compare function.
 * @returns The bound functions.
 */
export function makeCompareUtils<T>(compare: CompareFunction<T>) {
    return {
        toDLL    : makeToDLL(compare),
        add      : makeInsert(compare),
        remove   : makeRemove(compare),
        sort     : makeSort(compare),
        findOne  : makeFindOne(compare),
        findMany : makeFindMany(compare),
        findGt   : makeFindGt(compare),
        findGte  : makeFindGte(compare),
        findLt   : makeFindLt(compare),
        findLte  : makeFindLte(compare),
    }
}
