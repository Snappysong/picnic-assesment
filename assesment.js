//Determines the plot of land
//Make a matrix to simulate grid of 'plots'
const field = new Array(10).fill(0).map(() => new Array(10).fill(0))

//We can change the field size by altering the starting field variable like so:

//y axis should be put into first new Array param, and x axis can be put into the mapped new Array param
//const field = new Array(Y-axis).fill(0).map(() => new Array(X-axis).fill(0))


//How the rain cloud would generate
//Rain cloud is the size of one plot size
//Use for loops to iterate though field matrix assuming that no plots have been watered already
const iterateRain = (field) => {
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            field[i][j]++
        }
    }
    //iterated through all plots and they have been watered.
    alert("Your field is watered!")    
}

//test that all plots have been watered
const testIterateRain = (field) => {
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] !== 1){
                return false
            }
        }
    }
    return true
}

// if some plots have been rained on already then use this
const someRainedOnAlready = (field) => {
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            //this checks if the plot has been rained on
            if (field[i][j] === 0){
                field[i][j]++
            }
        }
    }
    //iterated through all non watered plots and they have been watered.
    alert("Your field is watered!")    
}

//if we wanted to water the plants 3 drops instead on 1
//takes in field and the number of drops of water wanted as parameters
const multipleDropsOfWater = (field, number) => {
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            while(field[i][j] < number){
                field[i][j]++
            }
        }
    }
    //iterated through all non watered plots and they have been watered.
    alert("Your field is watered!")    
}

const testMultipleDropsOfWater = (field, number) => {
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] !== number){
                return false
            }
        }
    }
    return true
}


//All these are O(n^2) because we are iterating through each element in each array, which is dependent on how long the arrays are.