function timestrToSec(timestr) {
  var parts = timestr.split(":");
    if (parts.length == 3){
    	console.log("Over an hour");
    	var hours = parts[0];
    	var minutes = parts[1];
    	var seconds = parts[2];
    } else {
    	console.log("Under an hour")
    	var hours = 0;
	var minutes = parts[0];
	var seconds = parts[1];
    }
    return (parseInt(hours, 10)*3600 + parseInt(minutes, 10)*60 + parseInt(seconds, 10));
}

function pad(num) {
  if(num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}

function formatTime(seconds) {
  return [pad(Math.floor(seconds/3600)),
          pad(Math.floor(seconds/60)%60),
          pad(seconds%60),
          ].join(":");
}

var times = document.querySelectorAll("div.title>span.time");

var tracklist = document.querySelector("table#track_table>tbody");

var totaltime = 0;

for (var timeitem of times) {
    totaltime += timestrToSec(timeitem.textContent);
}

var tr = document.createElement("tr");
// to align the total time with the track titles
var dummyPlay = document.createElement("td");
var dummyTrackNumber = document.createElement("td");

var td = document.createElement("td");
var text = document.createTextNode("Total playing time: "+ formatTime(totaltime));
td.appendChild(text);
tr.appendChild(dummyPlay);
tr.appendChild(dummyTrackNumber);
tr.appendChild(td);
tr.setAttribute("id", "total-time");
tracklist.appendChild(tr);
