let n = "DAS IST EIN TEST"
let capitalize = function(str){
    let i = str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase()
    return i
 }

console.log(capitalize(n))