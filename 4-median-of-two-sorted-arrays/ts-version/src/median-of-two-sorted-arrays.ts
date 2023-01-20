export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let a = nums1
    let b = nums2
    if (a.length > b.length) {
        [a, b] = [b, a]
    }

    const total = nums1.length + nums2.length
    const half = Math.floor(total / 2)
    let l = 0
    let r = a.length

    while (true) {
        let aMiddle = Math.floor(l + (r - l) / 2) - 1
        let bMiddle = half - aMiddle - 2
        let aLeft = aMiddle >= 0 ? a[aMiddle] : Number.NEGATIVE_INFINITY
        let aRight = aMiddle + 1 < a.length ? a[aMiddle + 1] : Number.POSITIVE_INFINITY
        let bLeft = bMiddle >= 0 ? b[bMiddle] : Number.NEGATIVE_INFINITY
        let bRight = bMiddle + 1 < b.length ? b[bMiddle + 1] : Number.POSITIVE_INFINITY

        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 === 0) {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            }
            return Math.min(aRight, bRight)
        }

        if (aLeft > bRight) {
            r--
        } else {
            l++
        }
    }
}