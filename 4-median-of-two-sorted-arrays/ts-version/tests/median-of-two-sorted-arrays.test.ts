import {findMedianSortedArrays} from '../src/median-of-two-sorted-arrays'

describe('findMedianSortedArrays', function () {
    it('is passed array of two and one and returns the middle value', function () {
        const nums1: number[] = [1, 3];
        const nums2: number[] = [2];

        const result = findMedianSortedArrays(nums1, nums2);

        expect<number>(result).toEqual(2.0000);
    })

    it('is passed two arrays of length two and returns half of the two middle values summed', function () {
        const nums1: number[] = [1,2];
        const nums2: number[] = [3,4];

        const result: number = findMedianSortedArrays(nums1, nums2);

        expect<number>(result).toEqual(2.5);
    })
})
