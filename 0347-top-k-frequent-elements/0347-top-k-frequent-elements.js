/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class PairMinHeap {
  constructor() { this.heap = []; }
  size() { return this.heap.length; }

  push(pair) {                        
    this.heap.push(pair);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][1] <= this.heap[i][1]) break;   
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    const n = this.heap.length;
    while (true) {
      const left = 2 * i + 1, right = 2 * i + 2;
      let smallest = i;
      if (left  < n && this.heap[left][1]  < this.heap[smallest][1]) smallest = left;
      if (right < n && this.heap[right][1] < this.heap[smallest][1]) smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return min;
  }
}

var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

    const heap = new PairMinHeap();
    for (const [num, freq] of map) {
        heap.push([num, freq]);
        if (heap.size() > k) heap.pop();
    }

    const result = [];
    while (heap.size() > 0) result.push(heap.pop()[0]);
    return result;
};