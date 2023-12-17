function checkSpeed(speed) {
    if (speed < 70) {
        return "Ok";
    }
    let points = Math.floor((speed - 70) / 5);
    if (points > 12) {
        return "License suspended";
    }
    return `Points: ${points}`;
}

console.log(checkSpeed(80)); // "Points: 2"