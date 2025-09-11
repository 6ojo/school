//Create a function following this contract:
//Name: usernameMaker
//Purpose: Create a username for someone based on their email address
//Input: email address string <first_name>.<last_name>@<email_domain>.<top_level_domain>
//Output: username following the requirements:
//First three characters of first name, last three characters of last name and the email domain
//ex: hank.hawk@tvusd.org --> hanawktvusd



//Create a program that:

//generates a username for the following three emails and prints it
let email1 = "roger.dodger@gmail.com";
let email2 = "mac.miller@soundcloud.com";
let email3 = "keanu.reeves@matrix.org";
// let email4 = "me@gojo.one"


function usernameMaker(user) {

    let nameDotPos = user.indexOf(".")
    let atPos = user.indexOf("@")
    let tdlDotPos = user.indexOf(".", atPos)
    
    // if (nameDotPos < 1 || atPos < 1 || tdlDotPos < atPos + 2) {
    //     console.log("Email too short!");
    //     return "";
    // }
   let firstName = user.substring(0, 3)
   let lastName = user.substring(atPos - 3, atPos)
   let domain = user.substring(atPos + 1, tdlDotPos)


   return firstName +  lastName + domain
}


console.log(usernameMaker(email1))
console.log(usernameMaker(email2))
console.log(usernameMaker(email3))
// console.log(usernameMaker(email4))

//Challenge: Once done, add some defense so it will inform the user when the first or last name isn't long enough
function defense(user) {
    if (user.indexOf(".") >= 3) {
        let boolean = false;
    }
    return;
}