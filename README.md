Capstone Project

Name: MyGolfConditions

Issue:  
Correct club selection in wind and varying elevations.  Selecting the 
correct club to use for golf shots will vary depending on the wind 
speed, wind direction, and elevation. Here in GA alone avg wind speeds 
vary from an avg between 9.11 mph to Waynesville GA 25 mph

Resolution: MyGolfConditions updates the golfer on the 
current weather conditions and elevation wherever they are playing 
golf so they may make the proper club selection

MVP Features:
Weather API Wind speed display
Weather API Wind direction display
Elevation Club Distance
Club Distance Catalog
Club Suggestion Display

Stretch Features
API Elevation display

How It Works:
User inputs thier golf clubs and distance range. For example
{
    Driver: 250 - 260
    Hybrid: 190 - 200
    2 Iron: 185 - 190
    3 Iron: 180 - 185
    4 Iron: 175 - 180
    5 Iron: 165 - 170
    6 Iron: 155 - 160
    7 Iron: 145 - 150
    8 Iron: 135 - 140
    9 Iron: 130 - 135
    PW:     115 - 125
    GW:     100 - 115
    Sand:   75 - 100
    Putter: null
    
}

tailwindSpeed = x
function clubSelect(){
    if tailwindspeed > 1 then distance - 1 
     
} 
if tailwindSpeed = 1 then distance - 1
45dtailwindLSpeed = x
45dtailwindRSpeed = x
crosswindleftwindSpeed = x
crosswindrightwindSpeed = x
if headwindSpeed > 1 then distance + 1 
return golfClubs
quarteringWindLSpeed = x
quarteringWindRSpeed = x

Wind Directions

function windDirection(degree){
    if (degree >= 350 && degree <= 360) || 
        (degree >= 0 && degree <= 10)
    return N 
    if (degree >= 20 && degree <= 30)
    return NNE 
    if (degree >= 40 && degree <= 50)
    return NE 
    if (degree >= 60 && degree <= 70)
    return ENE 
    if (degree >= 80 && degree <= 100)
    return E 
    if (degree >= 110 && degree <= 120)
    return ESE 
    if (degree >= 130 && degree <= 140)
    return SE 
    if (degree >= 150 && degree <= 160)
    return SSE 
    if (degree >= 170 && degree <= 190)
    return S 
    if (degree >= 200 && degree <= 210)
    return SSW 
    if (degree >= 220 && degree <= 230)
    return SW 
    if (degree >= 240 && degree <= 250)
    return WSW 
    if (degree >= 260 && degree <= 280)
    return W 
    if (degree >= 290 && degree <= 300)
    return WNW 
    if (degree >= 310 && degree <= 320)
    return NW 
    if (degree >= 330 && degree <= 340)
    return NNW 
}
    




Elevation Calculation
baseElevation (bel)= the elevation level for which the shot distance range is calculated
currentEevation (cel) = the current elevation level where the user is located
elevationDiff (elpi) = cel - bel 
elevationPct = .00116
elevationDiff * elevationPct = distanceDiffPct




Presentation:
Sports Science video - the issue
https://youtu.be/aaibYxMd0P8

Rules of Golf!!!

Solution:
explain the app
    wind conditions - tailwind, headwind, cross wind (L/R), quarterwind (L/R)


User Inputs
Fixed
Clubs and distances (putter not needed)
Baseline elevation and distances

Before the round
check the elvation level for the course you are playing
enter the elevation and your club distance range will adjust to 
the current elevation level

During the round
app displays the wind direction and speed
user enters the shot distance they wish to hit (approach shot distance to the green)
app selects the suggested club to be played


Golf Tips for the site
Unlike hitting with the wind at your back or in your face, playing through a strong crosswind isn’t a simple matter of changing clubs and maybe tweaking your technique. A sideways wind turns aiming into a guessing game, may or may not affect your club selection, and can cause huge havoc on a slight miscue.

Of course, a crosswind can be a great advantage in the right situation – but only if you’re prepared for it. We’ve got several tips that will boost your odds:

Go with your normal shot: A crosswind gives you two options – curve the ball into the wind, or curve it with the wind. Unless you’re an advanced golfer with the skill to shape shots in either direction, your best bet is to go with your natural shot. If you typically hit a fade (left-to-right curve for a right-hander), aim farther left in a left-to-right wind; aim straight at the target in a right-to-left breeze, letting the two forces cancel each other out.
Play a runner that rides the crosswind: The situation – left-to-right wind, flag on the right, no hazards guarding the green’s front left. Opportunity knocks. Play it correctly and the wind will take your ball straight to the hole. Aim well left and set up for a straight shot or slight fade, with the goal of landing the ball just short and left of the green. Then watch the wind work its magic. Always look for spots where the green is open on the side from which the wind is blowing.
Take more club if fighting wind, less club going with it: If you decide to hit a shot that curves into the wind, take an extra club as the wind will increase the ball’s backspin, knock it down and minimize roll. Conversely, play less club when your shot matches the wind direction as backspin is diminished and the ball will fly and roll farther.
Find the safest spot to miss: The first thing to assess is whether the wind is blowing toward or away from trouble. If the answer is “toward,” you’ll want to aim as far as possible from the hazard to make absolutely certain you don’t find it. Wind blowing away from trouble? Take a more aggressive line and trust the wind to steer the ball toward safety.


Short Game Shots
Wind affects these shots too! Pitching into a stronger breeze will all but stop your shots’ roll out. Conversely, chipping and pitching downwind will make it roll out a lot more. The ball can even move side to side from as little as 30 yards from the hole. When pitching into the wind, follow the same rules as the approach shot. Take a stronger club and swing easier. This will help you control spin and help the shot roll out like you thought it would.