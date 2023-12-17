var quoteArray = [
  {
    author: "― Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Bernard M. Baruch",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
  {
    author: "― Mahatma Gandhi",
    quote: "“Be the change that you wish to see in the world.”",
  },
  {
    author: "― Ralph Waldo Emerson",
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  },
  {
    author: "― Narcotics Anonymous",
    quote:
      "“Insanity is doing the same thing, over and over again, but expecting different results.”",
  },
];

var currentIndex = 0;

function getQuote() {
  var newIndex = Math.round(Math.random() * (quoteArray.length - 1));
  while (newIndex === currentIndex) {
    console.log("repeated index");
    newIndex = Math.round(Math.random() * (quoteArray.length - 1));
  }
  console.log(`when return value current index: ${currentIndex}`);
  console.log(`new index: ${newIndex}`);

  currentIndex = newIndex;
  var quoteObject = quoteArray[currentIndex];
  if (typeof quoteObject != "undefined") {
    document.getElementById("quote").innerHTML = quoteObject.quote;
    document.getElementById("author").innerHTML = quoteObject.author;
  }
}
