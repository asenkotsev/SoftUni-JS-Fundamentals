function inboxManager(input) {
    input.pop();
    let inbox = new Map();
    let count = 0;

    for (const line of input) {
        [command, name, attachment] = line.split('->');
        if (command == 'Add') {
            if (!inbox.has(name)) {
                inbox.set(name, []);
            } else {
                console.log(`${name} is already registered`);

            }
        } else if (command == 'Send') {
            if (inbox.has(name)) {
                inbox.get(name).push(attachment);
            }
        } else if (command == 'Delete') {
            if (inbox.has(name)) {
                inbox.delete(name);
            } else {
                console.log(`${name} not found!`);

            }
        }
    }
  
    const sortUsers = (userA, userB) => {
        let usernameA = userA[0];
        let userEmailsA = userA[1];
        let emailCountA = userEmailsA.length;

        let usernameB = userB[0];
        let userEmailsB = userB[1];
        let emailCountB = userEmailsB.length;

        if (emailCountB == emailCountA) {
            return usernameA.localeCompare(usernameB);
        } else {
            return emailCountA - emailCountB;
        }
    }
   
    let sorted = Array.from(inbox.entries());
    sorted.sort(sortUsers);
    let result = new Map(sorted);
    console.log(result);
    
    console.log(`Users count: ${sorted.length}`);
    for (const [name, emails] of result) {
        console.log(name);
        emails.forEach(x => {
            console.log(`- ${x}`);

        })
    }
}

inboxManager([
    'Add->angf',
    'Add->bgfdfgd',
    'Add->ccdcd',
    'Add->defefcefe',
    'Send->angf->Hello World',
    'Send->bgfdfgd->Hello World',
    'Send->ccdcd->Hello World',
    'Send->defefcefe->Hello World',
    'Send->defefcefe->Hello World',
    'Send->defefcefe->Hello World',
    'Send->defefcefe->Hello World',
    'Send->defefcefe->Hello World',
    'Send->defefcefe->Hello World',
    'Statistics'
])