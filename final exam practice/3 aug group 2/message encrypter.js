function messageEncrypter(input) {
    input.shift();
    for(let i = 0; i < input.length; i++) {
        let length = input[i].length + 1;
       input[i] = input[i].padEnd(length, '1')
    }
    
    let pattern = /([@*])(?<tag>[A-Z][a-z]{3,})\1: \[(?<char1>[A-Za-z])\]\|\[(?<char2>[A-Za-z])\]\|\[(?<char3>[A-Za-z])\]\|1/gm;
    for(const message of input) {
        
        let match = pattern.exec(message) 
        if(match) {
            console.log(`${match.groups.tag}: ${match.groups.char1.charCodeAt()} ${match.groups.char2.charCodeAt()} ${match.groups.char3.charCodeAt()}`);
            
        } else {
            console.log('Valid message not found!');
            
        }
    }
}

messageEncrypter([
  '3',
  '*Request*: [I]|[s]|[i]|',
  '*Taggy@: [73]|[73]|[73]|' ,
  'Should be valid @Taggy@: [v]|[a]|[l]|'
])

messageEncrypter([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
])