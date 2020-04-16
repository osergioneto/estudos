#! /usr/bin/env node
const axios = require("axios");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.prompt();
readline.on('line', async line => {
    switch(line.trim()) {
        case "list vegan foods": 
            {
              const { data } = await axios.get("http://localhost:3000/foods");
              function* listVeganFoods() {
                let idx = 0;
                const veganOnly = data.filter(food => {
                  return food.dietary_preferences.includes("vegan");
                });
                while(veganOnly[idx]) {
                  yield veganOnly[idx];
                  idx++;
                }
              } 
                for (const val of listVeganFoods()) {
                  console.log(val.name);
                }
                readline.prompt();
            }
            break;
        case "log":
            {
              const { data } = await axios.get("http://localhost:3000/foods");
              const it = data[Symbol.iterator]();
              let actionIt;

              function* actionGenerator() {
                const food = yield;
                const servingSize = yield askForServingSize(); 
                yield displayCalories(servingSize, food);
              }

              function askForServingSize(food) {
                readline.question(`How many servings did you eat? (as a decimal: 1, 0.25, 1.25, etc...)`, servingSize => {
                  if (servingSize === "nevermind") {
                    actionIt.return();
                  } else {
                    actionIt.next(servingSize);
                  }
                });
              }

              async function displayCalories(servingSize, food) {
                const calories = food.calories;
                console.log(`
                  ${
                    food.name
                  } with a serving size of ${servingSize} has a ${Number.parseFloat(
                    calories * parseInt(servingSize, 10),
                  ).toFixed()} calories. `
                );
                const { data } = await axios.get("http://localhost:3000/users/1");
                const usersLog = data.log || [];
                const putBody = {
                  ...data,
                  log: [
                    ...usersLog,
                    {
                      [Date.now()]: {
                        food: food.name,
                        servingSize,
                        calories: Number.parseFloat(
                          calories * parseInt(servingSize, 10)
                        )
                      }
                    }
                  ]
                }
                await axios.put("http://localhost:3000/users/1", putBody, {
                  headers: {
                    "Content-Type":"application/json"
                  }
                });
                
                actionIt.next();
                readline.prompt();
              }

              readline.question(`What would you like to log today? `,  async item => {
                    let position = it.next();
                    while(!position.done) {
                        const food = position.value.name;
                        if (food === item) {
                            console.log(`${item} has ${position.value.calories} calories`);
                            actionIt = actionGenerator();
                            actionIt.next();
                            actionIt.next(position.value);
                        }
                        position = it.next();
                    }
                    console.log(item);
                    readline.prompt();
                });
            }
    }
});

