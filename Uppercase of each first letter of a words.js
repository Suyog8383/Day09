let str = "my name is suyog nagawade";
function upperCase(str) {
  let result = "";
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    let data1 = split[i].charAt(0).toUpperCase();
    let data = split[i].slice(1);
    result += data1 + data + " ";
  }
  return result;
}
console.log(upperCase(str));
