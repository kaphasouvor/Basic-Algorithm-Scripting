function repeatStringNumTimes(str, num) {
    // repeat after me
  if (num > 1) {
    return str + repeatStringNumTimes(str, num - 1);
  } 
  if (num === 1) {
    return str;
  } else (num <= 0) 
    return '';
  }
  repeatStringNumTimes("abc", 3);
  
