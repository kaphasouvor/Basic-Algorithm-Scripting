function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArray = [];
    for (var i = 0; i < arr.length; i = i+size){
      var temp = arr.slice(i, i+size);
      newArray.push(temp);
    }
    return newArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
