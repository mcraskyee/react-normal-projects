const books = [
  {
    id: 1,
    title: "Book 1",
    description: "Description for Book 1",
    author: "Andrew",
  },
  {
    id: 2,
    title: "Book 2",
    description: "Description for Book 2",
    author: "John",
  },
  {
    id: 3,
    title: "Book 3",
    description: "Description for Book 3",
    author: "Chris",
  },
];

const FAKE_DELAY = 2000;

const fakeAPI = {
  //fetchBooks API
  fetchBooks: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books);
      }, FAKE_DELAY);
    });
  },

  //addBook API, get a random book ID and push it into Books array
  addBook: (book) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        book.id = Math.max(...books.map((b) => b.id)) + 1;
        books.push(book);
        resolve(book);
      }, FAKE_DELAY);
    });
  },
};

export default fakeAPI;
