// Using Linear search
function findPeak(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const isLeftSmall = i === 0 || arr[i] >= arr[i - 1];
    const isRightSmall = i === n - 1 || arr[i] >= arr[i + 1];
    if (isLeftSmall && isRightSmall) {
      return arr[i];
    }
  }
  return null;
}

const arr = [1, 3, 40, 100, 10, 50];
const peek = findPeak(arr);
console.log(`A peak element is: ${peek}`);
