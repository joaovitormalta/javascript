function fatorial(n) {
    var m = 1
    for(let c = n; c > 1; c--) {
      m *= c
    }
    return m
}

var res = fatorial(5)
console.log(res)