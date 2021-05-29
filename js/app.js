var Practice = document.getElementById("Lesson_1");
var Practice_number = document.createElement("span");


// ------  Lesson 1 Practice 1
var calculate = 9+1*5; // Calculate QUESTION 1
Practice.append(Practice_number,"Part 1 A) 9 + 1 * 5 = " + calculate); // ADD RESULT TO DIV SECTION 
var newline = document.createElement("br");
Practice.append(newline);

// Calculate QUESTION 2
calculate = 9 % 2; 
Practice.append( "B) 9 % 2  = " + calculate);
var newline = document.createElement("br");
Practice.append(newline);


// Calculate QUESTION 3
calculate = (9 / 3) * (10 - 7);
Practice.append("C) (9 / 3) * (10 - 7) = " + calculate);
var newline = document.createElement("br");
Practice.append(newline);

// Calculate QUESTION 4
calculate = 21 / 3 + (3 * 9) * 9 + 5;
Practice.append( "D) 21 / 3 + (3 * 9) * 9 + 5 = " + calculate);
var newline = document.createElement("br");
Practice.append(newline);


// Calculate QUESTION 5
calculate = 36 / 9 + 48 - 10 / 2;;
Practice.append("E) 36 ÷ 9 + 48 - 10 ÷ 2 = " + calculate);
var newline = document.createElement("br");
Practice.append(newline);





// Lesson 1 Part 2
let students = 10; 
let arr_grades = [29,24,24,16,24,16,24,29,29,24]
let sum = 0; 
let avg  = 0;

    for(var i = 0; i< students ; i++){
        sum += arr_grades[i];
    }

avg = sum / students;

Practice.append("Part 2 ------------ AVERAGE GRADE = " + avg );
var newline = document.createElement("br");
Practice.append(newline);


//Lesson 1 PART 3

let seconds =0;
let days = 30;
seconds = days*24*60*60;
Practice.append("Part 3 ------------ 30 Days in Sceonds = " + seconds );
var newline = document.createElement("br");
Practice.append(newline);

// Lesson 1 Part 4

let Firstname = "Bisher\t";
let Lastname = "Nobani\t";
let Gender = "Male\t";
let Nationalty = "Jordanian\t";

let info = Firstname.concat(Lastname,Gender,Nationalty);
Practice.append("Your Info :-   \t" + info);
var newline = document.createElement("br");
Practice.append(newline);


// Lesson 1 Part 5


// when you add (Int with String) in javascript 
var Str_Int = 10+"10";
Practice.append(" String with Int  10 + '10' = \t" + Str_Int);
var newline = document.createElement("br");
Practice.append(newline);


// when you add (String with String) in javascript 
var Str_Str = "10" +"10";
Practice.append(" String with String  '10' + '10' = \t" + Str_Int);
var newline = document.createElement("br");
Practice.append(newline);



// when you add (String with String) in javascript 
var Str_Str = "10" +"10";
Practice.append(" String with String  '10' + '10' = \t" + Str_Str);
var newline = document.createElement("br");
Practice.append(newline);



// when you add (Int + Int + String) in javascript 
var Int_Int_Str = 10 + 10 + "5";
Practice.append(" String with String  10 + 10 + '5' = \t" + Int_Int_Str);
var newline = document.createElement("br");
Practice.append(newline);

// when you add (Int + Int + String) in javascript 
var Int_Int_Str = 10 + 10 + "5";
Practice.append(" String with String  10 + 10 + '5' = \t" + Int_Int_Str);
var newline = document.createElement("br");
Practice.append(newline);




// LESSON 2 PART 1 

Practice.append
("LESSON 2 PART 1 ----------- 1) FIRST FUNCTION ERROR SYNTX  :- const myFunction = function parameter ) {} ---> MISSING PARATHEME");
var newline = document.createElement("br");
Practice.append(newline);

Practice.append
("2) SECOND FUNCTION ERROR SYNTX  :- const my Second Function = function (parameter) {} ---> NO SPACE IN FUNCTION NAME");
var newline = document.createElement("br");
Practice.append(newline);

