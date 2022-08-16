function countItems(arr){
  if(arr.length == 0){
    return 0
  } else {
    arr.shift()
    return 1 + countItems(arr)
  }
}

const emptyArr = []
const oneEleArr = [453]
const myArray = [76, 32, 45, 23, 123, -1]

const test = countItems(emptyArr) // 0
const test2 = countItems(oneEleArr) // 1
const test3 = countItems(myArray) // 6
console.log(test, test2, test3)
