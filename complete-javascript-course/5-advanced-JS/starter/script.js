
let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    calculateAge = () => 2018 - yearOfBirth;  
}

Person.prototype.bounty = 100000;

let john = new Person('John Wick', 1985, 'Assassin');
let lara = new Person('Lara Croft', 1992, 'Explorer');
let naruto = new Person('Uzumaki Naruto', 1997, 'Ninja');

john.bounty; //100000
lara.bounty; //100000
naruto.bounty; //100000