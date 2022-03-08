function friendlyNumbers(num1,sum2) {
    let sum1=0;
    let sum2=0;
    for (let i = 0; i < num1; i++) {
        if (num1%i==0) {
           sum1 +=i; 
        }
    }
    for (let i = 0; i < num2; i++) {
        if (num2%i==0) {
           sum2 +=i; 
        }
    }
    if (sayi1 == sum2 && sayi2 == sum1)
    {
        //console.log("Girilen sayılar arkadaş sayılardır.")
        return true;
    }
    else
    {
        //console.log("Arkadaş sayı değil.")
        return false;
    }
}
friendlyNumbers(220,284)