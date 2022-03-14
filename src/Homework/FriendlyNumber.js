function friendlyNumbers(num1,num2) {
    let sum1=0;
    let sum2=0;
    for (let i = 1; i < num1; i++) {
        if (num1%i==0) {
           sum1 +=i; 
        }
    }
    for (let j = 1; j < num2; j++) {
        if (num2%j==0) {
           sum2 +=j; 
        }
    }
    if (sum1 == num2 && sum2 == num1)
    {
        console.log("Birader Sayı :) ♥ ")
   
    }
    else
    {
        console.log("Arkadaş sayı değil.")
      
    }
}
friendlyNumbers(220,284)