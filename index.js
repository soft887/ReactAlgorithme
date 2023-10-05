function findLongestWord(sentence) {
    // Remove non-alphabetic characters and split into words
    const words = sentence.replace(/[^a-z\s]/gi, '').split(' ');

    // Initialize variables to keep track of longest word and max vowels
    let longestWord = '';
    let maxVowels = 0;

    // Iterate over words
    for (let word of words) {
        const vowelCount = (word.match(/[aeiou]/gi) || []).length;
        if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowels)) {
            longestWord = word;
            maxVowels = vowelCount;
        }
    }

    return longestWord;
}