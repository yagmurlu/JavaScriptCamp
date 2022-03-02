//npm run dev
function prime(numbers) {
    for (let i = 2; i <= numbers/2; i++) {
        if (numbers%i==0) {
        return false;
        }
        
    }
    return numbers;
}
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

function asalBın(){
for (let i = 1; i <= 1000; i++) {
    if (prime(i)) {
        console.log(i);
    }  
}
}

asalBın()