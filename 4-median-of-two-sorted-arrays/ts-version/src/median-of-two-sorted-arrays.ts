export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let a = nums1;
    let b = nums2;
    if (a.length > b.length) {
        [a, b] = [b, a];
    }

    const total = a.length + b.length;
    const half = Math.floor(total / 2);
    let start = 0;
    let end = a.length - 1;
    while (true) {
        const i = Math.floor((end + start) / 2);
        const j = half - i - 2;

        const aLeft = i >= 0 ? a[i] : Number.NEGATIVE_INFINITY;
        const aRight = i + 1 < a.length ? a[i + 1] : Number.POSITIVE_INFINITY;
        const bLeft = j >= 0 ? b[j] : Number.NEGATIVE_INFINITY;
        const bRight = j + 1 < b.length ? b[j + 1] : Number.POSITIVE_INFINITY;

        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 === 0) {
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            }
            return Math.min(aRight, bRight);
        }

        if (aLeft > bRight) {
            end--;
        } else {
            start++;
        }
    }
}