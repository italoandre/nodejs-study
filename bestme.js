const questions = {
    "pt" : [
        "O que aprendi hoje?",
        "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
        "O que me deixou feliz hoje?", 
        "Quantas pessoas ajudei hoje?"
    ],
    "en" : [
        "What have I learned today?",
        "Did anything upset me? What could I do about it?",
        "What made me happy today?",
        "How many people have I helped today?"
    ]
}

const answers = []

const prompt = require('prompt-sync')();

function pickLanguage() {
    console.log("\nType EN to open the program in English.\nDigite PT para abrir o programa em Portugues.\n");
    $lang = prompt("> ");

    switch ($lang) {
        case "EN":
            process.stdout.write("\n\nWelcome! Let's start!\n\n");
            ask();
            break;
        case "pt":
            process.stdout.write("\n\nBem-vindo(a)! Vamos começar!\n\n");
            ask("pt");
            break;
        default:
            process.stdout.write("\n\nInvalid argument. Proceeding in English.\n\n");
            ask();
    }
}

function ask (lang = "en", index = 0) {
    console.log("\n>> " + questions[lang][index])
    answers.push(prompt(">> "));

    if (answers.length < questions[lang].length) {
        ask(lang, answers.length)
    } else {
       showResults(lang);
    }
}

function showResults(lang) {
    let summary = "";
    switch (lang) {
        case "en" :
            summary = "\n\nDaily Reflection Done! Here's your summary:\n";
        break;
        case "pt" :
            summary = "\n\nReflexão diário concluída. Aqui está seu resmumo:\n";
        break;
    }

    console.log(summary);
    questions[lang].forEach(element => {
        console.log(element + " >> " + answers[questions[lang].indexOf(element)] + "\n");
    });
}

pickLanguage();