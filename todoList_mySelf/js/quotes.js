const quotes = [{quote:"Learn as if you will live forever, live like you will die tomorrow.", author:"Mahatma Gandhi"}
,{quote:"We cannot solve problems with the kind of thinking we employed when we came up with them.", author:"Albert Einstein"}
,{quote:"You cannot always control what goes on outside. But you can always control what goes on inside.", author:"Wayne Dyer"}
,{quote:"The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else's highlight reel.", author:"Steve Furtick"}
,{quote:"I'm a greateer believer in luck, and I find the harder I work the more I have of it.", author:"Thomas Jefferson"}
,{quote:"The greater the difficulty, the more the glory in surmounting it.", author:"Epicurus"}
,{quote:"The most difficult thing is the decision to act, the rest is merely tenacity.", author:"Amelia Earhart"}
,{quote:"You have got to get up every morning with determination if you are going to go to bed with satisfaction.", author:"George Lorimer"}
,{quote:"The elevator to success is out of order. You will have to use the stairs, one step at a time.", author:"Joe Girard"}
,{quote:"People often say that motivation does not last. Well, neither does bathing - that's why we recommend it daily.", author:"Zig Ziglar"}
]

console.log(quotes.length);

const quoteHTML = document.querySelector("#quote span:first-child");
const authorHTML = document.querySelector("#quote span:last-child");
const randomNum = Math.floor(Math.random() * quotes.length);

quoteHTML.innerText = quotes[randomNum].quote;
authorHTML.innerText = quotes[randomNum].author;
