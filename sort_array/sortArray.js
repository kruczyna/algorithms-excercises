function findSmallest(array){
  let smallestNumber = array[0]
  let smallestIndex = 0
  if(array.length ==1){
    console.log("shit")
  }
  for(let i = 0; i < array.length; i++){
    if(array[i] < smallestNumber){
      smallestNumber = array[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

function selectionSort(array) {
  let newArr = []

  while(array.length != 0){
    let smallest = findSmallest(array)
    newArr.push(array[smallest])
    array.splice(smallest, 1);

  }
  return newArr
}

myArray = [5, 3, 6, 23]
oneElem = [1]
const result = selectionSort(myArray) // [ 3, 5, 6, 23 ]
const result2 = selectionSort(oneElem) // [ 1 ]
console.log(result, result2)
