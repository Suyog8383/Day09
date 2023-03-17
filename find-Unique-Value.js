let arr1 = [1, 2, 3, 4, 4];
let arr2 = [2, 3, 4, 5, 6, 7];

function findUniqueVal(arr1, arr2) {
  let mainArr = [...arr1, ...arr2];
  let obj = {};
  for (let i = 0; i < mainArr.length; i++) {
    if (obj.hasOwnProperty(mainArr[i])) {
      obj[mainArr[i]]++;
    } else {
      obj[mainArr[i]] = 1;
    }
  }
  let newArr = [];

  for (let i in obj) {
    newArr.push(i);
  }
  return newArr;
}
console.log(findUniqueVal(arr1, arr2));
// let arr1 = [1, 2, 3, 4, 4];
// let arr2 = [2, 3, 4, 5, 6, 7];

// function findUniqueVal(arr1, arr2) {
//   let mainArr = [...arr1, ...arr2];
//   let data = [...new Set(mainArr)];
//   return data;
// }
// console.log(findUniqueVal(arr1, arr2));

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [4, 5, 6, 7, 8, 9, 1];

// function findUniqueVal(arr1, arr2) {
//   let mainArr = [...arr1, ...arr2];
//   let obj = {};
//   for (let i = 0; i < mainArr.length; i++) {
//     if (obj.hasOwnProperty(mainArr[i])) {
//       obj[mainArr[i]]++;
//     } else {
//       obj[mainArr[i]] = 0;
//     }
//   }
//   let newArr = [];

//   for (let i in obj) {
//     if (obj[i] !== 0) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }
// console.log(findUniqueVal(arr1, arr2));
