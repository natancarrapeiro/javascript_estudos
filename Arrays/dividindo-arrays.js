const nomes = [
    "joão", 'natalia', 'joze', 'bia', 'vivian',
    'isabely', 'carlos', 'marcelo', 'vinicius', 'juliana',
    'lara', 'alice', 'lucas', 'caio'
]
//.slice corta a lista aonde passa o parametro sem mudar a lista originals
const sextoAno =nomes.slice(0, nomes.length/2)//0 a 6
const quintoAno =nomes.slice(nomes.length/2)//7 a 14
console.log(nomes.length)

console.log(`alunos do 6° ano ${sextoAno}`)
console.log(sextoAno.length)

console.log(`alunos do 5° ano ${quintoAno}`)
console.log(quintoAno.length)

