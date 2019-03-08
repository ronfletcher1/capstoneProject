# Capstone Project

# Title: MyGolfConditions

# Demo
* Local Host

GitHub
* https://github.com/ronfletcher1/capstoneProject


# Table of Contents

* Description
* Technologies
* Challenges and Solutions
* MVP
* Our Stretch Goals
* Authors


# Description

## Issue:  
Correct club selection in wind and varying elevations.  Selecting the 
correct club to use for golf shots will vary depending on the wind 
speed, wind direction, and elevation. Here in GA alone avg wind speeds 
vary from an avg between 9.11 mph to Waynesville GA 25 mph

## Resolution: 
MyGolfConditions updates the golfer on the 
current weather conditions and elevation wherever they are playing 
golf so they may make the proper club selection

## MVP Features:
Weather API Wind speed display
Weather API Wind direction display
Club Distance Catalog
Club Suggestion Display

## Stretch Features
API Elevation display
Elevation Club Distance

## How It Works:
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

# Authors
* Cody Summers
* Ron Fletcher

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







