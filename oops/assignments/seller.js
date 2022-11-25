class seller {
  //properties
  name = "";
  id = "";
  address;
  mobile;
  email;
}
constructor(_name, _id, _address, _mobile, _email), //parameter
  {
    this: (name = _name),
    this: (id = _id),
    this: (address = _address),
    this: (mobilePhone = _mobile),
    this: (email = _email),
  };

sendEmail(email);
{
  console.log("Email was sent");
}
placeorder();
{
  console.log("Order placed");
}
seeProduct();
{
  console.log("Browsing through products");
}

var seller1 = new seller(
  "Ronaldo",
  2,
  "Portugal",
  6783542122,
  "seller@gmail.com"
);
var seller2 = new seller("Messy", 3, "Italy", 3457291843, "seller2@gmail.com");
