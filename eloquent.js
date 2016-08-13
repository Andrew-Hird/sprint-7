//Chapter Three http://eloquentjavascript.net/03_functions.html Exercises

//Minimum
function min (x, y) {
	return Math.min (x, y)
}
console.log(min(0, 10))
console.log(min(0, -10))

//Recursion
function isEven(number) {
  if (number === 0){
    return true;
  }
  else if (number === 1){
    return false
  }
  else if (number < 0)
    return isEven(-number){
  }
  else {
    return isEven (number -2)
  }
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

//Bean Counting

//#1
function countBs(str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      count += 1
 	 }
  }
  return count
}
console.log(countBs("BBBBBBC"))

//#2
// Your code here.
function countChar (str, char) {
  var count = 0
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) === char) {
      count += 1
    }
  }
  return count
}
console.log(countChar("kakkkkkerlak", "k"))

//#3
function countChar (str, char) {
  var count = 0
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) === char) {
      count += 1
    }
  }
  return count
}

function countBs(str) {
  return countChar(str, 'B')
}
console.log(countBs("BBBBBBC"));
console.log(countChar("kakkkkkerlak", "k"))
