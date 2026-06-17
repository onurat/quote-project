const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const quotes = [
  {
    quote: "Peace at home, peace in the world.",
    author: "Mustafa Kemal Atatürk",
  },
  {
    quote: "Either I take Constantinople or Constantinople takes me.",
    author: "Fatih Sultan Mehmed",
  },
];

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  res.json(randomQuote());
});

app.post("/", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    return res.status(400).send(
      "Expected body to contain quote and author"
    );
  }

  quotes.push({
    quote,
    author,
  });

  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
