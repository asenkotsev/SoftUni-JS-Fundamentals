function schoolLibrary(input = []) {
    let output = input.shift().split('&');

    const addBook = (bookName) => {
        if (!output.includes(bookName)) {
            output.unshift(bookName);
        }
    }

    const takeBook = (bookName) => {
        let index = output.indexOf(bookName);
        if (index != -1) {
            output.splice(index, 1);
        }
    }

    const swapBooks = (book1, book2) => {
        let index1 = output.indexOf(book1.trim());
        let index2 = output.indexOf(book2.trim());
        if (index1 != -1 && index2 != -1) {
            let temp = output[index1];
            output[index1] = output[index2];
            output[index2] = temp;
        }
    }

    const insertBook = (bookName) => {
        output.push(bookName);
    }

    const checkBook = (index) => {
        index = Number(index);
        if (index >= 0 && index < output.length) {
            console.log(output[index]);
        }
    }

    for (const line of input) {
        let [command, token1, token2] = line.split(' | ');
        if (command == 'Add Book') {
            addBook(token1);
        } else if (command == 'Take Book') {
            takeBook(token1);
        } else if (command == 'Swap Books') {
            swapBooks(token1, token2);
        } else if (command == 'Insert Book') {
            insertBook(token1);
        } else if (command == 'Check Book') {
            checkBook(token1);
        } else if (command == 'Done') {
            break;
        }
    }
    console.log(output.join(', '));
}

//schoolLibrary([
//    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
//    'Add Book | David Copperfield',
//    'Add Book | One Thousand and One Nights',
//    'Swap Books | One Thousand and One Nights | Catch-22',
//    'Take Book | David Copperfield',
//    'Insert Book | The Stories of Anton Chekhov',
//    'Check Book | 17',
//    'Done',
//    ''
//])

schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
])