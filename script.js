const quotes = [
    "The best way to predict the future is to invent it.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "In the middle of difficulty lies opportunity.",
    "You miss all of the shots you don't take.",
    "Life is what happens when you're busy making other plans.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "It always seems impossible until it’s done.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Strive not to be a success, but rather to be of value.",
    "You must be the change you wish to see in the world.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Everything you can imagine is real.",
    "The only thing standing between you and your goal is the story you keep telling yourself.",
    "Do one thing every day that scares you.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "I find that the harder I work, the more luck I seem to have.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "A journey of a thousand miles begins with a single step.",
    "The only true wisdom is in knowing you know nothing.",
    "The way to get started is to quit talking and begin doing.",
    "Don’t watch the clock; do what it does. Keep going.",
    "If you can dream it, you can do it."
];

const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if(character == null) {
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }
        else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if(correct)
        renderNewQuote()
})

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}

function renderNewQuote() {
    const quote = getRandomQuote();
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
        }) 
    quoteInputElement.value = null

    startTimer()
}

let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote();