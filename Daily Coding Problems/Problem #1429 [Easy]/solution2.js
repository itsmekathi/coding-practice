// Using Binary search
function findPeakBinarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if mid is a peak element
    const isLeftSmaller = mid === 0 || arr[mid] >= arr[mid - 1];
    const isRightSmaller = mid === arr.length - 1 || arr[mid] >= arr[mid + 1];

    if (isLeftSmaller && isRightSmaller) {
      return arr[mid]; // mid is a peak element
    }
    // If the element to the left is greater, move to the left half
    if (mid > 0 && arr[mid - 1] > arr[mid]) {
      right = mid - 1;
    } else {
      // Else, move to the right half
      left = mid + 1;
    }
  }
  return null; // If no peak is found, which is unlikely for arrays with elements
}

// Example usage
const arr = [1, 3, 20, 4, 1, 0];
const peak = findPeakBinarySearch(arr);
console.log(`A peak element is: ${peak}`);
