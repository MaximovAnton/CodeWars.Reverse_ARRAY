document.querySelector('.out').innerHTML  = ReverseArrayNumber(5)
document.querySelector('.out-2').innerHTML  = ReverseArrayNumbers(10)

function ReverseArrayNumber (n){
    let arr = []
    
    do {
        arr.push(n)
        n = n - 1
    } while (n > 0)
    
    return arr
}
function ReverseArrayNumbers (n){
    let arr = []

    for (let i = n; i > 0; i--){
        arr.push(i)
    }
    
    return arr
}

console.log(ReverseArrayNumber(5))
console.log(ReverseArrayNumbers(15))