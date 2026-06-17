const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");

async function loadQuote() {
    const response = await fetch(
        "https://pfruetq8s6ck4w53822xa3fk.hosting.codeyourfuture.io"
    );

    const data = await response.json();

    quoteElement.textContent = data.quote;
    authorElement.textContent = `— ${data.author}`;
}

button.addEventListener("click", loadQuote);

loadQuote();
