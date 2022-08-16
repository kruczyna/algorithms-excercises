function findMaxNumber(arr) {
  let sub_max;
  if(arr.length === 0){
    return new Error('No number found in the array!')
  }
  if(arr.length === 1){
    return arr[0]
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  sub_max = findMaxNumber(arr.slice(1));
  return arr[0] > sub_max ? arr[0] : sub_max;
}

const emptyArr = []
const oneEleArr = [453]
const twoEleArr = [1, 2]
const myArr = [1, 2, 234, 21, 832]


const test = findMaxNumber(emptyArr) // Error: No number found in the array!
const test2 = findMaxNumber(oneEleArr) // 453
const test3 = findMaxNumber(twoEleArr) // 2
const test4 = findMaxNumber(myArr) // 832
console.log(test2, test3, test4, test)
