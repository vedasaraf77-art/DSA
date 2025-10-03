// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function binarySearch(arr,target){
    let low=0;
    let high=arr.length;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        
        if(arr[mid]===target){
            return (`${mid} is the index of target`)
        }
        
        else if(arr[mid]>target){
            high=mid-1;
        }
        else{
            low=mid+1;
        }   
    }

}


// let arr=[2,5,8,12,16,23,38,56,72,91];
// let target=56;
// console.log(binarySearch(arr,target))

// let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
// let target = 56;
// Step 1: Start with whole array
// low = 0 (first index)

// high = 9 (last index)

// mid = Math.floor((0+9)/2) = 4 → arr[4] = 16

// Now we compare 16 with our target = 56.

// Step 2: Compare arr[mid] with target
// Case A → arr[mid] === target
// 🎉 Found it, return mid.

// Case B → arr[mid] < target
// That means target is bigger than middle.

// Since array is sorted, all elements before mid are even smaller.

// So target cannot be on the left side.

// Example: 16 < 56 → so throw away left part, keep only the right half.

// That’s why we do:

// js
// Copy code
// low = mid + 1;
// 👉 move the low boundary to just after mid.

// Case C → arr[mid] > target
// That means target is smaller than middle.

// Since array is sorted, all elements after mid are even bigger.

// So target cannot be on the right side.

// Example: if arr[mid] = 72 and target = 56,
// → throw away right part, keep only the left half.

// That’s why we do:

// js
// Copy code
// high = mid - 1;
// 👉 move the high boundary to just before mid.

// Step 3: Repeat until low > high
// Every time we shrink the search area (low…high).
// Eventually:

// Either arr[mid] === target (found)

// Or search area shrinks to nothing (low > high) → target not found.

// ✅ In your example with target 56:

// First mid = 16 → too small → move low = mid+1 = 5.

// New mid = 56 → found 🎉.

// So the essence:

// low = mid+1 → target is on right side.

// high = mid-1 → target is on left side.