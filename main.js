

// primitive values - single values 
let number = 5 //cannot re-declare variable once declared, BUT we can re-assign
let number2 = 5
let bool = true
let string = "sup"
// declaration - let number = 5
// assignment = number += 5

let obj = { name: "utah utes" }
let obj2 = { name: "utah utes" }
// console.log(obj);
obj == obj
let arr = ['utah utes', 'pac-12 champions']
function isChampion() {
  return true
}

// math operators

number++
number + 5 //javascipt will do the math, but wont remember it
// reassignment here
number = number + 5
number--
number -= 5
number *= 3
number /= 5
number %= 2

console.log('fun with number', number)

// comparison operators
number >= 5 //not to be confused with the lambda operator =>
number <= 5
number < 5
number == 5
number === 5
number !== 5 //! or bang means NOT equal

// bool comparisons
bool == true
bool !== true

// console.log(bool !== true)

// comparison statements
console.log(5 == '5')
console.log(5 == 5 && 5 === 5) //both sides of the && have to be true for the whole statement to be true
console.log(5 == 5 || 5 == 'monkey') //only one side of the || needs to be true for the whole statement to be true

// string operators
string += 5
string += 'dawgs' //string concatenation
let string2 = 'Saudi Arabian Champs'
let string3 = `${string2} - Red Bull` //string interpolation 

console.log('fun with strings', string3)

// truthiness - if bool is true, run code
console.log('pre bool flipp', bool);
// long way
// if (bool) {
//   bool = false
// } else {
//   bool = true
// }

// bool = bool ? false : true //ternary - ? is the evalutation : is the else portion
bool = !bool
console.log('post bool flipp', bool);

let dictionary = {
  cow: '<img src="./assets/cow.jpg" class="img-fluid" alt="">',
  duck: '<img src="./assets/oregonduck.jpg" class="img-fluid" alt="">',
  sheep: '<img src="./assets/sheep.jpg" class="img-fluid" alt="">',
}

// a function parameters is a variable that the function takes in when defined
function cow() {
  // NOTE code small miss small
  let animalElem = document.getElementById('animal')
  let saysElem = document.getElementById('says')
  let animalImg = document.getElementById('animal-image')
  console.log(animalElem, saysElem, animalImg);
  animalElem.innerText = "cow"
  saysElem.innerText = "ICKYICKYBUSEIHNSDFSEIHRFIOSDNFOSL"
  animalImg.innerHTML = dictionary["cow"]
}

// animal and sound are 'banana' words - but we want to name them contextually to what the function is doing
function talkingAnimal(animal, sound) {
  animalFeed++
  document.getElementById('animal').innerText = animal
  document.getElementById('says').innerText = sound
  document.getElementById('animal-image').innerHTML = dictionary[animal]
}
