 var words= ["button", "on movement", "ble connect", "ble + movement", "voice activation", "gesture", "ble data", "beacon data", "wifi", "gsm", "sms", "voice", "network mesh", "ble locate", "beacon loacte", "wifi", "gsm", "gps", "location mesh", "adaptive mapping", "temperature", "humidity", "height", "movement", "acceleration", "light", "open", "walking", "running", "biking", "driving", "sitting", "sleeping", "sports activ", "email", "sms", "call", "push", "left behind", "taken", "theft", "pre-flight", "shock", "lift", "flip", "angle", "swerving", "speeding", "hard stop", "hard acceleration", "love", "panic", "activate", "tapping", "shaking", "home", "school", "work", "road", "park", "offroad", "airplane", "ship", "container", "truck", "manual location", "city", "country", "category", "frequent visited", "port", "gps safzone", "wifi safezone", "no movement", "same place", " wireless leash ", "beacon", "no cost", "triggers only", "alerts only", "new location ", "wifi", "beacon", "gps pinger", "movement", "active", "and", "with", "after"]


function getText(){


var  string = document.getElementById("myTextarea").value
string = string.trim().toLowerCase().split(" ")
for (var i = 0; i < string.length; i++) {
  for (var j = 0; j < words.length; j++) {
  console.log(string[i].includes(words[j]), string[i], i)
  if (string[i].includes(words[j])){
string[i] =" " + "<span>"+string[i]+"</span>" +"  "

  }

}

}



console.log(string.join('   '));
document.getElementById("h1").innerHTML = string.join(" ")

}
