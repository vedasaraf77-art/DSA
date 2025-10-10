function quickSort(arr) {
  // 🧊 Base case: stop when 0 or 1 element
  if (arr.length <= 1) {
    return arr;
  }

  // 🎯 Pick last element as pivot
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // 🪣 Divide into left and right
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 🧩 Combine sorted parts
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 3, 1, 7, 0, 10, 2];
console.log(quickSort(arr)); // ✅ [0, 1, 2, 3, 7, 8, 10]
