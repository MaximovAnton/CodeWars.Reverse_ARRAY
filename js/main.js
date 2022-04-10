document.querySelector('.out').innerHTML  = ReverseArrayNumber(5)

function ReverseArrayNumber (n){
    let arr = []
    
    do {
        arr.push(n)
        n = n - 1
    } while (n > 0)
    
    return arr
}

console.log(ReverseArrayNumber(5))