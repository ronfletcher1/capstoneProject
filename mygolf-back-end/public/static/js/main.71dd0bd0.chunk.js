(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},25:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),o=(a(31),a(2)),c=a(3),s=a(5),d=a(4),u=a(6),m=(a(32),a(15),a(60)),h=a(59),W=(a(33),a(58)),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={showItem:!0},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper black"},r.a.createElement(W.a,{to:"/",className:"brand-logo center"},"MyGolfConditions"),r.a.createElement("ul",{className:"left hide-on-med-and-down miniNav"},r.a.createElement("li",null,r.a.createElement(W.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/mygolfclubs"},"GolfClubs")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/protips"},"Pro Tips")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/contact"},"Contact"))))))}}]),t}(n.Component),p=a(22),b=a.n(p),f=a(23),g=a.n(f),w=(a(55),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).componentDidUpdate=function(){a.props.windBlowing!==a.state.wind_direction&&a.setState({wind_direction:a.props.windBlowing})},a.state={wind_direction:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"first"},r.a.createElement(g.a,null,function(t){var a=t.absolute,n=t.alpha,l=t.beta,i=t.gamma;return r.a.createElement("div",{className:"outter-compass"},"".concat(a),"".concat(n),"".concat(l),"".concat(i),r.a.createElement("div",{className:"compass-circle",style:{transform:"rotate(".concat(n,"deg)")}},r.a.createElement("div",{className:"compass-arrow"}),r.a.createElement("div",{className:"wind-arrow",style:{transform:"rotate(".concat(e.state.wind_direction+100,"deg)")}})))}))}}]),t}(n.Component)),y=function(e,t){return console.log(e),console.log(t),"N"===e&&"N"===t?"headWind":"N"===e&&"E"===t?"crossWindL":"N"===e&&"S"===t?"tailWind":"N"===e&&"W"===t?"crossWindR":"N"===e&&"NE"===t?"quarterWindRHW":"N"===e&&"SE"===t?"quarterWindRTW":"N"===e&&"SW"===t?"quarterWindLTW":"N"===e&&"NW"===t?"quarterWindLHW":"NE"===e&&"N"===t?"quarterWindRHW":"NE"===e&&"E"===t?"quarterWindLHW":"NE"===e&&"S"===t?"quarterWindLTW":"NE"===e&&"W"===t?"quarterWindRTW":"NE"===e&&"NE"===t?"headWind":"NE"===e&&"SE"===t?"crossWindR":"NE"===e&&"SW"===t?"tailWind":"NE"===e&&"NW"===t?"crossWindL":"E"===e&&"N"===t?"crossWindL":"E"===e&&"E"===t?"headWind":"E"===e&&"S"===t?"crossWindR":"E"===e&&"W"===t?"tailWind":"E"===e&&"NE"===t?"quarterWindLHW":"E"===e&&"SE"===t?"quarterWindRHW":"E"===e&&"SW"===t?"quarterWindRTW":"E"===e&&"NW"===t?"quarterWindLTW":"SE"===e&&"N"===t?"quarterWindLTW":"SE"===e&&"E"===t?"quarterWindLHW":"SE"===e&&"S"===t?"quarterWindRHW":"SE"===e&&"W"===t?"quarterWindRTW":"SE"===e&&"NE"===t?"crossWindL":"SE"===e&&"SE"===t?"headWind":"SE"===e&&"SW"===t?"crossWindR":"SE"===e&&"NW"===t?"tailWind":"S"===e&&"N"===t?"tailWind":"S"===e&&"E"===t?"crossWindR":"S"===e&&"S"===t?"headWind":"S"===e&&"W"===t?"crossWindL":"S"===e&&"NE"===t?"quarterWindLTW":"S"===e&&"SE"===t?"quarterWindLTW":"S"===e&&"SW"===t?"quarterWindRHW":"S"===e&&"NW"===t?"quarterWindRTW":"SW"===e&&"N"===t?"quarterWindRTW":"SW"===e&&"E"===t?"quarterWindLTW":"SW"===e&&"S"===t?"quarterWindLHW":"SW"===e&&"W"===t?"quarterWindRHW":"SW"===e&&"NE"===t?"tailWind":"SW"===e&&"SE"===t?"crossWindL":"SW"===e&&"SW"===t?"headWind":"SW"===e&&"NW"===t?"crossWindR":"W"===e&&"N"===t?"crossWindR":"W"===e&&"E"===t?"tailWind":"W"===e&&"S"===t?"crossWindL":"W"===e&&"W"===t?"heaWind":"W"===e&&"NE"===t?"quarterWindRTL":"W"===e&&"SE"===t?"quarterWindLTW":"W"===e&&"SW"===t?"quarterWindLHW":"W"===e&&"NW"===t?"quarterWindRHW":"NW"===e&&"N"===t?"quarterWindLHW":"NW"===e&&"E"===t?"quarterWindRTW":"NW"===e&&"S"===t?"quarterWindLTW":"NW"===e&&"W"===t?"quarterWindLHW":"NW"===e&&"NE"===t?"crossWindR":"NW"===e&&"SE"===t?"tailWind":"NW"===e&&"SW"===t?"crossWindL":"NW"===e&&"NW"===t?"headWind":void 0},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.zipcode;console.log(e);var t="http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=".concat(e,",us&appid=482c145ce8edf1d69ea5168f9d06460c");b.a.get(t).then(function(e){console.log("wind_direction:",e.data.wind.deg),console.log(e),a.setState({temp:e.data.main.temp,wind_speed:e.data.wind.speed,wind_direction:e.data.wind.deg,wind_gust:e.data.wind.gust})})},a.windShot=function(e,t,a){return console.log(e),console.log(t),console.log(a),a>=40?"GO HOME":a>=35&&"tailWind"===t?e-.05*e:a>=35&&"headWind"===t?e+.1*e:a>=35&&"quarterWindLHW"===t||a>=35&&"quarterWindRHW"===t?e+.07*e:a>=35&&"quarterWindLTW"===t||a>=35&&"quarterWindRTW"===t?e-.035*e:(console.log("step 1"),a>=30&&"tailWind"===t?e-.05*e:a>=30&&"headWind"===t?e+.1*e:a>=30&&"quarterWindLHW"===t||a>=30&&"quarterWindRHW"===t?e+.07*e:a>=30&&"quarterWindLTW"===t||a>=30&&"quarterWindRTW"===t?e-.035*e:(console.log("step 2"),a>=25&&"tailWind"===t?e-.05*e:a>=25&&"headWind"===t?e+.1*e:a>=25&&"quarterWindLHW"===t||a>=25&&"quarterWindRHW"===t?e+.07*e:a>=25&&"quarterWindLTW"===t||a>=25&&"quarterWindRTW"===t?e-.035*e:(console.log("step 3"),a>=20&&"headWind"===t?e+.1*e:a>=20&&"tailWind"===t?e-.05*e:a>=20&&"quarterWindLHW"===t||a>=20&&"quarterWindRHW"===t?e+.07*e:a>=20&&"quarterWindLTW"===t||a>=20&&"quarterWindRTW"===t?e-.035*e:(console.log("step 4"),a>=15&&"tailWind"===t?e-.05*e:a>=15&&"headWind"===t?e+.1*e:a>=15&&"quarterWindLHW"===t||a>=15&&"quarterWindRHW"===t?e+.07*e:a>=15&&"quarterWindLTW"===t||a>=15&&"quarterWindRTW"===t?e-.035*e:(console.log("step 5"),a>=10&&"tailWind"===t?e-.05*e:a>=10&&"headWind"===t?e+.1*e:a>=10&&"quarterWindLHW"===t||a>=10&&"quarterWindRHW"===t?e+.07*e:a>=10&&"quarterWindLTW"===t||a>=10&&"quarterWindRTW"===t?e-.035*e:(console.log("step 6"),a>=5&&"tailWind"===t?(console.log(e-.05*e),e-.05*e):a>=5&&"headWind"===t?e+.1*e:a>=5&&"quarterWindLHW"===t||a>=5&&"quarterWindRHW"===t?e+.07*e:a>=5&&"quarterWindLTW"===t||a>=5&&"quarterWindRTW"===t?(console.log(e-.035*e),e-.035*e):(console.log("step 7"),a>=2.5&&"tailWind"===t?e-.05*e:a>=2.5&&"headWind"===t?e+.1*e:a>=2.5&&"quarterWindLHW"===t||a>=2.5&&"quarterWindRHW"===t?e+.07*e:a>=2.5&&"quarterWindLTW"===t||a>=2.5&&"quarterWindRTW"===t?e-.035*e:e)))))))},a.windDirection=function(e){return console.log(e),e>=340&&e<=360||e>=0&&e<=20?"N":e>20&&e<=70?"NE":e>70&&e<=110?"E":e>110&&e<=160?"SE":e>160&&e<=200?"S":e>200&&e<=250?"SW":e>250&&e<=290?"W":e>290&&e<=340?"NW":void 0},a.facingDirection=function(e){return console.log(e),e>=340&&e<=360||e>=0&&e<=20?"N":e>20&&e<=70?"NE":e>70&&e<=110?"E":e>110&&e<=160?"SE":e>160&&e<=200?"S":e>200&&e<=250?"SW":e>250&&e<=290?"W":e>290&&e<=340?"NW":void 0},a.state={icon:"",wind_speed:"",wind_direction:"",wind_gust:"",zip_code:"",golfWind_direction:"",wind_shot:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.windDirection(this.state.wind_direction);console.log(e);var t=y(e,this.facingDirection(360));console.log(t);var a=this.windShot(Number(this.props.distance),t,this.state.wind_speed);console.log(a);return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron",style:{color:"blue",backgrundImage:'url("https://i.pinimg.com/originals/f2/56/fa/f256fa53f4a71faeafdc7d83ece05548.jpg")'}},r.a.createElement(w,{windBlowing:this.state.wind_direction})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Golf Conditions"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row-fluid"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"Current Temp",r.a.createElement("br",null),this.state.temp)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"Wind Speed",r.a.createElement("br",null),this.state.wind_speed)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"Wind Gust",r.a.createElement("br",null),this.state.wind_gust)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"Wind Blowing From",r.a.createElement("br",null),e)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"Golf Wind Type",r.a.createElement("br",null),t)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"Plays Like",r.a.createElement("br",null),a)))))))}}]),t}(n.Component),N={240:"Driver",200:"Hybrid",190:"Two Iron",185:"Three Iron",180:"Four Iron",170:"Five Iron",160:"Six Iron",150:"Seven Iron",140:"Eight Iron",130:"Nine Iron",125:"Pitching Wedge",115:"Gap Wedge",95:"Sand Wedge"},S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).distance=function(t){t.preventDefault(),console.log(t.target.distance.value),e.setState({shot_distance:t.target.distance.value})},e.distanceToHole=function(e){return console.log(e),e>225?N[240]:e>190?N[200]:e>185?N[190]:e>180?N[185]:e>170?N[180]:e>160?N[170]:e>150?N[160]:e>140?N[150]:e>130?N[140]:e>125?N[130]:e>115?N[125]:e>95?N[115]:e>10?N[95]:void 0},e.state={golfClubs:{},shot_distance:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({golfClubs:N})},1e3),console.log(N)}},{key:"render",value:function(){var e=this.distanceToHole(this.state.shot_distance);return console.log(e),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v,{distance:this.state.shot_distance,zipcode:this.props.zipcode}),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.distance},r.a.createElement("h4",null,"Distance"),r.a.createElement("input",{id:"searchTerm",type:"number",name:"distance"}))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"Distance",r.a.createElement("br",null),this.shot_distance),r.a.createElement("br",null),r.a.createElement("h4",null,"Distance to Hole",r.a.createElement("br",null),e),r.a.createElement("br",null),r.a.createElement("h4",null,"Club Selection",r.a.createElement("br",null),e),r.a.createElement("br",null))))))}}]),t}(n.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"protips"},r.a.createElement("div",{className:"container"},r.a.createElement("header",null,"ProTips"),r.a.createElement("li",null,r.a.createElement("h4",null,"CrossWinds")),r.a.createElement("b",null,"Unlike hitting with the wind at your back or in your face, playing through a strong crosswind isn\u2019t a simple matter of changing clubs and maybe tweaking your technique. A sideways wind turns aiming into a guessing game, may or may not affect your club selection, and can cause huge havoc on a slight miscue. Of course, a crosswind can be a great advantage in the right situation \u2013 but only if you\u2019re prepared for it. We\u2019ve got several tips that will boost your odds:",r.a.createElement("br",null),r.a.createElement("br",null),"Go with your normal shot: A crosswind gives you two options \u2013 curve the ball into the wind, or curve it with the wind. Unless you\u2019re an advanced golfer with the skill to shape shots in either direction, your best bet is to go with your natural shot. If you typically hit a fade (left-to-right curve for a right-hander), aim farther left in a left-to-right wind; aim straight at the target in a right-to-left breeze, letting the two forces cancel each other out.",r.a.createElement("br",null),r.a.createElement("br",null),"Play a runner that rides the crosswind: The situation \u2013 left-to-right wind, flag on the right, no hazards guarding the green\u2019s front left. Opportunity knocks. Play it correctly and the wind will take your ball straight to the hole. Aim well left and set up for a straight shot or slight fade, with the goal of landing the ball just short and left of the green. Then watch the wind work its magic. Always look for spots where the green is open on the side from which the wind is blowing. Take more club if fighting wind, less club going with it: If you decide to hit a shot that curves into the wind, take an extra club as the wind will increase the ball\u2019s backspin, knock it down and minimize roll. Conversely, play less club when your shot matches the wind direction as backspin is diminished and the ball will fly and roll farther. Find the safest spot to miss: The first thing to assess is whether the wind is blowing toward or away from trouble. If the answer is \u201ctoward,\u201d you\u2019ll want to aim as far as possible from the hazard to make absolutely certain you don\u2019t find it. Wind blowing away from trouble? Take a more aggressive line and trust the wind to steer the ball toward safety."),r.a.createElement("li",null,r.a.createElement("h4",null,"Short Game Shots")),r.a.createElement("p",null,r.a.createElement("b",null,"Wind affects these shots too! Pitching into a stronger breeze will all but stop your shots\u2019 roll out. Conversely, chipping and pitching downwind will make it roll out a lot more. The ball can even move side to side from as little as 30 yards from the hole. When pitching into the wind, follow the same rules as the approach shot. Take a stronger club and swing easier. This will help you control spin and help the shot roll out like you thought it would.")),r.a.createElement("li",null,r.a.createElement("h4",null,"Ball Position")),r.a.createElement("p",null,r.a.createElement("b",null,"In order to lessen the impact of a stiff breeze, you\u2019ll want to hit the ball lower than normal. In order to accomplish this, play the ball back further in your stance. Try putting it back about an inch farther back than normal and you\u2019ll find that the ball comes out lower and stays under the wind better."))))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Contact"},r.a.createElement("div",{className:"container"},r.a.createElement("header",null,"Contact Us"),r.a.createElement("div",{className:"contact"},r.a.createElement("div",null,r.a.createElement("form",{action:""},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your name.."}),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name.."}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Your email"}),r.a.createElement("label",null,"Subject"),r.a.createElement("textarea",{id:"subject",name:"subject",placeholder:"Write something.."}),r.a.createElement("input",{type:"submit",value:"Submit"}))))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).zipCode=function(e){e.preventDefault(),a.setState({zipcode:e.target.zipcode.value}),console.log(a.props),a.props.history.push("/mygolfclubs")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.zipCode},r.a.createElement("h4",null,"Where Are You Playing Today?"),r.a.createElement("br",null),r.a.createElement(W.a,{to:"/myGolfClubs"},"Click here..."),r.a.createElement("div",{className:"zipHolder"},r.a.createElement("input",{id:"searchTerm",type:"number",name:"zipcode"}),r.a.createElement("h4",null,"Enter Zip Code")),r.a.createElement("div",{className:"buttonHolder"},r.a.createElement("input",{type:"submit",align:"right",value:"submit"}))))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("header",null,"About"),r.a.createElement("li",null,r.a.createElement("h4",null,"MyColfConditions")),r.a.createElement("br",null),"MyColfConditions is an app that provides the user with updated weather data and then suggest the club to use based on the weather conditions.",r.a.createElement("br",null),r.a.createElement("br",null),"Users must first set up their clubs and max distances before playing. Next, the user will input the zip code for the course they will be playing.",r.a.createElement("br",null),r.a.createElement("br",null),"After entering the zip code, MyGolfConditions will display the current weather conditions during your round as follows:",r.a.createElement("br",null),r.a.createElement("li",null,"Current Temperature"),r.a.createElement("li",null,"Wind Speed"),r.a.createElement("li",null,"Wind Gust Speed"),r.a.createElement("li",null,"Direction the wind is blowing from"),r.a.createElement("ol",null,"Golf wind type:"),r.a.createElement("li",null,"Headwind - wind is blowing in your face "),r.a.createElement("li",null,"Tailwind - wind is blowing the direction you are facing"),r.a.createElement("li",null,"Crosswind - wind is blowing from left to rignt or right to left"),r.a.createElement("li",null,"Quarterwind - wind is blowing in your face or away from you at 45 or 315 degrees"),r.a.createElement("br",null),r.a.createElement("br",null),"During the round, on the approch shot or a par 3 hole, the user may input the distance to the hole.  The app will calculate what the distance is playing like based on the wind speed and golf wind type.  The app will suggest the best club to use based on the what the shot is playing like."))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).zipCode=function(e){e.preventDefault();var t=document.getElementById("searchTerm").value;console.log(a.props),a.setState({zipcode:t}),console.log(a.state),console.log(a.props),a.props.history.push("/mygolfclubs")},a.state={zipcode:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{zipcode:e.state.zipcode})}}),r.a.createElement(h.a,{exact:!0,path:"/mygolfclubs",component:S}),r.a.createElement(h.a,{exact:!0,path:"/protips",component:q}),r.a.createElement(h.a,{exact:!0,path:"/about",component:O}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:T}),r.a.createElement(h.a,{exact:!0,path:"/mygolfclubs",render:function(){return r.a.createElement(S,{zipcode:e.state.zipcode})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.71dd0bd0.chunk.js.map