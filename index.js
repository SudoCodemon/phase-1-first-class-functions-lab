// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(array) {
    const newArray = array.slice(0,2);
    return newArray;
}

function returnLastTwoDrivers(array) {
    const newArray = array.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    if (x === 5) {
        return num => num * 5;
    } else if (x === 2) {
        return num => num * 2;
    } else if (x === 3) {
        return num => num * 3;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(a, b) {
    return b(a);
}