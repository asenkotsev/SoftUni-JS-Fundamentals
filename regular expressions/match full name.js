function matchFullName(arr) {
    let text = arr.shift();
    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/g;
    let result = text.match(pattern);
    console.log(result.join(' '));
}

matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ])