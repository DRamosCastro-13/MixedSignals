let string1 = '';
let string2 = '';
let string3 = '';
let message = [];

const generateString1 = () => {
    let random = Math.floor(Math.random() * 2);

    if (random === 0) {
        string1 = 'You';
    } else {
        string1 = 'Your';
    }

    message.push(string1);
};

const generateString2 = (str) => {
    let random = Math.floor(Math.random() * 3);
    
    if (str === 'You') {
        string2 = 'will get';
    } else {
        if (random === 0) {
            string2 = 'mom will';
        } else if (random === 1) {
            string2 = 'best friend will';
        } else {
            string2 = 'partner will';
        }
    }

    message.push(string2);
};

const generateString3 = (str) => {
    let random = Math.floor(Math.random() * 10);

    if (str === 'will get') {
        string3 = 'a new capybara';
    } else {
        if (random === 0) {
            string3 = 'kill you';
        } else if (random === 1) {
            string3 = 'bake you a cake';
        } else if (random === 2) {
            string3 = 'ask you to rob a bank with them';
        } else if (random === 3) {
            string3 = 'take you to the movies to watch a terrible movie';
        } else if (random === 4) {
            string3 = 'take you out to eat your favorite food';
        } else if (random === 5) {
            string3 = 'buy you a pair of socks, because you need them';
        } else if (random === 6) {
            string3 = 'teach you how to learn React';
        } else if (random === 7) {
            string3 = 'take you on a trip to Santorini';
        } else if (random === 8) {
            string3 = 'ask you to buy a lottery ticket for them, they are going to win, but they won\'t share the prize with you';
        } else {
            string3 = 'offer you as a gift to the aliens';
        }
    }

    message.push(string3);
};

const generateRandomString = () => {
    generateString1();
    generateString2(string1);
    generateString3(string2);
    console.log(message.join(' '));
};

generateRandomString();
