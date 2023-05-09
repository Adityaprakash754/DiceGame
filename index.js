// to generate a random number
var num1 = Math.random();
num1 = num1 * 6;
num1 = Math.floor(num1) + 1;

// to get the random image
var rndImg1 = "images/dice" + num1 + ".png";

// to change the image
var img1 = document.querySelectorAll("img")[0].setAttribute("src",rndImg1);


// repeating the above process for 2nd dice

var num2 = Math.floor(Math.random() * 6) + 1;

var rndImg2 = "images/" + "dice" + num2 +".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src",rndImg2);


// to decide winner we will compare the num1 and num2
// then we will change the h1 tag to say the name of the winner

if(num1 > num2)
{
    document.querySelector("h1").innerHTML = "🚩Player1 wins";
}

else if(num1 < num2)
{
    document.querySelector("h1").innerHTML = "Player2 wins🚩";
}

else
{
    document.querySelector("h1").innerHTML = "🎉Tie!🎉";
}