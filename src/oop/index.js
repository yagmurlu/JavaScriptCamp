class Customer{
    constructor(id,customerNo){
        this.id=id;//sağdaki id asıl id
        this.customerNo=customerNo;
    }
}
let customer=new Customer(1,"1453");
console.log(customer.id)
//prototyping
customer.name="Aleyna"// instance a prototyping yapma
console.log(customer.name)
Customer.bisey="Bir şey"//class a prototyping yapma
console.log(Customer.bisey)

console.log(customer.id+customer.name+customer.customerNo)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNo){
        super(id,customerNo)
        this.firstName=firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNo){
        super(id,customerNo)
        this.companyName=companyName
    }
}
