function randNumBetween(min, max)
{
    let range = max - min + 1
    return Math.floor(Math.random() * range + min)
}

//Create a function following this contract:
//Name: avg
//Purpose: Find the average of a list of numbers
//Input: a array of numbers
//Output: the average of those numbers


function avg(randNums)
{
    let total = 0
    for(num of randNums)
    {
        total += num
    }
// return total
    return total / randNums.length
}

//Create a function following this contract:
//Name: stdev
//Purpose: Find the standard deviation of a list of numbers
//Input: a array of numbers
//Output: the standard deviation of those numbers
function stdev(aList){
    let average = avg(aList)

    let total = 0
    for(num of aList)
    {
        total += (num - average) ** 2
    }

    total /= (aList.length - 1)
    let sdFinal = Math.sqrt(total);
    return sdFinal
}

//Create a program that:
//Creates a list of 1000 random numbers between 1 and 50
let randNums =[]

for (let i = 0; i < 1000; i++)
{
    randNums.push(randNumBetween(1,50))
}

//Calculate and print the average of those numbers
console.log(avg(randNums))

//Calculate and print the standard deviation of those numbers
console.log(stdev(randNums))




//Once done, answer the following questions:
//1. How might you change how you generated your list to get an average close to 40?
// more numbers on interval 1,80
//2. How might you change how you generated your list to reduce the standard deviation?
// increase count of random numbers
