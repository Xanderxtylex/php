document.write \
("Hello world!");


var carname = " Volvo ";
document.getElementById("demo").innerHTML = carname;


var pi = 3.14; // If you are familiar with ES6, pi can use the const keyword to indicate a constant // const pi = 3.14; var person = " John Doe " ; var answer = ' Yes I am! ' ;


var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';


typeof "John"   // returns string
typeof 3.14     // returns number
typeof false    // returns boolean
typeof [1, 2, 3, 4]   // returns object
typeof { name: 'John', age: 34 } // returns object


var x; // x is undefined
var x = 5; // now x is a number
var x = "John"; // now x is a string


var x1 = 34.00; //write with decimal point
var x2 = 34; //write without decimal point


var y = 123e5; // 12300000
var z = 123e-5; // 0.00123


var carname = "Volvo XC60";
var carname = 'Volvo XC60';



var cars = ["Saab", "Volvo", "BMW"];


name = person.lastname;
name = person["lastname"];


cars = null;
person = null;


person.lastName;



objectName.methodName


var2 = 2; // without var declaration, global properties can be configured

console.log(this.var1); // 1
console.log(window.var1); // 1
console.log(window.var2); // 2

delete var1; // false cannot delete
console.log(var1); //1

delete var2;
console.log(delete var2); // true
console.log(var2); // deleted error variable undefined



function myFunction(a, b) {
    if (a > b) {
        return;
    } x = a + b
}


function myFunction() {
    var x = 5;
    return x;
}



function myFunction(a, b) {
    return a * b;
} document.getElementById(" demo ").innerHTML = myFunction(4, 3);



function myFunction(a, b) { if (a > b) { return; } x = a + b }


// The carName variable cannot be called here
function myFunction() {
    var carName = " Volvo ";
    // The carName variable can be called in the function  
}


var carName = " Volvo ";
// The carName variable can be called here 
function myFunction() {
    // The carName variable can be called in the function
}


// The carName variable can be called here
function myFunction() {
    carName = "Volvo";
    // The carName variable can be called here
}


//window.carName can be used here
function myFunction() {
    carName = " Volvo ";
}


if (condition) {
    code to execute when condition is true
}
else { code to execute when condition is not true
}


switch (n) {
    case 1: execute code block 1 break;
    case 2: execute code block 2 break;
    default: code not executed at the same time
 as case 1 and case 2 }


var d = new Date().getDay();
switch (d) {
    case 0: x = " Today is Sunday ";
        break;
    case 1: x = " Today is Monday ";
        break;
    case 2: x = " Today is Tuesday ";
        break;
    case 3: x =

        " Today is Wednesday ";
        break;
    case 4: x = " Today is Thursday ";
        break;
    case 5: x = " Today is Friday ";
        break;
    case 6: x = " Today is Saturday ";
        break;
}



var d = new Date().getDay();
switch (d) {
    case 6: x = " Today is Saturday ";
        break;
    case 0: x = " Today is Sunday ";
        break;
    default:
        x = " Expect the weekend ";
} document.getElementById(" demo ").innerHTML = x;

document.write(cars[0] + "<br>");
document.write(cars[1] + "<br>");
document.write(cars[2] + "<br>");
document.write(cars[3] + "<br>");
document.write(cars[4] + "<br>");
document.write(cars[5] + "<br>");


for (var i = 0; i < cars.length; i++) { document.write(cars[i] + "<br>"); }



for (var i = 0; i < 5; i++) { x = x + " The number is " + i + " <br> "; }



for (var i = 0, len = cars.length; i < len; i++) { document.write(cars[i] + "<br>"); }



var i = 2, len = cars.length; for (; i < len; i++) { document.write(cars[i] + "<br>"); }


var person = { fname: " Bill ", lname: " Gates ", age: 56 }; for (x in person) // x is the property name { txt=txt + person[x]; }


    var i = 0, len = cars.length; for (; i < len;) { document.write(cars[i] + "<br>"); i++; }


while (i < 5) { x = x + " The number is " + i + " <br> "; i++; }



do { x = x + " The number is " + i + " <br> "; i++; } while (i < 5);


cars = [" BMW ", " Volvo ", " Saab ", " Ford "]; var i = 0; for (; cars[i];) { document.write(cars[i] + " <br> "); i++; }



cars = [" BMW ", " Volvo ", " Saab ", " Ford "]; var i = 0; while (cars[i]) { document.write(cars[i] + " <br> "); i++; }



for (i = 0; i < 10; i++) { if (i == 3) { break; } x = x + " The number is " + i + " <br> "; }


for (i = 0; i < 10; i++) { if (i == 3) break; x = x + " The number is " + i + " <br> "; }


for (i = 0; i <= 10; i++) { if (i == 3) continue; x = x + " The number is " + i + " <br> "; }



while (i < 10) {
    if (i == 3) {
        i++;     // Adding i++ will not enter an infinite loop 
        continue;
    } x = x + " The number is " + i + " <br> ";
    i++;
}


