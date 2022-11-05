export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let a = nums1;
    let b = nums2;

    if (nums1.length > nums2.length) {
        [a, b] = [b, a];
    }

    const total = a.length + b.length;
    const half = Math.floor(total / 2);
    let start = 0;
    let end = a.length - 1;
    while (true) {
        const i = Math.floor((end + start) / 2);
        const j = half - i - 2;

        const l1 = i >= 0 ? a[i] : Number.NEGATIVE_INFINITY;
        const r1 = i + 1 < a.length ? a[i + 1] : Number.POSITIVE_INFINITY;
        const l2 = j >= 0 ? b[j] : Number.NEGATIVE_INFINITY;
        const r2 = j + 1 < b.length ? b[j + 1] : Number.POSITIVE_INFINITY;

        if (l1 <= r2 && l2 <= r1) {
            if (total % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            }
            return Math.min(r1, r2);
        }

        if (l1 > r2) {
            end--;
        } else {
            end++;
        }
    }
}