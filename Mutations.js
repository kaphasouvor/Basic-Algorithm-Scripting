function mutation(arr) {
    var secondArr = arr[1].toLowerCase();
    var firstArr = arr[0].toLowerCase();
    for (var i = 0; i < secondArr.length; i++) {
      if (firstArr.indexOf(secondArr[i]) < 0)
        return false;
    }
    return true;
   }
  
  mutation(["hello", "hey"]);
  
