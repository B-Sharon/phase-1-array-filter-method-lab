//function takes an array of names and a string and returns the matching list that is case-sensitive
function findMatching(drivers, name) {
    return drivers.filter(function (matchList){
        return matchList.toLowerCase() === name.toLowerCase();
    })
}

//returns all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(
      (match) =>
        match.toLowerCase().indexOf(letters.toLowerCase()) === 0 );
    }


//returns the driver whose name matches the provided name
function matchName(drivers,name){
    return drivers.filter((match) => {
        return match.name === name
    })
}