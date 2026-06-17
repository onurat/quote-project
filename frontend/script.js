const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");

async function loadQuote() {
    const response = await fetch(
        "http://127.0.0.1:3000/"
    );

    const data = await response.json();

    quoteElement.textContent = data.quote;
    authorElement.textContent = `— ${data.author}`;
}

button.addEventListener("click", loadQuote);

loadQuote();
