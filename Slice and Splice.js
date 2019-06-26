function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
  
  // The slice() method extracts a section of a string and returns it as a new string, 
  // without modifying the original string.
  
  var current = arr2.slice();
  for (var i = 0; i < arr1.length; i++){
  
    // The splice() method changes the contents of an array by removing or 
    // replacing existing elements and/or adding new elements
    
    current.splice(n, 0, arr1[i]);
    n++
    arr2 = current;
  }
  
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
  
  
