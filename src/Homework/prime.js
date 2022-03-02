function findPrime(...num) {
    for (let i = 0; i < num.length; i++) {
      for (let j = 2; j < num[i]; j++) {
          
          if (num[i]%j == 0) {
              return false;
          }
          
      }
      return console.log(num[i]);
    }
}
findPrime(1,2,3)