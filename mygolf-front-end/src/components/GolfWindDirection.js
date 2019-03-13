let golfWindDirection = (windDirection, facingDirection)=>{
    console.log(windDirection)
    console.log(facingDirection)
// golf wind type based on northerly wind
if (windDirection === "N" && facingDirection === "N") 
    return "headWind"
if (windDirection === "N" && facingDirection === "E")
    return "crossWindL"
if (windDirection === "N" && facingDirection === "S")
    return "tailWind"
if (windDirection === "N" && facingDirection === "W")
    return "crossWindR"
if (windDirection === "N" && facingDirection === "NE")
    return "quarterWindRHW"
if (windDirection === "N" && facingDirection === "SE")
    return "quarterWindRTW"
if (windDirection === "N" && facingDirection === "SW")
    return "quarterWindLTW"
if (windDirection === "N" && facingDirection === "NW")
    return "quarterWindLHW"

// golf wind type based on north easterly wind
if (windDirection === "NE" && facingDirection === "N") 
    return "quarterWindRHW"
if (windDirection === "NE" && facingDirection === "E")
    return "quarterWindLHW"
if (windDirection === "NE" && facingDirection === "S")
    return "quarterWindLTW"
if (windDirection === "NE" && facingDirection === "W")
    return "quarterWindRTW"
if (windDirection === "NE" && facingDirection === "NE")
    return "headWind"
if (windDirection === "NE" && facingDirection === "SE")
    return "crossWindR"
if (windDirection === "NE" && facingDirection === "SW")
    return "tailWind"
if (windDirection === "NE" && facingDirection === "NW")
    return "crossWindL"

// golf wind type based on easterly wind
if (windDirection === "E" && facingDirection === "N") 
    return "crossWindL"
if (windDirection === "E" && facingDirection === "E")
    return "headWind"
if (windDirection === "E" && facingDirection === "S")
    return "crossWindR"
if (windDirection === "E" && facingDirection === "W")
    return "tailWind"
if (windDirection === "E" && facingDirection === "NE")
    return "quarterWindLHW"
if (windDirection === "E" && facingDirection === "SE")
    return "quarterWindRHW"
if (windDirection === "E" && facingDirection === "SW")
    return "quarterWindRTW"
if (windDirection === "E" && facingDirection === "NW")
    return "quarterWindLTW"

// golf wind type based on south easterly wind
if (windDirection === "SE" && facingDirection === "N") 
    return "quarterWindLTW"
if (windDirection === "SE" && facingDirection === "E")
    return "quarterWindLHW"
if (windDirection === "SE" && facingDirection === "S")
    return "quarterWindRHW"
if (windDirection === "SE" && facingDirection === "W")
    return "quarterWindRTW"
if (windDirection === "SE" && facingDirection === "NE")
    return "crossWindL"
if (windDirection === "SE" && facingDirection === "SE")
    return "headWind"
if (windDirection === "SE" && facingDirection === "SW")
    return "crossWindR"
if (windDirection === "SE" && facingDirection === "NW")
    return "tailWind"

// golf wind type based on southernly wind
if (windDirection === "S" && facingDirection === "N") 
    return "tailWind"
if (windDirection === "S" && facingDirection === "E")
    return "crossWindR"
if (windDirection === "S" && facingDirection === "S")
    return "headWind"
if (windDirection === "S" && facingDirection === "W")
    return "crossWindL"
if (windDirection === "S" && facingDirection === "NE")
    return "quarterWindLTW"
if (windDirection === "S" && facingDirection === "SE")
    return "quarterWindLTW"
if (windDirection === "S" && facingDirection === "SW")
    return "quarterWindRHW"
if (windDirection === "S" && facingDirection === "NW")
    return "quarterWindRTW"

// golf wind type based on south westerly wind
if (windDirection === "SW" && facingDirection === "N") 
    return "quarterWindRTW"
if (windDirection === "SW" && facingDirection === "E")
    return "quarterWindLTW"
if (windDirection === "SW" && facingDirection === "S")
    return "quarterWindLHW"
if (windDirection === "SW" && facingDirection === "W")
    return "quarterWindRHW"
if (windDirection === "SW" && facingDirection === "NE")
    return "tailWind"
if (windDirection === "SW" && facingDirection === "SE")
    return "crossWindL"
if (windDirection === "SW" && facingDirection === "SW")
    return "headWind"
if (windDirection === "SW" && facingDirection === "NW")
    return "crossWindR"
    

// golf wind type based on westerly wind
if (windDirection === "W" && facingDirection === "N") 
    return "crossWindR"
if (windDirection === "W" && facingDirection === "E")
    return "tailWind"
if (windDirection === "W" && facingDirection === "S")
    return "crossWindL"
if (windDirection === "W" && facingDirection === "W")
    return "heaWind"
if (windDirection === "W" && facingDirection === "NE")
    return "quarterWindRTL"
if (windDirection === "W" && facingDirection === "SE")
    return "quarterWindLTW"
if (windDirection === "W" && facingDirection === "SW")
    return "quarterWindLHW"
if (windDirection === "W" && facingDirection === "NW")
    return "quarterWindRHW"


// golf wind type based on north westerly wind
if (windDirection === "NW" && facingDirection === "N") 
    return "quarterWindLHW"
if (windDirection === "NW" && facingDirection === "E")
    return "quarterWindRTW"
if (windDirection === "NW" && facingDirection === "S")
    return "quarterWindLTW"
if (windDirection === "NW" && facingDirection === "W")
    return "quarterWindLHW"
if (windDirection === "NW" && facingDirection === "NE")
    return "crossWindR"
if (windDirection === "NW" && facingDirection === "SE")
    return "tailWind"
if (windDirection === "NW" && facingDirection === "SW")
    return "crossWindL"
if (windDirection === "NW" && facingDirection === "NW")
    return "headWind"
}

export default golfWindDirection