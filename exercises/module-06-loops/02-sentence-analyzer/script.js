function getVowelCount(sentence) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let count = 0;

  for (const char of sentence) {
    if (consonants.includes(char)) {
      count++;
    }
  }

  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 0;

  for (const char of sentence) {
    if (char !== " " && !letters.includes(char)) {
      count++;
    }
  }

  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === "") return 0;
  const words = sentence.trim().split(/\s+/);
  let count = 0;

  for (const word of words) {
    count++;
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
