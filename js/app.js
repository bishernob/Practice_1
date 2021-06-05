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




//Write a function randomFruit that accepts an array of fruits and returns a random element from that array.

const randomFruit = function (array) {
  const fruit = Math.floor(Math.random() * array.length);
  Practice.append(array[fruit]);
  var newline = document.createElement("br");
    Practice.append(newline);
};

const fruits = ["Apple", "banana", "Strawberry", "Mango"];

randomFruit(fruits); // => Apple
randomFruit(fruits); // => Apple
randomFruit(fruits); // => Strawberry
randomFruit(fruits); // => Banana




//Write a function convertToString that accepts an array of strings and returns a string made out of the array values.

const convertToString = function (array) {
    let afterconvert = array.join(' ');
    Practice.append(afterconvert);
    var newline = document.createElement("br");
    Practice.append(newline);
};

convertToString(["Hello", "i", "am", "John", "Doe"]); // => Hello i am John Doe
convertToString(["Hello", "John", "i", "am", "Jane"]); // => Hello John i am Jane

//Write a function search that accepts an array of strings and a string then returns whether the string is inside of the array or not

const search = function (array, string) {
    let result  = array.includes(string);
    Practice.append("check if this element   "+ string + "  inside array = " + result );
    var newline = document.createElement("br");
    Practice.append(newline);
};

const fruits2 = ["Apple", "banana", "Strawberry", "Mango"];

search(fruits2, "Apple"); // => true
search(fruits2, "banana"); // => true
search(fruits2, "John"); // => false

// Object

// - access the age property
// - modify the person's age to be 23 years old
// - add a property called `work` with the value of an object with two keys position and salary
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};

person.age = 23;
person['work'] = {position:"developer" , salary : 350};


console.log(person);

// - access the first name property of both employees
// - add an employee object with your name and the position of full-stack developer
const employees = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
];

const newemployee = {id:3 , name :{first:"bisher" , last: "Nobani"}, position: "full-stack developer"};

let merged ={ ...employees , ...newemployee}

console.log(merged);

// - access the model value of both cars
// - change the prius model from 2019 to 2020
// - add a new car of your choice
// - add a property `isAutomatic` for all three cars
const cars = {
  toyota: {
    name: "prius",
    model: 2019,
  },
  nissan: {
    name: "leaf",
    model: 2020,
  },
};

cars.toyota['isAutomatic'] = "yes";
cars.nissan['isAutomatic'] = "No";
cars['ford'] = {name : "fusion" , model : "2010"};
console.log(cars);





//Write a factory function createCar that accepts three string arguments brand, name, color 
//and returns an object representing the car.


const createCar = function (brand, name, color) {

  let newcar_obj = {}
   newcar_obj={brand,name,color};
  // newcar_obj['brand']=brand
  Practice.append("new car brand =   "+newcar_obj.brand+"   ",newcar_obj.name+"     ",newcar_obj.color);
  var newline = document.createElement("br");
  Practice.append(newline);

};

createCar("Toyota", "Prius", "Black"); // => {brand: "Toyota", name: "Prius", color: "Black"}

//Write a function getFullName that accepts an object representing a person and returns that person's full name in a string.

const getFullName = function (person) {
      console.log(person);
      var newline = document.createElement("br");
    Practice.append(newline);
}

getFullName({ first: "Elon", middle: "Reeve ", last: "Musk" }); // => "Elon Reeve Musk"
getFullName({ first: "John", middle: "Mark ", last: "Doe" }); // => "John Mark Doe"

//Write a function olderThan that accepts two objects personOne, personTwo and returns a string that represent who is older than the other.

const olderThan = function (personOne, personTwo) {
    if(personOne.age < personTwo.age){
      Practice.append(personTwo.name+" is older than " + personOne.name);
    }
    else if (personTwo.age == personOne.age){
      Practice.append(personTwo.name+" is as old as " + personOne.name);
      var newline = document.createElement("br");
    Practice.append(newline);
    }
    else{
      Practice.append(personOne.name+" is as old as " + personTwo.name);

    }
    var newline = document.createElement("br");
    Practice.append(newline);
    
};

