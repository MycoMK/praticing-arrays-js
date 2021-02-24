// console.log("connected")
 
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof isCool);


//      Array - valiable that can hold mulitple values

const fruits = [ 'apples','oranges', 'pears']
fruits[3]= 'grapes'
fruits.push('mangos')
console.log(fruits);


const todo = [{
 id:1,
 text:'Meeting with Boss',
 isCompeted: true
},

{
 id:2,
 text:'Meeting with John',
 isCompeted: true
},

{
 id:3,
 text:'Meeting with Casandra',
 isCompeted: false
}
];

console.log(todo[2].text);

for (let index = 0; index < todo.length; index++) {
 console.log(todo[index].text)
 
}