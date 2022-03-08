
function asalBul() {
    for (var num = 1; num <= 1000; num++) {

        var prime = true;
        for (var i = 2; i <= num; i++) {
            if (num%i===0 && i!==num) {
                prime = false;
            }
        }
        if (prime === true) {
            console.log(num);
        }
    }
    
}
asalBul()

