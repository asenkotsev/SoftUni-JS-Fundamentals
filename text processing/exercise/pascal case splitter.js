function pascalCaseSplitter(string) {
   let arr = string.split(/(?=[A-Z])/);
   console.log(arr.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')