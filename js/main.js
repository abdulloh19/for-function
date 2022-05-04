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
console.log(parrotTrouble(true, 8));

