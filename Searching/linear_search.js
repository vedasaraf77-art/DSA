function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `${i} is the index of target ${target}`;
    }
  }
  return "Target not found";
}

let arr = [1, 2, 3, 4, 5];
let target = 3;
console.log(linearSearch(arr, target)); // 2 is the index of target 3
