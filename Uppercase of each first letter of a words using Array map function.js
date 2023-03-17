let str = "my name is suyog nagawade";
function upperCase(str) {
  let data = str
    .toLowerCase()
    .split(" ")
    .map((elem) => {
      return elem[0].toUpperCase() + elem.slice(1);
    });
  return data.join(" ");
}

console.log(upperCase(str));