olderThan({ name: "John", age: 23 }, { name: "Jane", age: 26 }); // => "Jane is older than John"
olderThan({ name: "Mark", age: 30 }, { name: "Smith", age: 25 }); // => "Mark is older than Smith"
olderThan({ name: "Marry", age: 20 }, { name: "Sarah", age: 20 }); // => "Marry is as old as Sarah"






// - access the value of Sarah's children and the value of Samuel's children
// - add a child for Samuel named Sam that has two children Marry and Gwen
// - delete the children property from the people who don't have children
// HINT: read about the delete operator
const family = {
  name: "John",
  children: [
    {
      name: "Bill",
      children: [
        {
          name: "Mark",
          children: [],
        },
        {
          name: "Sarah",
          children: [
            {
              name: "Smith",
              children: [],
            },
            {
              name: "Stan",
              children: [],
            },
          ],
        },
        {
          name: "Samuel",
          children: [
            {
              name: "Marry",
              children:[],
            },
            {
              name :"Gwen",
              children:[],
            }
          ],

        },
      ],
    },
    {
      name: "Jane",
      children: [],
    },
  ],
};


// things to validate:
// 1- length of the email is greater than or equal 6
// 2- length of the password is greater than or equal 8
// 3- email contains `@` and `.com`
// 4- the user must be in the users object
// 5- both of the passwords match
// 6- when you compare information make sure to reference the users object and access the value form there
const users = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};

const isValidUser = function (loginInfo) {
      if(loginInfo.email.length >= 6 && loginInfo.password.length>= 8 && loginInfo.email.includes("@",".com")){
        for(let name in users){
          if(users[name] == loginInfo.username && users[name].password == loginInfo.password){
            console.log("true");
          }
        }
      }
      else
      {
        console.log("false");
      }
}

isValidUser({
  username: "MrPotato",
  email: "mr.potato@gmail.com",
  password: "LonelyPotato",
}); // => true

isValidUser({
  username: "MrPotato",
  email: "mr.potato@gmail.com",
  password: "Lonely",
}); // => false

isValidUser({
  username: "MrPotato",
  email: "mr.potato.gmail.com",
  password: "LonelyPotato",
}); // => false










// LOOPS


// Write a function sum that accepts an array of numbers and returns the sum of the numbers.


const sum_1 = function (numbers) {
  let result = 0
  for(i in numbers){
    result += numbers[i];
  }
  Practice.append("Sum == " + result);
  var newline = document.createElement("br");
    Practice.append(newline);
};
sum_1([1, 2, 3, 4, 5, 6]); // => 21



//Write a function onlyOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.


const filter = function (numbers) {
  let result = [];
  for(i in numbers){
   if(numbers[i] % 2 == 1){
     result.push(numbers[i]);
   }
  }
  Practice.append("odd numbners in array  " + result);
  var newline = document.createElement("br");
    Practice.append(newline);
};
filter([0, 1, 2, 3, 4, 5, 6]); // => [1, 3, 5]




//Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.

const maximumNumber = function (numbers) {
      let max = 0;
      for(i in numbers){
      if(max < numbers[i]){
        max = numbers[i];
      }
    }
    Practice.append("Max number in array = " + max);
    var newline = document.createElement("br");
    Practice.append(newline);
};
maximumNumber([0, 5, 2, 10, 8, 6]); // => 10


// Write a function totalBill that accepts an object representing separate bills and returns the sum of all bills.

// Make sure to loop over the bills object

const bills = {
  waterBill: 25,
  electricityBill: 50,
  hospitalBill: 1000,
};

const totalBill = function (billsObject) {
     
      let bill = bills.waterBill + bills.electricityBill + bills.hospitalBill ;
      Practice.append("total bill = " + bill);
      var newline = document.createElement("br");
    Practice.append(newline);   
};
totalBill(bills); // => 1075


