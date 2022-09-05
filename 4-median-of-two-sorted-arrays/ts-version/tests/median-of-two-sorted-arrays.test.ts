import {findMedianSortedArrays} from '../src/median-of-two-sorted-arrays'

describe('findMedianSortedArrays', function () {
    it('is passed two arrays that have an odd length together and return the middle value', function () {
        const nums1: number[] = [1, 2, 3, 4, 5];
        const nums2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

        const result = findMedianSortedArrays(nums1, nums2);

        expect(result).toEqual(4);
    })

    it('is passed array of two and one and returns the middle value', function () {
        const nums1: number[] = [1, 3];
        const nums2: number[] = [2];

        const result = findMedianSortedArrays(nums1, nums2);

        expect<number>(result).toEqual(2.0000);
    })

    it('is passed two arrays of length two and returns half of the two middle values summed', function () {
        const nums1: number[] = [1, 2];
        const nums2: number[] = [3, 4];

        const result: number = findMedianSortedArrays(nums1, nums2);

        expect<number>(result).toEqual(2.5);
    })

    it('it is passed an empty array and array of one and returns something lol', function () {
        const nums1: number[] = [];
        const nums2: number[] = [0];

        const result: number = findMedianSortedArrays(nums1, nums2);

        expect<number>(result).toEqual(0);
    })

    it('is passed two arrays with one number each and returns the average of the two', function () {
        const nums1: number[] = [100001];
        const nums2: number[] = [100000];

        const result: number = findMedianSortedArrays(nums1, nums2);

        expect<number>(result).toEqual(100000.5);
    })
})
