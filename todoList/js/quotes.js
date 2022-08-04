const quotes = [
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰"
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스"
  },
  {
    quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드"
  },
  {
    quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임"
  },
  {
    quote: "만족할 줄 아는 사람은 진정한 부자이고, 탐욕스러운 사람은 진실로 가난한 사람이다",
    author: "솔론"
  },
  {
    quote: "곧 위에 비교하면 족하지 못하나, 아래에 비교하면 남음이 있다",
    author: "명심보감"
  },
  {
    quote: "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다",
    author: "루소"
  },
  {
    quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
    author: "베토벤"
  },
  {
    quote: "산다는것 그것은 치열한 전투이다",
    author: "로망로랑"
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료"
  },
  {
    quote: "11111",
    author: "11"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

//console.log(quote);
//console.log(author);

const randomNumber = Math.floor(Math.random() * quotes.length) //배열의 개수만큼 곱해주어 명언을 랜덤하게 받기
//Math.random 에 배열의 개수만큼 곱하면 모든 배열이 랜덤하게 선택되나????

//console.log(quotes[randomNumber]);
//console.log(randomNumber);

const todaysQuote = quotes[randomNumber];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
