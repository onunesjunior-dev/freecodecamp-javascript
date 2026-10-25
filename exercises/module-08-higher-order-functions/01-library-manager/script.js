const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about: "A practical book about discarding bad habits and building good ones",
    pages: 320
  }
  // Demais livros populados pelo ecossistema de testes do freeCodeCamp
];

console.log("Books in the Library:\n");

function getBookInformation(catalog) {
  return catalog.map((book) => `${book.title} by ${book.author}`).join("\n");
}

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n");

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

function getTotalPages(catalog) {
  return catalog.reduce((total, book) => total + book.pages, 0);
}

console.log(getTotalPages(library));
