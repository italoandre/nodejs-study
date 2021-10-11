const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?", 
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

const answers = []

ask()

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Ok! Vamos ao resumo do seu dia!

        - Hoje você aprendeu: ${answers[0]}
        
        - Algo que te deixou aborrecido e o que você poderia fazer para melhorar: ${answers[1]}
        
        - O que te deixou feliz hoje: ${answers[2]}
        
        - Hoje você ajudou ${answers[3]} pessoas

        Volte amanhã para refletir novamente!        
    `)
})