var student = {
  id: 1,
  name: "John Doe",
  subject: ["CS", "Math", "psychology"],
  address: {
    buildingNo: 5,
    streetNo: 25,
    City: "NYC",
    Country: "USA",
  },
};

var tweet = {
  id: 1,
  content: "Hello people",
  author: "Elon Musk",
  timeoftweet: "2.Nov,2022",
  likes: 200000,
  comments: [
    {
      id: 2,
      author: "Bill Gates",
      content: "Hello to you too",
      timestamp: "2 Nov,2022",
    },

    {
      id: 3,
      author: "GJ",
      content: "Hello to you too",
      timestamp: "2 Nov,2022",
    },
    {
      id: 8,
      author: "OP",
      content: "Hello to you too",
      timestamp: "2 Nov,2022",
    },
  ],
};
console.log(tweet);
console.log(tweet.comments[1].author);
console.log(tweet.comments.length);

var message = {
  id: 1,
  author: "JD",
  content: "Hello",
  receiverID: 34,
  isThisAGroupMessage: true,
  group: {
    name: Atlas,
    admin: Tobias,
  },
};

var post = {
  id: 5,
  author: "AT",
  content: "news",
  timeofpost: "3.Nov,2022",
  likes: 1500,
  comments: {
    id: 3,
    author: "Sasha",
    content: "Good",
    timestamp: "6 Nov,2022",
  },
};

tweet["no0fRetweets"] = 50;
console.log(tweet);
console.log(object.keys(tweet));
console.log(object.values(tweet));
console.log(object.entries(tweet));
