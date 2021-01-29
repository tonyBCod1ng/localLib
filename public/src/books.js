function findAuthorById(authors, id) {
  const findAuth = authors.find(author => author.id === id);
  return findAuth;
}

function findBookById(books, id) {
  const findBook = books.find(book => book.id === id);
  return findBook;
}
function _filterByStatus(books) {
  return books.filter(book => book.borrows[0].returned);
}
function partitionBooksByBorrowedStatus(books) {
  let result = []
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  result.push(borrowedBooks);
  result.push(_filterByStatus(books));
  return result;
}

function getBorrowersForBook(book, accounts) {
  let borrowerList = [];
  book.borrows.forEach(borrow => {
    let borrower = accounts.find(account => borrow.id === account.id);
    let borrowerInfo = { ...borrower };
    borrowerInfo.returned = borrow.returned;
    borrowerList.push(borrowerInfo);
  });
  return borrowerList.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
