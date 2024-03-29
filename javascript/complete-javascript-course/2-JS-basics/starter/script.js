/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

let pesoMark = prompt('Informe o peso de Mark: ');
let alturaMark = prompt('Informe a altura de Mark: ');
let pesoJohn = prompt('Informe o peso de John: ');
let alturaJohn = prompt('Informe a altura de John: ');

let imcMark = pesoMark / Math.pow(alturaMark, 2);
let imcJohn = pesoJohn / Math.pow(alturaJohn, 2);

let answer = 'Is Mark\'s BMI higher than John\'s? ';

imcMark > imcJohn ? answer+= true : answer+= false;

alert(answer);


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/
function calculaVencedor(valoresTime1, nomeTime1, valoresTime2, nomeTime2, valoresTime3, nomeTime3){
    const reducer = (accumulator, currentValue) => accumulator + currentValue; //Soma todos os valores do Array

    let mediaTime1 = valoresTime1.reduce(reducer) / valoresTime1.length;
    let mediaTime2 = valoresTime2.reduce(reducer) / valoresTime2.length;
    let mediaTime3 = valoresTime3.reduce(reducer) / valoresTime3.length;
    
    let mediaVencedor, nomeVencedor;
    if(mediaTime1 > mediaTime2 && mediaTime1 > mediaVencedor){
        mediaVencedor = mediaTime1;
        nomeVencedor = nomeTime1;
    } else if(mediaTime2 > mediaTime1 && mediaTime2 > mediaTime3) {
        mediaVencedor = mediaTime2;
        nomeVencedor = nomeTime2;
    } else if (mediaTime3 > mediaTime1 && mediaTime3 > mediaTime1) {
        mediaVencedor = mediaTime3;
        nomeVencedor = nomeTime3;
    } else{
        return 'Ocorreu um empate.';
    }

    return `A equipe ${nomeVencedor} é a vencedora, com média pontos de: ${mediaVencedor}`;
}


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

function calcularGorgeta(contas){
    let gorjetas = [], num = 0, porcetagem;;

    for(let i = 0; i < contas.length; i++){   
        if(contas[i] < 50){
            porcetagem = 0.2;
        } else if(contas[i] >= 50 && contas[i] < 200){
            porcetagem = 0.15;
        } else{
            porcetagem = 0.1;
        }
        num = (contas[i] * porcetagem);
        gorjetas.push(parseFloat(num.toFixed(2)));
        contas[i] += gorjetas[i];
    }

    let answer = `Vetor de Gorjetas: ${gorjetas} 
Vetor de Contas Reajustadas: ${contas}`;
    return answer;
} 


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

let mark = {
    name: 'Mark Alan Ruffalo',
    mass: 80,
    height: 1.60,
    bmi: 0,
    calculateBMI: function(){
        this.bmi = this.mass / Math.pow(this.height,2);   
        return this.bmi;
    }
}

let john = {
    name: 'Jonathan Wick',
    mass: 90,
    height: 1.86,
    bmi: 0,
    calculateBMI: function(){
        this.bmi = this.mass / Math.pow(this.height,2);   
        return this.bmi;  
    }
}

function higherBMI(bmi1, bmi2){
    bmi1.calculateBMI();
    bmi2.calculateBMI();

    let highest;

    if(bmi1.bmi > bmi2.bmi){
        highest = bmi1;
    } else if(bmi2.bmi > bmi1.bmi){
        highest = bmi2;
    } else{
        return `Both BMI are equal to ${bmi1.bmi}`;
    }

    return `The higher BMI is ${highest.bmi} from ${highest.name}.`;
}


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill 
is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, 
and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill 
is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, 
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

function calcularGorjetaJohn(contas){
    let gorjetas = [], num = 0, porcetagem;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for(let i = 0; i < contas.length; i++){   
        if(contas[i] < 100){
            porcetagem = 0.2;
        } else if(contas[i] >= 100 && contas[i] < 300){
            porcetagem = 0.1;
        } else{
            porcetagem = 0.25;
        }
        num = (contas[i] * porcetagem);
        gorjetas.push(parseFloat(num.toFixed(2)));
        contas[i] += gorjetas[i];
    }

    return gorjetas.reduce(reducer) / gorjetas.length;
} 

function calcularGorjetaMark(contas){
    let gorjetas = [], num = 0, porcetagem;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for(let i = 0; i < contas.length; i++){   
        if(contas[i] < 50){
            porcetagem = 0.2;
        } else if(contas[i] >= 50 && contas[i] < 200){
            porcetagem = 0.15;
        } else{
            porcetagem = 0.1;
        }
        num = (contas[i] * porcetagem);
        gorjetas.push(parseFloat(num.toFixed(2)));
        contas[i] += gorjetas[i];
    }

    return gorjetas.reduce(reducer) / gorjetas.length;r;
} 

function maiorGorjeta(contasJohn, contasMark){
    let answer = '', maior;

    if(calcularGorjetaJohn(contasJohn) > calcularGorjetaMark(contasMark)){
        answer += 'John' ,
        maiorConta = contasJohn;
    } else if(calcularGorjetaJohn(contasJohn) < calcularGorjetaMark(contasMark)){
        answer += 'Mark' 
        maiorConta = contasMark;
    } else{
        return `As familias pagaram a mesma quantidade.`;
    }
    return `A familia que pagou mais foi a de ${answer}. A conta foi: ${maiorConta}`;
}