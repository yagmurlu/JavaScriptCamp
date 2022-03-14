function perfectNum() {
    let sum=0;
    for (let i = 1; i < 1000; i++){
        for (let j = 0; j <i/2 ; j++) {
            if (i%j==0) {
                sum += j;
            } 
        }
        if (i==sum) {
            console.log("Perfect Number : "+i)
        }
    }
}
perfectNum()