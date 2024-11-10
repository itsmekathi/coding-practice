A **peak element** in an array is an element that is greater than or equal to its neighbors. In other words, an element is considered a peak if it is not smaller than the elements directly adjacent to it.

### Characteristics of Peak Elements:

1. **Boundary Condition**: If an element is at the boundary of the array (i.e., the first or last element), it only needs to be greater than or equal to its single neighbor to be considered a peak.
2. **Multiple Peaks**: An array can have multiple peak elements.
3. **Local Peak**: A peak element does not need to be the largest element in the array; it just needs to satisfy the condition of being larger than its neighbors.

### Example

For an array:

```plaintext
[1, 3, 20, 4, 1, 0]
```

- `20` is a peak element because it is greater than both `3` (its left neighbor) and `4` (its right neighbor).
- `3` is also a peak element because it is greater than `1` (its left neighbor).
- `0` is a peak element because it's the last element, and there's no right neighbor.

### Algorithm to Find a Peak Element

A simple approach to find a peak element is to iterate through the array and check each element. However, more efficient methods, such as binary search, can achieve a logarithmic time complexity for finding a peak.

### Binary Search Approach

For a more efficient solution, you can use a binary search approach, which works in \(O(\log n)\) time by leveraging the properties of the peak.
