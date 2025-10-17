function collatz(num){
    while (num != 1){//go until num is 1
        if (num % 2 == 0) { //check if even
            num /= 2
        }
        else{
            num *= 3;
            num++
        }
    }
}

for(let i = 2; i <= 100000; i++){ //call collatz for 2-100000
    collatz(i)
}

console.log('done')
