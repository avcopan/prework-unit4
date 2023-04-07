console.log('js');

const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats() {
    console.log('in enoughSeats');
    return seatsInCar >= passengers.length;
}

function getInCar(passengerName) {
    console.log(`in getInCar ${passengerName}`);
    passengers.push(passengerName);
    return passengers;
}

function readyForRoadTrip() {
    console.log('in readyForRoadTrip');
    return enoughSeats() && tankFull;
}

getInCar('You');
getInCar('Commander Wisdom');
getInCar('Anjie');
getInCar('Matt');
getInCar('Jackie');

console.log('Are we ready?', readyForRoadTrip() ? 'Yes': 'No');