function factorialize(num) {
    if (num === 0) {
      return 1;
    } else {
       return num * factorialize(num-1);
    }
    }
    
    factorialize(5);


    function factorialize(num) {
      var product = 1;
      for (var i = 1; i <= num; i=i+1) {
          product = product * i;
          console.log(i);
      } return product;
    }
    
    factorialize(5);
