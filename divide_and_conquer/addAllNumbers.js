function sum(arr){
  let total = 0
  for (x in arr){
    total += arr[x]
  }
  return total
}

myArray = [1, 2, 3, 4, 5]
const test = sum(myArray) // 15
