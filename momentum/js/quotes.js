const quotes = [
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "The way to get started is to quit talking and negin doing.",
        author: "Walt Disney",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor((Math.random() * quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;