/*let person={
    firstname:"shantanu",
    lastname:"shubham",

getFullName: function(){
    return `The name of the person is ${person.firstname} ${person.lastname}`;
},
phoneNumber:{
    mobile: "12345",
    landline:"6789",

},

};
console.log(person.getFullName());
console.log(person.phoneNumber.landline);*/

function person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
let person1=new person("shantanu","shubham");
let person2=new person("Anurag","Mishra");
console.log(person1.firstname);
console.log(`${person2.firstname} ${person2.lastname}`);

