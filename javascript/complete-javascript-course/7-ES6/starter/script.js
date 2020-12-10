function Person(name){
    this.name = name;
}

// ES5

Person.prototype.myFriends5 = 
function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    });

    console.log(arr);
}

var friends = ['Rachel', 'Joe', 'Phoebe', 'Chandler', 'Monica', 'Ross'];
new
Person('John').myFriends5(friends);
 
// ES6

Person.prototype.myFriends6 = 
function(friends){

    let arr = friends.map( el => `${this.name} is friends with ${el}.`);

    console.log(arr);
}