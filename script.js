//ccreating variable to store my name,age, and nationality,
let name = "MAOL BARIVULE BARIFAA"
let age =  "23"
let nationality = "Nigerian"

//combining them into  sentence that introduce me
let introduction = "my name is ${MAOL BARIVULE BARIFAA},I am ${23} years old, and my nationality is ${Ngerian},"

console.log(introduction);

//a varible with my favourite quote
let favouriteQuote = " when the valuable is not available ,the available becomes the valuable"
console.log(favouriteQuote)
//coverting the quote to upper case
let uppercaseQuote = "favouriteQuote.topUpperCase()"
console.log(favouriteQuote.toLocaleUpperCase())

//converting the quote to lowercase
console.log(favouriteQuote.toLowerCase())

//Number3 taking the word Barivule 
let word = "Barivule"

//reverse the word
let characters = word.split("Barivule")


let reverseCharacters = characters.reverse("barivule")
let reversedWord = reverseCharacters.join("eluviraB")

console.log("Reversed word: " + reversedWord)

//Number4; store the price of 3 items in 3 different variables and display them
const apple = 400
const egg = 600
const shoe = 300

const answer = apple + egg + shoe

console.log(answer)


//number5; fined the average of 5 test scores stored in variables.calculate the total and display it with  message.

// test score
let score1 = 85
let score2 = 34
let score3 = 20
let score4 = 12
let score5 = 42

//calculate the total 
let total = score1 + score2 + score3 + score4 + score5

//calculate average
let average = total /5

// display the total and average

console.log("total: " +total)
console.log("average: " + average)

//number6 array of my 5 favourite different foods.

let foods = ["rice", "beans","bread", "eba", "pap" ]

//displaying the first item
console.log("first food: " +foods[0] )

//display the last item
console.log("last food: " + foods[foods.length - 1])

//Number7 add semo at the beginning 
foods.unshift("semo")

//add amala at the end
foods.push("amala")

//display the updated array 
console.log("first food:" + foods[0])

console.log("last food:" + foods[foods.length - 1])