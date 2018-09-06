/*
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

//Object create
const personProto = {
    calculateAge: function(){
        console.log(2018 - yearOfBirth);
    }
};

let john = Object.create(personProto, {
    name: { value: 'John Wick'},
    yearOfBirth: { value: 1985},
    job: { value: 'Assassin'}
});


//Primitivos vs Objetos

let a = 23;                 
let b = a;                      
                                
a = 46;                    
                  
console.log(a); // 23         
console.log(b); // 46                       
                            
                             
let obj1 = {
    name: 'John',
    age: 26
}

obj1.age = 30;
let obj2 = obj1;

console.log(obj1.age);  // 30
console.log(obj2.age);  // 30

//Funções
let age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisboa'
};

function change(a, b){
    a = 30;
    b.city = 'Salvador;'
}

change(age, obj);

console.log(age);      // 27
console.log(obj.city); // Salvador


//Funções que retornam funções

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(`${name}, can you please explain what UX design is?`);
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log(`What subject do you teach, ${name}?`);
        }
    } else{
        return function(name){
            console.log(`What do you do, ${name}?`);
        }
    }
}

let interviewDesigner = interviewQuestion('design');
interviewDesigner('Mark');

let interviewTeacher = interviewQuestion('teacher');
interviewTeacher;
interviewTeacher('Verônica');

interviewQuestion('programador')('Sérgio');


//IIFE

(function (goodLuck){
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


//Closures
function retirement(retirementAge){
    var a = ` year left until retirement.`;
    return function(yearOfBirth){
        let age = 2018 - yearOfBirth;
        console.log(`${retirementAge - age}${a}`);
    }
}

let retirementBR = retirement(65);
retirementBR(1993);

let retirementIceLand = retirement(67);
retirementIceLand(1993);

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(`${name}, can you please explain what UX design is?`);
        } else if(job === 'teacher'){
            console.log(`What subject do you teach, ${name}?`);
        } else{
            console.log(`What do you do, ${name}?`);
        }
    }
}



/////////////////////////////
// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such 
as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private 
and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
(function (){
    
    function numeroAleatorio(){
        return Math.floor(Math.random() * 10);
    }

    function mostrarQuestao(perguntas){
        let perguntaSelecionada = perguntas[numeroAleatorio()];
        console.log(`${perguntaSelecionada.body}`);
        for(let i=0; i < perguntaSelecionada.alternatives.length; i++){
            console.log(`${i}. ${perguntaSelecionada.alternatives[i]}`);
        }
        let resposta = pegaResposta();
        console.log(verificaResposta(resposta, perguntaSelecionada));
    }

    function verificaResposta(resposta, perguntaSelecionada){
        return resposta === perguntaSelecionada.correct ? 'Resposta certa :)' : 'Resposta errada :(';
    }

    function pegaResposta(){
        return parseInt(prompt('Qual sua resposta?'));
    }

    let Question = function(body,alternatives, correct){
        this.body = body;
        this.alternatives = alternatives;
        this.correct = correct;
    }

    let questao01 = new Question(
        'Qual é a capital da Austrália?',
        ['Melbourne', 'Sydney', 'Camberra', 'Adelaide'],
        2
    );

    let questao02 = new Question(
        'Qual é a capital da China?',
        ['Pequim', 'Xangai', 'Shenzhen', 'Hong Kong'],
        0
    );

    let questao03 = new Question(
        'Qual é a capital da Canadá?',
        ['Ottawa', 'Toronto', 'Montreal', 'Edmonton'],
        0
    );

    let questao04 = new Question(
        'Qual é a capital da Bélgica?',
        ['Antuérpia', 'Bruxelas', 'Bruges', 'Gante'],
        1
    );

    let questao05 = new Question(
        'Qual é a capital da Bélgica?',
        ['Bangkok', 'Chiang Mai', 'Phuket', 'Lampang'],
        0
    );

    let questao06 = new Question(
        'Qual é a capital da Suíça?',
        ['Berna', 'Zurique', 'Genebra', 'Basileia'],
        0
    );

    let questao07 = new Question(
        'Qual é a capital da Turquia?',
        ['Bursa', 'Istambul', 'Antália', 'Ancara'],
        3
    );

    let questao08 = new Question(
        'Qual é a capital da Marrocos?',
        ['Casablanca', 'Marraquexe', 'Rabat', 'Fez'],
        2
    );

    let questao09 = new Question(
        'Qual é a capital da Marrocos?',
        ['Cusco', 'Lima', 'Quito', 'Arequipa'],
        1
    );

    let questao10 = new Question(
        'Qual é a capital da Quênia?',
        ['Mombasa', 'Mogadíscio', 'Nakuru', 'Nairóbi'],
        3
    );

    const perguntas = [questao01, questao02, questao03, questao04, questao05, questao06, questao07, questao08, questao09, questao10];

    mostrarQuestao(perguntas);
})();


