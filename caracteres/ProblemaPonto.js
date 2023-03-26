const texto = 'Bom\ndia'
console.log(texto.match(/./gi)) // [ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log(texto.match(/.../gi)) // [ 'Bom', 'dia' ]

// O ponto não engloba o \n

// dotall - algumas linguagens tem uma flag /exp/s, mas o JS não!