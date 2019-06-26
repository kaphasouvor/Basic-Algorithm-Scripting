function titleCase(str) {
    // Splits one strong into an array of strings seperated by ""
    var arr = str.split(" ");

   // make a for loop to iterate through the array
    for (var i = 0; i < arr.length; i++){
        
      // a place holder for the original string
      var holder = arr[i];

      // get the first letter on the array and captialize it
      var upperCase = holder.charAt(0).toUpperCase();

      // gets the second and rest of string and lower case it
      holder = holder.slice(1,holder.length).toLowerCase();
      
      // concats the uppercase with the lowercase word
      arr[i] = upperCase.concat(holder);
    }
    // take the array str into a single string.
    str = arr.join(" ");
    
  
    return str;
  }
  
  titleCase("I'm a little tea pot");
