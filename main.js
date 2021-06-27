let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// use the split method to return back single elements
const storyWords = story.split(' ');
// console.log(storyWords.length);


// 1. filter out words that are unnecessary 
// 2. save the remaining words in a new array/variable
// 3. use the .filter() method



let betterWords = storyWords.filter(function(word){
 return !unnecessaryWords.includes(word)
});

// console.log(betterWords);

// to be able to count and store data (how many times overusedWords were used) you have to create a variable to store that data in

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word  of storyWords){
if (word === "really"){
  reallyCount += 1
} else if (word === "very") {
  veryCount += 1;
} else if (word === "basically") {
  basicallyCount += 1
}

}

// console.log("really count" , reallyCount);

let sentenceCount = 0;

for (word of storyWords) {
  if (word[word.length -1] === "." || word[word.length -1] === "!"){
  sentenceCount += 1
  }
  }


 //logging all my data to the console
 //try to create a function that lets you to log it in one go so youre not repeating code
 
  console.log("Length of story:" , storyWords.length);
  console.log("How many sentences we have throughout the story:" , sentenceCount);
  console.log("How many times 'really' appears:" , reallyCount)
  console.log("How many times 'very' appears:" , veryCount)
  console.log("How many times 'basically' appears:" , basicallyCount)
  
  console.log(betterWords.join(" "));

