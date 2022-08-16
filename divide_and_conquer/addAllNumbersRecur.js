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
const emptyArr = []
const oneEleArr = [453]
const myArray = [2, 3, 4, 234, 6]
const test = sum(myArray) // 249
const test2 = sum(emptyArr) // 0
const test3 = sum(oneEleArr) // 453
console.log(test, test2, test3)