Practice.append
("3) THIRD FUNCTION ERROR SYNTX  :- const function = function (parameter) {} ---- > THERE IS NO NAME FOR FUNCTION");
var newline = document.createElement("br");
Practice.append(newline);



Practice.append
("4) LAST-ONE FUNCTION ERROR SYNTX  :- const functionName = function (paramOne paramTwo) {} ---- > THERE IS NO COMMA BETWEEN PARAMONE AND PARAMTWO");
var newline = document.createElement("br");
Practice.append(newline);


//LESSON 2 PART 2

const fullName = function (firstName, lastName) {
    let Fullname = firstName.concat(lastName);
    Practice.append("     FULLNAME   :- "+ Fullname+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0');
    var newline = document.createElement("br");
  Practice.append(newline);
};
  
  fullName("John", "Doe"); // => "John Doe"
  fullName("Mark", "Smith"); // => "Mark Smith"

  var newline = document.createElement("br");
  Practice.append(newline);




//LESSON 2 PART 3 

const average = function (a, b) {
    let avg = (a+b)/2;
    Practice.append("      Average between 2 numbers  "+ a +"    and   "+ b +"    is    " + avg);
    var newline = document.createElement("br");
  Practice.append(newline);
  };
  
  average(20, 25); // => 22.5
  average(15, 7); // => 11


  //LESSON 2 PART 4 


  const square = function (number) {
    return number * number;
    
  };
  
  const cube = function (number) {
    return number * number * number;
  };
  
  // guess the following
  cube(25) + 20; // => 15645
  square(5) + cube(2); // => 33
  square(10 / 5) + cube(2 + 1); // => 52
  // average(square(average(6, 2)), cube(4)); // => 40


  const toThePowerOf = function (base, exponent) {
    let power = Math.pow(base,exponent);
    Practice.append(" Power for     " + base + "    and   " + exponent + "  = " + power) ;
    var newline = document.createElement("br");
    Practice.append(newline);
  };
  
  toThePowerOf(2, 3); // => 8
  toThePowerOf(4, 2); // => 16


  
  const floor = function (number) {
    let floor_number = Math.floor(number);
    Practice.append(" floor for " + number + "    is    " + floor_number);
    var newline = document.createElement("br");
    Practice.append(newline);
  };
  
  floor(5); // => 5
  floor(2.4); // => 2
  floor(0.2); // => 0
  floor(1.7); // => 1



  const calculateProfit = function (unitsSold, unitCost, unitPrice) {
    let calculateprofit = (unitPrice- unitCost) * unitsSold;
    Practice.append(" calculateprofit  =" + calculateprofit);
    var newline = document.createElement("br");
    Practice.append(newline);
  };
  
  calculateProfit(10, 5, 15); // => 100
  calculateProfit(4, 2, 5); // => 12
  
  const ageInDays = function (ageInYears) {
    let calculate_age = ageInYears*365;
    Practice.append(" convert  "+ ageInYears +"  years  to days  =   " +calculate_age);
    var newline = document.createElement("br");
    Practice.append(newline);
  };
  
  ageInDays(10); // => 3650
  ageInDays(19); // => 6935
  

// LESSON 3 PART 1
  // 1
// if (10 =  < 10)  //  < SIGN SHOULD PUT BEFORE =

// {
// }

// // 2
// if 5 > 3 {  // CONDITION SHOULD PUT BETWEEN BRACKETS 
//   return "Five bigger than three"
// }

// // 3
// if (false){
// }
// else(true){
//     // ELSE SHOULD NOT HAVE CONDITION 
// }

// // 4
// if (2 < 3 && 7 > 10)// MISSING BRACKETS 
// }

// // 5
// if ("hello" = "hello"){ // IN IF CONDITION SHOULD PUT TWO EQUAL TO COMPARE
// }


// true && true && false; ==== > FALSE
    
  

// true || (true && false); === > TRUE
    


// 5 === 2 || 1 < 10;  ===> TRUE

// (!false && true) || (!true && true); TRUE

// 1 < 2 < 3;   TRUE

// 1 < 3 > 2; FALSE



const login = function (username, password) {
  

      if (username.length > 4)
    {


        if(password.length > 8)
      {

        if(username.toLowerCase()=== "mrpotato" && password ==="LonelyPotato")
        {
          Practice.append("login successful");
          var newline = document.createElement("br");
          Practice.append(newline);
          
        }



        else
        {
          Practice.append("Invalid login information, wrong password or username");
          var newline = document.createElement("br");
          Practice.append(newline);
        }
      }

      else 
      {
        Practice.append("Invalid login information, the password length must be greater or equal to 8");
        var newline = document.createElement("br");
        Practice.append(newline);
      }
  }
    else
    {
        Practice.append("Invalid login information, the username length must be greater than 4");
        var newline = document.createElement("br");
        Practice.append(newline);
    }
  };

login("MrPotato", "LonelyPotato"); // => login successful
login("mrpotato", "LonelyPotato"); // => login successful

login("MrPotato", "lonelypotato"); // => Invalid login information, wrong password or username
login("MrPotato", "12345678"); // => Invalid login information, wrong password or username

login("MrPotato", "123456"); // => Invalid login information, the password length must be greater or equal to 8
login("mike", "12345678"); // => Invalid login information, the username length must be greater than 4



const deposit = function (amount) {
  if(Number.isInteger(amount)&& amount > 0){
    Practice.append(" the input = "+  amount+ "  deposit is  " + amount);
    var newline = document.createElement("br");
    Practice.append(newline);
  }
  else{
    Practice.append("the input = "+ amount +"   =====    Please enter a valid number");
    var newline = document.createElement("br");
    Practice.append(newline);
  }
};

deposit(100); // => 100
deposit("100"); // => Please enter a valid number




// a function that randomly outputs `rock` or `paper` or `scissors`
const random = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

// make sure to use the function above (random) to get a random output to compare with the user input
random(); // => rock
random(); // => paper  

// rock beats scissors
// paper beats rock
// scissors beats paper
const rockPaperScissors = function (move) {
  // use randomMove to get the value of the random move
  const randomMove = random()
    if (move === randomMove){
      Practice.append(move +  randomMove  +"   IT IS A DRAW");
    var newline = document.createElement("br");
    Practice.append(newline);
    }
    else if (move ==="paper" &&randomMove ==="scissors"){
      Practice.append(move +   "     " +randomMove  +"  You Win");      
    var newline = document.createElement("br");
    Practice.append(newline);
    }
    else if (move ==="paper" &&randomMove ==="rock"){
      Practice.append(move +   "     " +randomMove  +"  You Lose");

    var newline = document.createElement("br");
    Practice.append(newline);
    }
    else if (move ==="rock" &&randomMove ==="scissors"){
      Practice.append(move +  "     " + randomMove  +"  You lose");

    var newline = document.createElement("br");
    Practice.append(newline);
    }
    else if (move ==="rock" &&randomMove ==="paper"){
      Practice.append(move +   "     " +randomMove  +"  You Win");

    var newline = document.createElement("br");
    Practice.append(newline);
    }
    else if (move ==="scissors" &&randomMove ==="paper"){
      Practice.append(move + "     " + randomMove  +"  You lOSE");

    var newline = document.createElement("br");
    Practice.append(newline);
    }
    else if (move ==="scissors" &&randomMove ==="rock"){
      Practice.append(move +"     " + randomMove  +"  You Win");

    var newline = document.createElement("br");
    Practice.append(newline);
    }
    
 };

rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => you lose
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => it is a draw

 


// Lesson 5 ARRAY

// write a function `reverseWords` that accepts a string argument and returns the same string if only
// one word was passed in, and if more than one is passed it will return a string of the words in a reverse order

const reverseWords = function(str){
    let word =  str.split (" ");
    if (word.length > 1){
      word.reverse();
      Practice.append(word);
      var newline = document.createElement("br");
    Practice.append(newline);
    }
    else {
      Practice.append(word);
      var newline = document.createElement("br");
    Practice.append(newline);

    }
  }

reverseWords("Hello"); // => "Hello"
reverseWords("Hello World"); // => "World Hello"




