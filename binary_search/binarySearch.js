function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1 // -1 because Array starts at 0
  while (low <= high) {
    let mid = Math.round((low + high) / 2) // round to not to have 1.5
    let guess = list[mid]
    if(guess == item){
      return mid
    }
    if(guess > item){ // if guess is too high
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null // item not found
}

const aList = [1, 2, 5, 9, 20, 29, 53, 67]

const result = binarySearch(aList, 5)
const result2 = binarySearch(aList, -5)
console.log(result) // 2
console.log(result2) // null
