function isPalindrome(word) {
  if (typeof word !== 'string') return false;
  const clean = word.toLowerCase();
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length || phraseLength <= 0) {
    return [];
  }
  const phraseCounts = {};
  const maxStart = words.length - phraseLength;

  for (let i = 0; i <= maxStart; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    phraseCounts[phrase] = (phraseCounts[phrase] || 0) + 1;
  }

  const repeatedIndices = [];
  for (let i = 0; i <= maxStart; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (phraseCounts[phrase] > 1) {
      repeatedIndices.push(i);
    }
  }

  return repeatedIndices;
}

function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) {
    return [];
  }
  const results = [];
  for (let i = 0; i < texts.length; i++) {
    const words = texts[i];
    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }
  return results;
}
