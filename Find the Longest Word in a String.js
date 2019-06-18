function findLongestWordLength(str) {
    var terms = str.split(' ');
    var longest = 0;
  
    for (var i = 0; i < terms.length; i++) {
      if (terms[i].length > longest) {
        longest = terms[i].length;
      }
    }
  
    return longest;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
