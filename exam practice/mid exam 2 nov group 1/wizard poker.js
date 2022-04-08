function wizardPoker(input = []) {
    input.pop();
    let cards = input.shift().split(':');
    let output = [];

    const addCard = (CardName) => {
        if (cards.includes(CardName)) {
            output.push(CardName);
        } else {
            console.log('Card not found.');
        }
    }

    const insertCard = (cardName, index) => {
        if (cards.includes(cardName) && index >= 0 && index < output.length) {
            output.splice(index, 0, cardName);
        } else {
            console.log('Error!');
        }
    }

    const removeCard = (cardName) => {
        let index = output.indexOf(cardName);
        if (index == -1) {
            console.log('Card not found.');
        } else {
            output.splice(index, 1);
        }
    }

    const swapCards = (card1, card2) => {
        let index1 = output.indexOf(card1);
        let index2 = output.indexOf(card2);
        let temp = output[index1];
        output[index1] = output[index2];
        output[index2] = temp;
    }

    const shuffleDeck = () => {
        output.reverse();
    }

    for (const line of input) {
        if (line.includes('deck')) {
            shuffleDeck();
        } else {
            let [command, cardName, token2] = line.split(' ');

            if (command == 'Add') {
                addCard(cardName);
            } else if (command == 'Insert') {
                token2 = Number(token2);
                insertCard(cardName, token2)
            } else if (command == 'Remove') {
                removeCard(cardName);
            } else if (command == 'Swap') {
                swapCards(cardName, token2);
            }
        }
    }
    console.log(output.join(' '));
}

wizardPoker([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
])