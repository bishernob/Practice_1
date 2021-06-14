var container = document.getElementById("container");

//Write a function sumCubes that accepts an array and returns the sum of the cubed numbers.

const sumCubes = function (number) {
    let index_number = 0
    if(number.length ==0){
        return 0;
    }
    
    return Math.pow(number[0],3) + sumCubes(number.slice(1));
}; 
  console.log("The sum for cubes numbers")
  console.log(sumCubes([1, 2])); // 9
  console.log(sumCubes([1, 2, 3])); // 36
  console.log(sumCubes([5, 3, 3])); // => 179
  console.log(sumCubes([])); // => 0

// Write a function factorial that accepts a number and returns the factorial of that number.

const factorial = function (number) {
    if(number===0){
        return 1;
    }
    else {
        return number * factorial(number-1);          
    }
};
console.log("factorial for numbers");

  console.log(factorial(5)); // 1 * 2 * 3 * 4 * 5 => 120
  console.log(factorial(3)); // 1 * 2 * 3 => 6
  console.log(factorial(1)); // => 1
  console.log(factorial(0)); // => 1


// Write a function getLength that accepts a string, and returns the length of the string.

const getLength = function (string) {

    if(!string.length){
        return 0;
     }
    return 1  + getLength(string.slice(1));
         
};
  console.log("lenght of characters")
  console.log(getLength("hello")); // => 5
  console.log(getLength("John")); // => 4
  console.log(getLength("")); // => 0
  

// Write a function countCharacter that accepts a string, and a character 
//and returns the number of times the character was repeated, using recursion


const countCharacter = function (string, character) {
    if(string.length==0){
        return 0;
    }
    else if (string[0]===character){
        
       return 1 + countCharacter(string.slice(1),character);
    }
    else {
        return countCharacter(string.slice(1),character);
    }
    
};
console.log("count characters in string");
console.log(countCharacter("hello", "l")); // => 2
console.log(countCharacter("hello", "e")); // => 1
console.log(countCharacter("hello", "z")); // => 0



//Write a function oddOrEven that accepts a 
//number and returns a string The number is even or The number 
//is odd depending on whither the number is odd or even, do not use modulo operator %.

const oddOrEven = function (number) {
    
    
    if (number === 0 ) 
    {
         return  'the number is even'
    } 
    else if (number === 1 ) {
         return  'the number is odd'
    } 
    return oddOrEven(number-2)
};
console.log("Check if number is even or odd");
    console.log(oddOrEven(7)); // => The number is even
    console.log(oddOrEven(8)); // => The number is odd
    
    //Write a function maximumNumber 
    //that accepts an array of numbers and returns the max number in the array.

    const maximumNumber = function (numbers) {
        new_arr = numbers.slice();

        
        if (new_arr.length == 1) 
        { 
            return new_arr[0]; 
        }
    
        if (new_arr[0] < new_arr[1]) 
        { 
            new_arr.splice(0,1); 
        }
        else 
        {
             new_arr.splice(1,1); 
        }
    
        return maximumNumber(new_arr);
        };
      console.log("find maximum number in array");
      console.log(maximumNumber([0, 5, 2, 10, 8, 6])); // => 10
      


      const multiply = function (numberOne, numberTwo) {
        if(numberTwo==0){
            return 0;
        }
        return numberOne + multiply(numberOne,numberTwo-1);
    };
      
      console.log(multiply(2, 3)); // => 6
      console.log(multiply(4, 5)); // => 20


      //Write a function familyTree that accepts an object representing a family tree 
      //and returns a string containing all names in the tree from the top to bottom.

      const family = {
        name: "John",
        child: {
          name: "Bill",
          child: {
            name: "Mark",
            child: {
              name: "Terry",
              child: null,
            },
          },
        },
      };
      
      const familyTree = function (family) {
        let new_family = Object.values(family);
        
        if(family.child==null){
            return family.name;
        }
        
        return new_family[0] +"  "+ familyTree(new_family[1])
      };
      console.log("full name");
      console.log(familyTree(family)); // => "John Bill Mark"



      //Write a function flattenArray that accepts a nested array and returns a one dimensional array.

      const flattenArray = function (array) {
            if (array.flat(2)){
                console.log("hi");
            }
    };
      
      //flattenArray([1, 2, 3, [4, 5, [6, 7]]]); // => [1, 2, 3, 4, 5, 6, 7]
      //flattenArray([[1, 2, [3, 4]]]); // => [1, 2, 3, 4]
      flattenArray([0, 1, [2, 3, 4]]);












       //     if(Array.isArray(array))
        //     {
        //         return flattenArray(array.flat(1));
        //     }
        //   else{
        //       return array;
        //   }
        