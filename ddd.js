class CustomerEntity{
  constructor(customer_id,street,area,district){
    this.customer_id = customer_id;
    this.street = street;
    this.area = area;
    this.district = district
  }
  generate_customer_id(){
    return Math.floor(Math.random()*10000000);
  }
  create(){
    customer = CustomerTable(generate_customer_id(),street,area,district);
    return customer;
  }
}

class AddressValueAttributes{
  constructor(street,area,district,customer_id){
    this.street = street;
    this.area = area;
    this.district = district;
    this.customer_id = customer_id;
  }
  create(customer_id,addresses){
    let saved_address = [];
    for (address in addresses){
      saved_address.push(AddressTable(customer,address));
    }
    return saved_address
  }
}

class CustomerRepository{
  save(data){
    // save data to the repository
    return data;
  }
  
  get(customer_id){
    // search data 
    return data;
  }
}


class AnotherCustomerEntity{
  constructor(customer_id){
    this.customer_id = customer_id;
    this.email = email;
    this.admin = admin ? admin : false;
  }
  generate_customer_id(){
    return Math.floor(Math.random()*10000000);
  }
  
  create(email,is_admin=False) {
      return CustomerTable.save(generate_cutomer_id, email, is_admin)
   }
}

class CustomerServiceParams{
   constructor(email,addresses){
     this.email = email;
     this.addresses = addresses
   }
}

class CustomerService{
  static create(CustomerServiceParams){
    customer = create_customer(CustomerServiceParams.email)
    customer.addresses = create_address(customer_id,CustomerServiceParams.addresses)
    return customer;
  }
  
  create_customer(){
    return CustomerEntity.create();
  }
  
  create_address(customer_id, addresses) {
       return AddressEntity.create(customer_id, addresses)
   }
}


class CreateAdminService{
      static create(CustomerServiceParams) {
       customer = create_customer(CustomerServiceParams.email, True)
       customer.address = create_address(customer_id, CustomerServiceParams.address)
       return customer
   }
  create_customer(){
    return CustomerEntity.create();
  }
  
  create_address(customer_id, addresses) {
       return AddressEntity.create(customer_id, addresses)
   }
}

class Factory{
  createUserObject(email,addresses,is_admin){
    if(is_admin==='true'){
      return new CreateAdminService();
    }
    else{
      return new CustomerService();
    }
  }
}
