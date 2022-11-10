class tweet {
  name: "Opodo";
  id: 1;
  content: "Hello guys";
  timeoftweet: "2 Nov,2022";
  likes: 10455;
  comments: [
    {
      name: Ronaldo,
      id: 2,
      content: "Nice picture",
      timeofstamp: "2 Nov, 2022",
    },
    {
      name: Messy,
      id: 3,
      content: "Good",
      timeofstamp: "2 Nov, 2022",
    },
    {
      name: Polo,
      id: 4,
      content: "Cool",
      timeofstamp: "2 Nov, 2022",
    }
  ];

  tweetPost(post) {
    console.log("Post tweeted");
  }
  retweetPost() {
    console.log("Post retweeted");
  }
  likePost() {
    console.log("Post liked");
  }
}
