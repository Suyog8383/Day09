let arr = [2, 1, 8, 5, 2, 1, 3, 4];
function findFirstDuplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      return arr[i];
    } else {
      obj[arr[i]] = true;
    }
  }
}
console.log(findFirstDuplicate(arr));