cars = [" BMW ", " Volvo ", " Saab ", " Ford "];
list:
{
    document.write(cars[0] + " <br> ");
    document.write(cars[1] + " < br> ");
    document.write(
        cars[2] + " <br> ");
    break list;
    document.write(cars[3] + " <br> ");
    document.write(cars[4] + " <br> ");
    document.write(cars[5] + " <br> ");
}


cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
    document.write(cars[0] + "");
    document.write(cars[1] + "");
    document.write(cars[2] + ""); break list;
    document.write(
        cars[3] + "");
    document.write(cars[4] + "");
    document.write(cars[5] + "");
}




outerloop: for (var i = 0; i < 10; i++) {
    innerloop: for (var j = 0; j < 10; j++) {
        if (j > 3) { break; } if (i = = 2) { break innerloop; }
        if (i == 4) { break outerloop; }
        document.write("i=" + i + " j=" + j + "");
    }
}




for (var i = 0; i < 10; ++i) { continue list; }

{
    "sites" : [
        { "name": "Coding180", "url": " www.coding180.com" },
        { "name": "Google", "url": "www.google.com" },
        { "name": "Gasper", "url": "www.gasper.com" }
    ]
}



"sites" : [
    { "name": "Coding180 ", "url": "www.coding180.com" },
    { "name": "Google", "url": "www.google.com" },
    { "name": "Telenor", "url": "www.telenor.com" }]


var text = ' { "sites" : [ ' +
    ' { "name":"coding180" , "url":"www.Coding180.com" }, ' +
    ' { "name":"Google" , "url" :"www.google.com" }, ' +
    ' { "name":"Telenor" , "url":"www.telenor.com" } ]} ';

obj = JSON.parse(text);
document.getElementById(" demo ").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;


{ "name": "coding180", "url": "www.coding180.com" }



var text = ' { "sites" : [ ' +
    ' { "name":"Runoob" , "url":"www.runoob.com" }, ' +
    ' { "name":"Google" , "url" :"www.google.com" }, ' +
    ' { "name":"Taobao" , "url":"www.taobao.com" } ]} ';

obj = JSON.parse(text);
document.getElementById(" demo ").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;



var text = ' {"sites" : [ ' +
    ' {"name":"Runoob" , "url":"www.runoob.com" }, ' +
    ' { "name":"Google" , "url" :"www.google.com" }, ' +
    ' { "name":"Taobao" , "url":"www.taobao.com" } ]} ';


var obj = { a: 'Hello', b: 'World' };
 //This is a js object, note that the key name of the js object can also be wrapped in quotation marks, the key name here is not enclosed in quotation marksobj
  = { a: 'Hello', b : 'World' };
//This is a js object, note that the key name of the js object can also be wrapped in quotation marks, the key name here is not enclosed in quotation marks   
var json = '{"a": "Hello", "b": "World"}';
//This is a JSON string, essentially a stringvar json 
= '{"a": "Hello", "b": "World"}';
//This is a JSON string, essentially a string  



var obj = JSON.parse('{"a": "Hello", "b": "World"}');
//result is {a: 'Hello', b: 'World'} an object


var json = JSON.stringify({ a: 'Hello', b: 'World' });
//The result is '{"a": "Hello", "b": "World"}' a character in JSON format string




var carName = " Volvo ";
// The carName variable can be used here 
function myFunction() { // The carName variable can also be used here  
}


{ var x = 2; }
// the x variable can be used here


var i = 5;
for (var i = 0; i < 10; i++) {// some code...
}
// here the output i is 10


// use var
function myFunction() {
    var carName = "Volvo"; // local scope
}
// use let
function myFunction() {
    let carName = "Volvo"; // local scope
}


// use var
var x = 2; // global scope
// use let
let x = 2; // global scope


var carName = " Volvo ";
// The variable can be accessed using window.carName


x = 5; 
// variable x is set to 5
elem = document.getElementById("demo");
// find element elem.innerHTML = x;
// display x in element var x; // declare x


var x; // declare x
x = 5; // variable x is set to 5
elem = document.getElementById("demo"); // find element
elem.innerHTML = x; // display x in element


var x = 5; // initialize x
elem = document.getElementById("demo"); // find element
elem.innerHTML = x + " " + y; // display x and y 
var y = 7 ; // initialize y



var x = 5; // initialize x 
var y ; // declare y  
elem = document.getElementById("demo"); // find element 
elem.innerHTML = x + " " + y; // display x and y              
y = 7; // set y to 7    



function validateForm() {
    var x = document.forms[" myForm "][" fname "].value;
    if (x == null || x == " ") {
        alert(" A name is required. ");
        return false;
    }
}  


<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
    名字: <input type="text" name="fname">
        <input type="submit" value="提交">
        </form>


        <form action="demo_form.php" method="post">
            <input type="text" name="fname" required="required">
                <input type="submit" value="提交">
                </form>