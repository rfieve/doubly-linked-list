import { compare, mockedOrderedList } from './_mocks'
import { findNextGte } from '../functions/find-next-gte'

describe('findNextGte', () => {
    it('should return the next greater node', () => {
        const node = findNextGte(mockedOrderedList.head, 12, compare)
        expect(node?.data).toEqual(13)
    })

    it('should return the next equivalent node', () => {
        const node = findNextGte(mockedOrderedList.head, 13, compare)
        expect(node?.data).toEqual(13)
    })

    it('should return undefined when no node matches', () => {
        const node = findNextGte(mockedOrderedList.head, 100, compare)
        expect(node?.data).toBeUndefined()
    })
})
