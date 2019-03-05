
// This is the users initial set-up for clubs and distances based on the
// users preferred elevation level
let myGolfClubs = {
    driver: 240,
    hybrid: 200,
    twoIron: 190,
    threeIron: 185,
    fourIron: 180,
    fiveIron: 170,
    sixIron: 160,
    sevenIron: 150,
    eightIron: 140,
    nineIron: 130,
    pw:     125,
    gw:     115,
    sw:   95,
    Putter: null  
};
console.log(myGolfClubs);

// this function adjust club max distances based on the difference in 
// in elevation from the base elevation
let currentElevation = 1093
let newElevation = 4000
function clubAdjust(elevation){
    if (newElevation > currentElevation)
    return myGolgclubs + 10;
};
console.log(myGolfClubs)

// this function calculates the new distance based on the wind direction
// and wind speed
// let windDirection = x;
// let windSpeed = z;
// function windDistance(windDirection, windSpeed){
//     if(windDirection = N && windSpeed > 3)
//     return windDistance;
// }
// this function converts the wind from degrees to the direction 
// from which the wind is blowing
function windDirection(degree){
    if ((degree >= 350 && degree <= 360) || 
        (degree >= 0 && degree <= 10))
    return "N"; 
    if (degree >= 20 && degree <= 30)
    return "NNE"; 
    if (degree >= 40 && degree <= 50)
    return "NE" 
    if (degree >= 60 && degree <= 70)
    return "ENE" 
    if (degree >= 80 && degree <= 100)
    return "E" 
    if (degree >= 110 && degree <= 120)
    return "ESE" 
    if (degree >= 130 && degree <= 140)
    return "SE" 
    if (degree >= 150 && degree <= 160)
    return "SSE" 
    if (degree >= 170 && degree <= 190)
    return "S" 
    if (degree >= 200 && degree <= 210)
    return "SSW" 
    if (degree >= 220 && degree <= 230)
    return "SW" 
    if (degree >= 240 && degree <= 250)
    return "WSW" 
    if (degree >= 260 && degree <= 280)
    return "W" 
    if (degree >= 290 && degree <= 300)
    return "WNW" 
    if (degree >= 310 && degree <= 320)
    return "NW" 
    if (degree >= 330 && degree <= 340)
    return "NNW" 
}
console.log(windDirection(300))

// this function selects the appropriate club to use based on the new
// distance
let windDistance = 10
function clubSelector(windDistance){
    if(windDistance >= 5)
    return myGolfClubs + 5
    if(windDistance >= 10)
    return myGolfClubs + 10
    if(windDistance >= 15)
    return myGolfClubs + 15
    if(windDistance >= 20)
    return myGolfClubs + 20
    if(windDistance >= 25)
    return myGolfClubs + 25
    if(windDistance >= 30)
    return myGolfClubs + 30
    if(windDistance >= 35)
    return myGolfClubs + 35
}

