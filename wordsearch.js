// wordsearch: a function that receives a 2D array of letters and a word.

// The function checks to find the word horizontally and vertically, returns true
// if the word is found, and false if it's not. Pair-programmed with @cassie-eve.

// transpose: helper function to extract vertical series from the array matrix (transpose was pair-programmed by@tronross and richard)
const transpose = function(matrix) {
  let result = []; // Result will be an array of arrays
  for (let i = 0; i < matrix[0].length; i++) {
    let slice = matrix[0].slice(i, i + 1); //Slices each element of the first array as separate arrays
    result.push(slice); // Push the founded arrays into result
  }
    
  for (let j = 1; j < matrix.length; j++) { // populate the rest of the arrays
    for (let k = 0; k < result.length; k++) {
      result[k].push(matrix[j][k]);
    }
  }
  return result;
};

//FUNCTION
// wordsearch: a function that receives a 2D array of letters and a word, and searches the matrix for the word.

const wordSearch = (letters, word) => {
  let isWord = false; // set default condition

  // short-circuit false if no second argument or non-string argument
  if (!word || typeof word !== 'string') {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      isWord = true; // true if word is found within horizontal line
    }

    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    for (const m of verticalJoin) {
      if (m.includes(word)) {
        isWord = true; // true if word is found in vertical line
      }
    }
  }
  return isWord;
};

module.exports = wordSearch;