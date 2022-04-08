function registration(input) {
    input.shift();
    let registrations = input;
    let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[a-z]{5,}\d+)P@\$/;
    let successCount = 0;

    for (const registration of registrations) {
        if (registration.trim().length < 1) {
            continue;
        }
        let result = pattern.exec(registration);
        if (result) {
            console.log('Registration was successful');
            console.log(`Username: ${result.groups.username}, Password: ${result.groups.password}`);
            successCount++;

        } else {
            console.log('Invalid username or password');

        }
    }
    console.log(`Successful registrations: ${successCount}`);

}


registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$',
    ""

])