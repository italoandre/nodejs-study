const daily_questions = {
    pt : [
        "\nO que aprendi hoje?",
        "\nO que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
        "\nO que me deixou feliz hoje?", 
        "\nQuantas pessoas ajudei hoje?"
    ],
    en : [
        "\nWhat have I learned today?",
        "\nDid anything upset me? What could I do about it?",
        "\nWhat made me happy today?",
        "\nHow many people have I helped today?"
    ]
}

const messages = {
    start: "\nDigite PT para prosseguir em Português\nType EN to continue in English.\n",
    welcome : {
        en: "\n--> Welcome! Let's start!\n\n",
        pt: "\n--> Bem-vindo! Vamos começar!\n\n"
    },
    finish: {
        en: "\n --> Done! Let's review your answers.\n\n",
        pt: "\n --> Pronto! Vamos rever suas respostas.\n\n"
    }
}

const answers = []

const prompt = require('prompt-sync')();

run = (msgs, questions, results) => {
    console.log(msgs.start)
    lang = prompt(">> ") === "pt" ? "pt" : "en"
    console.log(msgs.welcome[lang])
    finish(msgs.finish[lang], ask(questions[lang], results), results)
}

ask = (questions, results) => {
    questions.map((element) => {
        console.log(element);
        results.push(prompt(">> "))
    })
    return questions
}

finish = (finish_message, questions, results) => {
    console.log(finish_message)
    questions.map((element) => {
        console.log(element)
        console.log(">>>>> " + results[questions.indexOf(element)])
    })
}

run(messages, daily_questions, answers)