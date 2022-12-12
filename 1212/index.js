/* let num = [2, 3, 5, 3, 2, 3, 6, 8, 7, 6]; */
// First way
/* console.log(Array.from(new Set(num))); */
// Second way
/* const removeDuplicates = (num) => {
  let res = [];
  for (el of num) {
    if (!res.includes(el)) res.push(el)
  }
  return res
};
console.log(removeDuplicates(num)); */
// Third way
/* const removeDuplicates = (num) => {
  num = num.sort((a, b) => a - b);
  return num.filter((item, index, array) => item !== array[index + 1]);
};
console.log(removeDuplicates(num)); */


//arraydagi ikki xonali sonlar
/* let arr = [1, 64, 8, 27, 64, 125];
const findTwoDigitNumbers = (arr) => {
  return arr.filter((num) => ${num}.length === 2);
};
console.log(findTwoDigitNumbers(arr)); */