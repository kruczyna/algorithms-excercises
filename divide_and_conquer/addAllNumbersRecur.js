// Figure out the base case -> what's the simplest array I can get?
// Base case === 0 elements -> sum is 0, 1 element -> sum is the element number

function sum(arr){
  let index = 0
  let total = 0
  if(arr.length == 0){
    return total
  } else if(arr.length == 1){
    return arr[index]
  } else {
    index = arr.length - 1
    const arrNumber = arr.pop(arr[index])
    return arrNumber + sum(arr)
  }
}

const myArray = [2, 3, 4, 234, 6]
sum(myArray) // 249
