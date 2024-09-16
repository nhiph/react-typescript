/** @format */

{/* prettier-ignore */}

/*
@ How to install typescript?: 
++ - For installing the typescript we need a compiler which we can install it globally on our system this commands:
1 - npm install -g typescript
2 - npx tsc
! Source Link : https://www.typescriptlang.org/ and download the typescript

@ Compiling the typescript file:
- In the typescript project we can compile the typescript file to a javascript file by using this command:
@ npx tsc .\fileName

@ Difference between typescript code and javascript code:
++ javascript code:
- Runs in the browser
- Has no extra-type-safety features built-in -> Not ideal for development

function add(a , b){
  return a + b;
}

++ typescript code:
- Does not run in the browser
- Great for development as it adds extra type-safety & catches potential errors

function add (a:number , b : number){
  return a + b;
}

@ Types in typescript:
++ number
++ string
++ any 
++ boolean
++ object
++ {} :
- in this way of setting the type we can set the name and type of each property 
! Example:
let user = {
  name : string;
  age : number;
  isAdmin : boolean;
  id : number | string;
}
user = {
  name : "Sina",
  age : 20,
  isAdmin : true,
  id : 123,
}
++ Array<type>:
- In this type we have a array and in the <> we write the type of the values of the array
++ type[]:
- Also we can write the Array<type> like this (These two are similar)
++ undefined :
- We can use this type for the functions that doesnt return anything
++ void:
- Also we can use this type for the functions that doesnt return anything

@ How to write functions in TS:
function functionName(parameter1: type, paremeter2: type): return type of the function {
  commands
}

@ How to expect a function to receive a function?:
- In functions we can pass in another function as a parameter 
! BUT CAN WE PASS IT LIKE THIS ? :
function calculate(a:number,b:number,calcFn){
  calcFn(a,b);
}
++ The answer is no we cant do this instead we set the type of the function that we pass. Look at this example:
function add(a:number,b:number){
  const result = a + b;
  return result;
}
function calculate( a:number ,b:number,calcFn(a:number,b:number)=> number){
  calcFn(a,b);
}
calculate(5,4,add);

@ How to make custom types:
- For example in the senario above we want the function to have its own type and every function with the similar type to it have a type name 
++ So we do this:
@ Using the "type" keyword we can make custom types :

type AddFn = (a : number , b: number) => number;
function calculate(a:number,b:number,calcFn:AddFn){
  calcFn(a,b);
}

++ String or Number custom type:
type StringOrNum = string | number;

++ Object custom type:
type User = {
  name : string;
  age : number;
  isAdmin : boolean;
  id : stringOrNum;
}
let user = User;

@ Another way of writing custom types for objects:
++ Using the "interface" keyword:
interface Credentials {
  password : string;
  email : string;
}

let creds = Credentials;

creds = {
  password: "abc",
  email : "sina@gmail.com",
}
!HINT: Custom type must start with a upperCase letter

@ When to use "interface" and when to use "type"?:
++ - "type" can be used everywhere but "interface" is limited to just objects

++ - We can implment classes to the interface type

class AuthCredentials implements Credentials{
  email : string;
  password: string;
  username : string;
}
! The syntax above for when we want a class to use a custom type so we use the "implements" keyword in here

function login(credentials : Credentials){}
login(new AuthCredentials())

++ "interface" is extendable (We can use it so many times with different values)

@ Merging types:
- Maybe one day we need to merge two or more types together so we can use the "&" operator:
++ Example:
type AppUser = {
  username : string;
}
type Admin = {
  permission : string[];
}
type AppAdmin = Admin & AppUser;

let admin : AppAdmin;
admin = {
  permission: ["login"],
  username : "sina",
}

! We can do the same with interface keyword (But with different keyword):
interface Admin {
  permission : string[];
}

interface AppUser{
  username : string;
}

interface AppAdmin extends Admin, AppUser{}

@ More tips about the types:
- Imagine that we want to store only one value that we chose for a variable so we can do this:

@ let role : "admin";
@ role = "admin" 
role "user";
role = "editor"
role = "abc"

! Now the other values are wrong (We can use | too and set the other values for the variable too)


@ Generic types:
- Types that work together with another type

++ Example:
type Role = "admin" | "user" | "editor";
let roles : Array<Role>
roles = ['admin','editor'];

@ We can create our own generic type:
++ Example:
type DataStorage<T> = {
  storage : T[];
  add : (data : T) => void; 
};
!HINT: T in here is just a placeholder

const textStorage : DataStorage<string> = {
  storage : [],
  add(data) {
    this.storage.push(data);
  } 
}
! In here we pass the string type to the custom generic type that we create earlier 
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: StringOrNum;
};

const userStorage : DataStorage<User> = {
  storage : [],
  add(user){},
};
! User is a custom type that we create earlier 

@ We can also create functions using generic types:
++ Example:
function merge<T,U>(a : T , b : U){
  return {
    ...a,
    ...b,
  };
}
@ Now we can pass in the parameters of the function like this:
const newUser = merge<{name : string} , {age : number}>({name : "Max"},{age : 20});
@ Or we can do it like this:
const newUser = merge({name: "Max"}, {age : 20});
++ In here the typescript can detect the type of the data passed to the function itself and its no need to pass in the type of it

*/