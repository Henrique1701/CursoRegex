// g - global
// i = ignore case

const texto = 'Carlos assinou o abaixo-assinado'
console.log(texto.match(/C|ab/)) // A expressão regular fica entre os / /
console.log(texto.match(/c|ab/i)) // As flags ficam depois do / /
console.log(texto.match(/ab|c/gi))