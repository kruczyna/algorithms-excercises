// function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }
// NOTE: can use for (i of range(0, array.length)) as well

function findSmallest(array){
  let smallestNumber = array[0]
  let smallestIndex = 0
  if(array.length ==1){
    console.log("shit")
  }
  for(let i = 0; i <= array.length; i++){
    if(array[i] < smallestNumber){
      smallestNumber = array[i]
      smallestIndex = i
    }
  }
  return {smallestIndex, smallestNumber}
}

function selectionSort(array) {
  let newArr = []

  for (let item in array) {
    let smallestIndex = findSmallest(array)
    newArr.push(array[smallestIndex.smallestIndex])
    console.log("array each time", array, array.indexOf(smallestIndex.smallestNumber))
    array.splice(array.indexOf(smallestIndex.smallestNumber), 1);
  }
  // array.forEach(() => {
  //   let smallestIndex = findSmallest(array)
  //   newArr.push(array[smallestIndex.smallestIndex])
  //   array.splice(smallestIndex.smallestIndex, 1);
  // });
  // for(let i = 0; i < array.length; i++){
  //   let smallestIndex = findSmallest(array)
  //   newArr.push(array[smallestIndex.smallestIndex])
  //   array.splice(smallestIndex.smallestIndex, 1);
  // }
  return newArr
}
let arr = [ 5, 6 ]
const test = arr.splice(0, 1)
console.log("twfsdv", test)

myArray = [5, 3, 6]
// const result = findSmallest(myArray) // 3
const result2 = selectionSort(myArray)
console.log(result2)
