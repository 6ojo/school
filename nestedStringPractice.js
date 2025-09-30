function getRandomInteger(min, max)
{
    let range = max - min;
    let rand = Math.floor(Math.random() * range);
    return min + rand;
}

//Create a function following this contract:
//Name: awardMedals
//Purpose: takes a number between 1 and 8. If first place, say gold medal! If second or third, say made podium! Otherwise say not this time...
//Input: number between 1 and 8
//Output: String depeding on input number

function awardMedals(place)
let place = getRandomInteger(1,8)
console.log(place)
if (place == 1){
    console.log("you win!")
}
else{
    if (place <= 3){
        console.log("made podium!")
    }
    else {
        console.log("try again :(")
    }
}
//Create a program that:
//creates a random number between 1 and 8
//prints the result of the awardMedals function with the number created