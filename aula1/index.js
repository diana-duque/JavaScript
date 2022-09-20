let idade = 30

if ( idade >= 18 && idade <70) {
    console.log('voce deve votar e o voto e obrigatorio')
} else if ( idade >= 16 && idade <18 || idade >= 70) {
    console.log (' Você pode votar, mas não é obrigátório')
} else {
    console.log ('Você não pode votar')
}

function somar (num1, num2) {
    const resultado = num1 + num2
    console.log(resultado)
}
function bemVinda (nome, idade) {
    console.log ("Bem vinda, " + nome + ". Parabéns pelos" + idade + "" )
}