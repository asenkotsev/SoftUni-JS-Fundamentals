function archeryTournament(input = []) {
  let targets = input.shift().split('|').map(Number);
  let points = 0;

  const shootLeft = (index, length, targets) => {
    if (index >= 0 && index < targets.length) {
      while (length > 0) {
        if (targets[index] > 5) {
          points += 5;
          targets[index] -= 5;
        } else {
          points += targets[index];
          tagets[index] = 0;
        }
        index--;
        length--;
      }
    }
  }

  const finalIndex = (index, length, targets) => {
    let finalIndex = 0;
    if (index >= 0 && index < targets.length) {
      let temp = index - length;
      if (temp < 0) {
        finalIndex = Math.abs(temp - targets.length);
      } else {
        finalIndex = temp;
      }
    }
    return finalIndex;
  }

  const shootRight = (index, length, targets) => {
    if (index >= 0 && index < targets.length) {
      while (length > 0) {
        if (targets[index] > 5) {
          points += 5;
          targets[index] -= 5;
        } else {
          points += targets[index];
          tagets[index] = 0;
        }
        index--;
        length--;
      }
    }
  }

}

archeryTournament([
  '10|10|10|10|10',
  'Shoot Left@0@2',
  'Shoot Right@4@5',
  'Shoot Right@6@5',
  'Reverse',
  'Game over',
  ''
])