//Create a function following this contract:
//Name: fizzBuzz
//Purpose: count to a specified number
///if the number is divisible by three, print fizz instead
///if the number is divisible by 5, print buzz instead
///if the number is divisible by 3 and 5, print fizzbuzz instead
//Input: number to count to
//Output: void


// grant orvik


//Create a program that:
//does fizzbuzz to 15
//does fizzbuzz to 30
//does fizzbuzz to 100

function fizzBuzz(lim){
    for(let i = 1; i <= lim; i++){
        if((i % 3) == 0 && (i % 5) == 0){
            console.log('fizzbuzz')
        }
        else if(i % 3 == 0){
            console.log('fizz')
        } 
        else if(i % 5 == 0){
            console.log('buzz')
        }  
        else  {
            console.log(i)
        }
    }
}

fizzBuzz(15)
fizzBuzz(30)
fizzBuzz(150)
