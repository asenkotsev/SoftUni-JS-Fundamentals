function mirrorWords(input) {
  let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
  let result = [];
  let mirrorWords = [];

  while ((mirror = pattern.exec(input)) !== null) {
    result.push(mirror.groups.firstWord);
    result.push(mirror.groups.secondWord);
  }

  if (result.length == 0) {
    console.log("No word pairs found!");

  } else {
    console.log(`${result.length / 2} word pairs found!`);

    for (let i = 0; i < result.length; i++) {
      if (result[i].split('').reverse().join('') === result[i + 1]) {
        mirrorWords.push(`${result[i]} <=> ${result[i + 1]}`);
      }
    }
  }

  if (mirrorWords.length == 0) {
    console.log("No mirror words!");

  } else {
    console.log('The mirror words are:');
    console.log(mirrorWords.join(', '));

  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])



