function getIndexToIns(arr, num) {
// Find my place in this sorted array.
// sort (least to greatest)the array which uses a callback function
arr.sort(function(x, y) {
return x - y;
});
// using for loop to iterate over the array
    for (var i = 0; i < arr.length; i++){
      // Compare the items
      // When an item on the array is greater than the num
      // return the index.
    if (arr[i] >= num)
    return i;
}
return arr.length;
}

getIndexToIns([40, 60], 50);
