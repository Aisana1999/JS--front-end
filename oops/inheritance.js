class Gold Customer extends Customer{
    gold Service;
    constructor (_goldService,_name,_id,_address,_phone,_email){
     super(_name,_id,_adress,_phone,_email)
    this.goldService=_goldService;   
    }
}
