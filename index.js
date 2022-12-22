const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


 
function titleCased() {

  let newArray = tutorials.map(function(tutorial) {
   // console.log(tutorial)
   const firstLetters = tutorial
    .split(' ')
    .map(tutorial => tutorial.charAt(0).toUpperCase() + tutorial.substring(1))
    .join(' ')

    return firstLetters
})
return newArray
}

//   let tutorialsUpperCase = tutorials.toUpperCase().substring(0, tutorials.length);
//   let wordArr = tutorialsUpperCase.split(" ").map(function() {
//       return tutorials[0].toUpperCase() + tutorials.substring(1);
//   });

//   return wordArr.join(" ");


