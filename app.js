//age <18
//age<18
let age = 17
if (age > 18) {

    console.log("you can caste vote");
}
else {
    console.log("you can't caste vote");
}

let isnew = true;// no discount
let isuser = true; //30%
let isgoldenuser = true; //50%
if (isnew) {
    console.log("0% discount");

}

else if (isuser) {
    console.log("30% discount");
}

else if (isgoldenuser) {
    console.log("50% discount");

}
else {
    console.log("please visit to avail discount");

}

//switch statements

// let activity = "breakfast";

// if (activity === "getup") {
//     console.log("it's 6:30 AM")
// }
// else if (activity === "breakfast"); {
//     console.log("it's 12:00 PM")
// }
// else if (activity === "lunch");
// {
//     console.log("it's 5:00 PM")
// }
// else if (activity === "DRIVE BACK HOME");
// {
//     console.log("it's 7:00 PM")
// }
// else if (activity === "DINNER");
// {
//     console.log("it's 10:00 PM")
// }




let activity = "get up";
switch (activity) {

    case "get up":
        console.log("it is 6:30 AM");

    case "breakfast":
        console.log("it is 7:30 AM");
        //we use break for remove case
        break
    case "lunch":
        console.log("it is 2:00 PM")
    //we use default instead of else for the condition ,which is not mentioned above
    default:
        console.log("i'm not feeling well")
}




// let sleep = "sleeping";
// switch (sleep) {

//     case "get up":
//         console.log("it is 6:30 AM");

//         default:
//             console.log("i don't wanna sleep early")
// }



//random function in javascript
//math.random();0 to 1

// console.log(Math.random());
//0 to 1
let randomNumber = Math.random(); //gives us random numbers
let increaserange = randomNumber * 100;
// console.log(Math.random()*10);
let wholenumber = Math.floor(increaserange);
console.log(wholenumber);



//ternary operator
// --------------------

// let permission="allow" 
// if (age>18){
//     permission="allow"
// }
// else{
//     permission="denied"
// }
// console.log(permission)
// ---------------------


// ternary 1
let myage = 17;
// let > 17 ? true : false
age > 18 ? console.log("you can caste vote") : console.log("you cannot caste vote");
// ternary 2

let permission = myage > 18 ? "allow" : "denied";
console.log(permission);




