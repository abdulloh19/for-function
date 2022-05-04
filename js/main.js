const stringE = function(str) {
    let ecount = 0;
    
    for (let i = 0; i < str.length; i++) {

        if(str[i] == "e") {
            ecount++
        }
    }
    if (ecount <= 3) {

        return true
    }
    return false
}
const hase = stringE("heeello")
console.log(hase);


const parrotTrouble = function(talking, hour) {
    
    if (talking && (hour <= 7 || talking && hour >= 20)) {
        return true
    }
        return false
}
console.log(parrotTrouble(true, 7));


const numbers = function makes10(a, b){
    if (a == 10 || b == 10 || a + b == 10) {
        return true
    }
    return false
}
console.log(numbers(9, 1));


const near = function nearHundred(n){
  if (n <= 110 && n >= 90 || n <= 210 && n >= 190) {
    return true
  }
  return false
}

console.log(near(111));

