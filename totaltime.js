// won't work for times over 1h -> todo
function timestrToSec(timestr) {
  var parts = timestr.split(":");
/*  return (parts[0] * 3600) +
         (parts[1] * 60) +
         (+parts[2]);*/
    return (parseInt(parts[0], 10)*60 + parseInt(parts[1], 10));
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

var tracklist = document.querySelector("div#trackInfoInner");

var totaltime = 0;

for (var timeitem of times) {
    totaltime += timestrToSec(timeitem.textContent);
}

var p = document.createElement("p");
p.textContent = "Total playing time: "+ formatTime(totaltime);
p.setAttribute("id", "total-time");
tracklist.appendChild(p);
