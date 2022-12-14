function findAccountById(accounts, id) {
  //find & return accounts with matching ids
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //sort accounts alphabetically by last name
  return accounts.sort((accountA, accountB) => accountB.name.last < accountA.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  //return the amount of books account id has borrowed
  const acctId = account.id;
  //return above array to see if account tested matches account id
  return books.reduce((total, {borrows}) => {
    if (borrows.some((record) => record.id === acctId))
    total++;
    //return number of borrowed books
    return total;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  //return books currently out by account
    let borrowed = [];
    books.forEach((book) => {
      if (book.borrows.find((item) => item.id === account.id && !item.returned)){
         borrowed.push(book);
      }})
      
    borrowed.forEach((book) => {
    let eachAuthor = authors.find((person) => person.id === book.authorId);
      book['author'] = eachAuthor;
    })
      return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
