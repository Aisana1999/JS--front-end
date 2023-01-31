class Customer{
//Properties/Attributes of a Customer
name="";
id;
adress;
mobilePhone;
email;


constructor (_name,_id,_adress,_phone,_email){
    this.name=_name;
    this.id=_id;
    this.adress=_adress;
    this.mobilePhone=_mobilePhone;
    this.email=_email;
}
//Methods.=> Operations/Functions.
addItemToCart(item){
    console.log("Added item to cart");
}
placeOrder(){
    console.log("Order Placed")
}
payForOrder(){
    console.log("Payment done");
}
seeProduct(){
    console.log("Browsing through products");
}
}
var customer1=new Customer("John Doe",1,"NYC",363946002,"john.doe@gmail.com");
console.log(customer1.email);

var customer2=new Customer ("Customer 2",2,"Vienna", 4582900273,"customer1@gmail.com");
console.log(customer2.email);

class GoldCustomer extends Customer{
    gold Service;
     constructor (_goldService,_name,_id,_adress,_phone,_email){
     super(_name,_id,_adress,_phone,_email)
    this.goldService=_goldService;   
    }

    //overriding method
    payForOrder({
        console.log("Paying 20% less on total value.");
    })
    super.payForOrder();
}
class PlatinumCustomer extends Customer{
    platinum Service;
}
var gold Customer1=new GoldCustomer("20% Discount","GoldCustomer",3,"Bishkek",98746649,"customer.gold@gmail.com")
console.log(goldCustomer1.name);
console.log(goldCustomer1.goldService);
