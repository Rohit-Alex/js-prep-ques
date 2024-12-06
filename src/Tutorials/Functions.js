/*
    * To create a function we can use a function declaration.
    * This is function declartion/definition 👇
        function fun(parameter1, parameter2) {
            body
        }
    * This is function invocation. 👇
        fun(argument1, argument2)

    * Default parameters are only applied when it has undefined)
*/

function fun() {
  console.log("All my friends are Heathen take it slow");
}

function name(parameter1, parameter2) {
  console.log("----PARAMETERS---" + "\n" + parameter1 + " " + parameter2);
}
const argument1 = "first parameter";
const argument2 = "second parameter";
name(argument1, argument2);

/*
 * Argument name need not be of same name as parameter.
 * The order of arguments has to be in same as we are expecting in parameter.
 * A function can access an outer variable as well
 * The function has full access to the outer variable. It can modify it as well.
 * The outer variable is only used if there’s no local one.
 */

const userName = "That they loved one day";
function showMessage() {
  const message = "Welcome to the room of people, " + userName;
  console.log(message);
}

showMessage();

//Default arguments
function getAmaneSkill(skill = "Loyality") {
  console.log("Amane's skill " + skill);
}

getAmaneSkill();

// Also tell her about the length method on functions

// Function Expressions
const funExp = function () {
  console.log("This is a function expression");
};

funExp();

/*
    <------- Difference between Function Declartion and Function Expression ------>
        i> A Function Expression is created when the execution reaches it and is usable only from that moment.
        i> A Function Declaration can be called earlier than it is defined.

        ii> Function declaration is hoisted.
        ii> Function expression is not hoisted.

        iii> Function declaration is defined with function keyword and must have a name.
        iii> Function expression is like creating an anonymous function and storing it in a variable.
*/

/*
        <---------- Callback functions --------->
        * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.
        * Callback functions are often used in JavaScript to handle asynchronous operations or events.
        * e.g onLoad, onClick, onChange events and setTimeouts, setInterval
        
         todo: Why use Callback?
        * Some of our operations are started only after the preceding ones have completed. 
        Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back. 
        In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. 
        These situations are where callback functions come in handy.
    */

function performOperation(num, callback) {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 12) + 1; // maan le ye api se aa rha
    callback(num, randomNumber); // aur jab api se aa jaaye tabhi ye function call karna hai
  }, 800);
}

function add(num1, num2) {
  console.log(num1 + num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

performOperation(8, add);
performOperation(8, multiply);

/*
        <-------- IIFE --------->
    * Immediately Invoked Function Expressions.
    * Runs as soon as it is defined without being explicitly called.
    * IIFE is often used to create a private scope for the variables and functions defined within it, thus preventing naming conflicts with other code in the global namespace.
    * Hence doesn't pollute global namespace.
*/

(function () {
  // using function definition…
})();

(() => {
  //Using arrow function …
})();

(async () => {
  // Async functionalities can be added here…
})();

/*  
    <--------- Arrow Functions -------->

    * 1> New feature introduced in ES6
    * 2> Provides a shorter syntax for defining functions compared to traditional function expressions.
    * 3> If only one parameter is there then no need of paranthesis as well.
    * 4> Can defined a function without the need of "function" keyword.
    * 5> Can return a value without "return" keyword and curly braces. Provided function content is 1 line.
    * 6> Arrow functions have a lexical scoping, which means that they use the value of variables from the enclosing scope where they are defined, 
        not where they are executed.
*/

function normalFun(name) {
  return console.log(`Hello ${name}`);
}

const arrowFun1 = (name) => console.log(`Hello ${name}`);

normalFun("nammoni");
arrowFun1("Ubuyashiki");

// Now simplify it to one line and show paranthesis removal.
const returnNumber = () => 2;
const returnString = () => "String value";
const returnBoolean = () => false;
const returnArray = () => [1, "0", 6];
const returnObj = () => ({ obj: "value" });

/*
    Length of a function

    i> The number of parameters present in a function.
    ii> Default parameters aren't considered.
    iii> All parameters from the first default parameters aren't considered

    In Brief, function.length is the number of parameters before the first one with a default value.

    Examples:
*/
const func1 = (name) => {};
const func2 = (name = "default") => {};
const func3 = (name, age = 20) => {};
const func4 = (name, age = 20, gender) => {};
console.log(func1.length); // 1
console.log(func2.length); // 0
console.log(func3.length); // 1
console.log(func4.length); // 1
