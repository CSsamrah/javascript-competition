var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The final book of the hunger games',
        readingStatus: false
    }
];

function displayReadingStatus(books) {
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const status = book.readingStatus ? "already read" : "not read yet";
        console.log(`${book.title} by ${book.author}, Reading status: ${status}`);
    }
}

// Display reading status of books in the library
displayReadingStatus(library);