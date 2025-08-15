/* Desestruturação é a operação pela qual é possível extrair
    valores individuais de vetores e objetos, atribuindo-os a
    variáveis avulsas
*/

// 1) Desestruturação de vetor
const carros = ['Fusca', 'Chevette', 'Opala']

// Desestruturação
const [c1, c2, c3] = carros

/* Sem a desetruturação, seria necessário fazer
    const c1 = carros[0]
    const c2 = carros[1]
    const c3 = carros[2]
*/

console.log({c1, c2, c3})