function quickSort(arr){
  let quickSortedArray = []
  if(arr.length < 2) {
    return arr
  } else {
    let less = []
    let grater = []
    pivot = arr[0]

    while(arr.length >= 2){
      let tempNumber = arr.pop()
      if(tempNumber <= pivot){
      less.push(tempNumber)
      }
      if(tempNumber > pivot){
        grater.push(tempNumber)
      }
    }

    return quickSortedArray.concat(quickSort(less), pivot, quickSort(grater))
  }

}

myArr = [12, 78, 34, 60, 1, 4]
const test = quickSort(myArr)
console.log(test)