/* Write a function validateMessage that accepts an object representing a message and return the object 
if it is valid and after removing any extra keys, the message will consist of three keys username, message, date with all of their values as strings return the object only 
if all three keys are strings, 
if the number of keys is more than three then delete the extra keys, if the message doesn’t have the right data type then return invalid message*/



const messageOne = {
  username: "John",
  message: "Hello",
  date: "01/01/2020",
  someKey: "someValue",
};

const messageTwo = {
  username: 10,
  message: "Hello",
  date: "01/01/2020",
};

const validateMessage = function (message) {
   
  // missing delete last element from obj messageOne :(
    if(typeof message.username === 'string' && typeof message.message === 'string' && typeof message.date === 'string'){
      console.log(message);
    }
    else{
      console.log("invalid message");
    }
    var newline = document.createElement("br");
    Practice.append(newline);
  
};
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message



//Write a function onlyEven that accepts an array of numbers and returns the same array with only the even numbers.

const onlyEven = function (numbers) {
    let ever_arr = [];
    for (let i in numbers){
      if(numbers[i] % 2 == 0){
        ever_arr.push(numbers[i])
      }
    }
    Practice.append("Only even number  " + ever_arr);
    var newline = document.createElement("br");
    Practice.append(newline);
  
};
onlyEven([0, 1, 2, 3, 4, 5, 6]) // =>[0, 2, 4, 6]
onlyEven([1, 9, 2, 3, 4]) // => [2, 4]



//Write a function sort that accepts an unordered array of numbers and returns the same array in a descending order.


// make sure to use the same array
const sort = function (numbers) {

  numbers.sort(function(a, b){return b-a});
  Practice.append("array descending order " + numbers);
  var newline = document.createElement("br");
    Practice.append(newline);
  // TODO: Your code here
};

sort([0, 1, 2, 3, 4, 5, 6]); // => [6, 5, 4, 3, 2, 1, 0]
sort([3, 6, 2, 0, 4, 1, 5]); // => [6, 5, 4, 3, 2, 1, 0]




//Write a function compare that accepts an array and an object and returns true if all the array values are present as object values.

const compare = function (array, object) {
  // var x = false  ;
  // for (let i in array){
  //   if(object.values (array[i])==array[i]){
  //            x = true;
  //   }
  //   else{
  //     x = false;
  //   }
  // }
  // console.log(object.values());
};
      


compare(["one", "two", "three"], { 0: "one", 1: "two", 2: "three" }); // => true
compare(["one", "two", "four"], { 0: "one", 1: "two", 2: "three" }); // => false
compare(["one", "two"], { "foo": "one", "bar": "two", "baz": "three" }); // => true
compare(["one", "two", "three"], { "foo": "one", "bar": "two" }); // => false



//Write a function deleteKeys that accepts an array and an object and
// returns the same object after removing all key-value pairs depending on the values in the array, 
//the array will contain the key names that must be removed from the object.



const deleteKeys = function (array, object) {
    for (let x in array){
    if(object.hasOwnProperty(array[x])){
          Reflect.deleteProperty(object,array[x]);
          
    }
  }
  console.log(object);
};

deleteKeys(["one", "two"], { "one": "one", "two": "two", "three": "three" }); // => { three: "three" }
deleteKeys(["four", "five", "one"], { 0: "one", 1: "two", 2: "three" }); // => { two: "two", three: "three" }

 //6.   Write a function sum that returns the sum of all arguments passed to the function, 
 //make sure not to use parameters.

const sum_ = function () {
        let sum = 0;
      for (var i = 0 ; i < arguments.length;i++){
        sum += arguments[i];
      }
      console.log(sum);
};

sum_(1, 2); // => 3
sum_(1, 2, 3, 4); // => 10
sum_(4, 5, 6, 7, 8); // => 30
sum_(1); // => 1
sum_(); // => 0

//HINT: read about arguments.

