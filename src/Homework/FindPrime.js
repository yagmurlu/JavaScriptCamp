//npm run dev
// 1- prime fonksyonu ile asal sayı bulma işlemini yapıyoruz.
function prime(numbers) {
    for (let i = 2; i <= numbers/2; i++) {
        if (numbers%i==0) {
        return false;
        }
        
    }
    return numbers;
}
//2- findPrime ile istediğimiz kadar sayı verip bu sayıların asal olup omadığını bulan fonksiyon.
function findPrime(...num){
    for (let i = 0; i < num.length; i++) {
        if (prime(num[i])) {
            console.log(num[i]+ " Asal")
        }
        else{
            console.log(num[i]+ " Don't Asal")
        }
        
    }
    
}

findPrime(1,5,10,11,18,13,181,179)
// 3- 1000' e kadar olan tüm asal sayıları bulan fonksiyon
function asalBın(){
for (let i = 1; i <= 1000; i++) {
    if (prime(i)) {
        console.log(i);
    }  
}
}

asalBın()