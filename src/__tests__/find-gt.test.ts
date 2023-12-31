import { compare, mockedOrderedList } from './_mocks'
import { makeFindGt } from '../functions/find-gt'

describe('findGt', () => {
    const bound = makeFindGt(compare)

    it('should include all the greater nodes', () => {
        const nodes = bound(mockedOrderedList, 12)

        expect(nodes[0]?.data).toEqual(13)
        expect(nodes[1]?.data).toEqual(32)
        expect(nodes[2]?.data).toEqual(50)
        expect(nodes[3]?.data).toEqual(89)
        expect(nodes[4]?.data).toBeUndefined()
    })

    it('should not include the equivalent node', () => {
        const nodes = bound(mockedOrderedList, 13)
        expect(nodes[0]?.data).toEqual(32)
    })

    it('should return undefined when no node matches', () => {
        const nodes = bound(mockedOrderedList, 100)
        expect(nodes[0]?.data).toBeUndefined()
    })
})
