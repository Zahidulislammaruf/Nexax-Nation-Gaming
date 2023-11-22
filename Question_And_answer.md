# Q1 :
let greeting;
greetign = {};
console.log(greetign);
Answer : A : {}

# Explain : At first Here We Declare a varibale. then we assing a empty object in the variable. So when e Console.log The Variable its Result Show {}. Beacuse in second line assing a empty object

# Q2 : 
function sum(a, b) {
  return a + b;
}

sum(1, "2");

Answer : D : 3

# Explain : first we declare a function name sum and take akes two arguments, a and b. js convert the string "2" to a number and then add together . thats why result is 3

# Q3 : 
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

Answer : A : ['🍕', '🍫', '🥑', '🍔']

# explain : first e declare a array name food, then we declare another array name info. The array is different and they don't affected any other. that's why the result is A.

# Q4 :
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

Answer : B: Hi there, undefined

# explain : here we declare a function name sayHi without passing any arguments.so when a function is called without arguments, Then it return value is undefined. And We Return Hi there default. So That the Answer Is B

# Q5 :
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

Answer : C : 3

# Explain : first we declared a variable count  and initialized to the value 0. and we declare a array name nums and assing value [0, 1, 2, 3]. then we used forEach() method is on nums array.so forEach Method is executed for each element of the array nums.The forEach Method checks if the element is greater than zero. If it is, the count variable is incremented.After the forEach() method has finished executing, the value of the count variable is logged to the console. Thats Why Result is 