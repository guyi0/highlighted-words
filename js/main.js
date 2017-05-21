






 var words= ["button", "on movement", "ble connect", "ble + movement", "voice activation", "gesture", "ble data", "beacon data", "wifi", "gsm", "sms", "voice", "network mesh", "ble locate", "beacon loacte", "wifi", "gsm", "gps", "location mesh", "adaptive mapping", "temperature", "humidity", "height", "movement", "acceleration", "light", "open", "walking", "running", "biking", "driving", "sitting", "sleeping", "sports activ", "email", "sms", "call", "push", "left behind", "taken", "theft", "pre-flight", "shock", "lift", "flip", "angle", "swerving", "speeding", "hard stop", "hard acceleration", "love", "panic", "activate", "tapping", "shaking", "home", "school", "work", "road", "park", "offroad", "airplane", "ship", "container", "truck", "manual location", "city", "country", "category", "frequent visited", "port", "gps safzone", "wifi safezone", "no movement", "same place", "wireless leash ", "beacon", "no cost", "triggers only", "alerts only", "new location ", "wifi", "beacon", "gps pinger", "movement", "active"]

function getText(){


var  string = document.getElementById("myTextarea").value
string = string.trim().toLowerCase().split(" ")
for (var i = 0; i < string.length; i++) {
  var string2 = string[i]+" "+string[i+1]
  for (var j = 0; j < words.length; j++) {

  if (string[i]==words[j]){

string[i] =" " + "<strong>"+string[i]+"</strong>" +"  "
  }
if (string2==words[j]) {
var newWord = words[j].split(" ");

  string[i] =" " + "<strong>"+newWord[0]+"</strong>" +"  "
  string[i+1]=" " + "<strong>"+newWord[1]+"</strong>" +"  "

}

}

}




document.getElementById("h1").innerHTML = string.join(" ")

}



// Edit Names



var editwords = words.sort().map(function(word){

return  "<button  type='button'  class=' text-capitalize  btn btn-danger btn- xlg words'>" +"<strong>"+word+"</strong>"+"</button>"+"</div>"



})
editwords= editwords.join("")
document.getElementById('show').innerHTML=editwords


$('#show').click(function() {
  event.stopPropagation()
     var text= event.target.innerHTML;

  words = words.filter(function(word){
return text !==word

  })
    document.getElementById('show').innerHTML=""
    var editwords = words.sort().map(function(word){

    return  "<button  type='button'  class=' text-capitalize  btn btn-danger btn- xlg words'>" +"<strong>"+word+"</strong>"+"</button>"+"</div>"



    })
    editwords= editwords.join("")
    document.getElementById('show').innerHTML=editwords
    console.log(editwords);// do something with the text
});
