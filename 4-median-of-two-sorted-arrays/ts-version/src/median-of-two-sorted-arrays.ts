export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    let a = nums1;
    let b = nums2;
    if (a.length > b.length) {
        const temp = a;
        a = b;
        b = temp;
    }

    let l = 0;
    let r = a.length - 1;
    while (true) {
        let i = Math.floor((l + r) / 2); // a
        let j = half - i - 2; // b

        let aLeft = i >= 0 ? a[i] : Number.NEGATIVE_INFINITY;
        let aRight = i + 1 < a.length ? a[i + 1] : Number.POSITIVE_INFINITY;
        let bLeft = j >= 0 ? b[j] : Number.NEGATIVE_INFINITY;
        let bRight = j + 1 < b.length ? b[j + 1] : Number.POSITIVE_INFINITY;

        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 === 0) {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            } else {
                return Math.min(aRight, bRight);
            }
        } else if (aLeft < bRight) {
            l = i + 1;
        } else {
            r = i - 1;
        }
    }
}