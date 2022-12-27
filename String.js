// 1. Vowels

// a. string is letter
const vowel = (string) => {
  const str = string.toLocaleLowerCase();

  if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
    console.log(`${str} is a vowel`);
  } else {
    console.log(` ${str} is a consonant`);
  }
};
console.log(vowel("a"));

// b.  string is a word

var vowels = ["a", "e", "i", "o", "u", "y"];
const words = (word) => {
  let count = 0;
  let a = [];
  for (let letter of word) {
    if (vowels.includes(letter)) {
      count++;
      a.push(letter);
    }
  }
  return a;
  // return count;
};
console.log(words("asderti"));

// Consonants
