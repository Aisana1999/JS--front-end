class Seller {
  //properties
  name = "";
  id = "";
  address;
  mobile;
  email = "";
}
constructor(name, id, address, mobile, email), //parameter
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

var seller1 = new seller("Ronaldo", 2, "Osaka", 6783542122, "seller@gmail.com");
console.log(seller1.email);
var seller2 = new seller("Messy", 3, "Italy", 3457291843, "seller2@gmail.com");
console.log(seller2.email);
