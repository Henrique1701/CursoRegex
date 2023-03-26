// no início...
// Um byte (8 bits) - 256 caracteres
// Simbolos, pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +pontuação, A-Z, a_z, 0-9

// Unicode
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 milhão de caracteres 
// Atualment tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt


const texto = 'aÝb❦c'
console.log(texto.match(/\u00DD|\u2766/g)) // [ 'Ý', '❦' ]