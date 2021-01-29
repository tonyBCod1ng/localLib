function findAccountById(accounts, id) {
  const search = accounts.find((user) => user.id === id);
  return search;
}

function sortAccountsByLastName(accounts) {
  const arrange = accounts.sort((userA, userB) => userA.name.last < userB.name.last ? -1 : 1);
  return arrange;
}

function numberOfBorrows(account, books) {
  let tally = [];
  console.log(account.id)
  for (let book in books) {
    let bookBorrows = (books[book].borrows)
    for (let borrow in bookBorrows) {
      if (bookBorrows[borrow].id === account.id) {
        tally.push(account.id)
      }
    }
  }
  return tally.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    const borrowedBooks = book.borrows[0];
    return !borrowedBooks.returned && borrowedBooks.id === account.id;
  })
    .map(book => {
      const author = authors.find(author => author.id === book.authorId);
      return { ...book, author };
    });

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
