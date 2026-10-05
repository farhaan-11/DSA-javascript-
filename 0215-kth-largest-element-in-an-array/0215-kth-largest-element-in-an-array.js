/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     peek() { return this.heap[0]; }
//     size() { return this.heap.length; }

//     // ---------- PUSH (bubble up) ----------
//     push(val) {
//         this.heap.push(val);
//         let i = this.heap.length - 1;

//         while (i > 0) {
//             const parent = Math.floor((i - 1) / 2);
//             if (this.heap[parent] <= this.heap[i]) break;
//             [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];  // swap
//             i = parent;
//         }
//     }

//     // ---------- POP (sink down) ----------
//     pop() {
//         if (this.heap.length === 0) return undefined;
//         if (this.heap.length === 1) return this.heap.pop();

//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();

//         let i = 0;
//         const n = this.heap.length;

//         while (true) {
//             const left = 2 * i + 1;
//             const right = 2 * i + 2;
//             let smallest = i;

//             if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
//             if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

//             if (smallest === i) break;
//             [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
//             i = smallest;
//         }

//         return min;
//     }
// }



var findKthLargest = function (nums, k) {
    let minHeap = new MinHeap()

    for (let i = 0; i < nums.length; i++) {

        minHeap.push(nums[i])

        if (minHeap.size() > k) {
            minHeap.pop()
        }

    }

    return minHeap.top()
};