var Alarm = require("./../js/alarm-clock.js").alarmModule;
var setTime = moment();
var testAlarm = new Alarm();
function reloadTime(){
  setInterval(function(){
    $("#time").text(moment().format('MMMM do YYY, h:mm:ss a'));
    testAlarm.checkTime(moment(),setTime);
  }, 1000)
}

$(document).ready(function(){
  reloadTime();

  $("#set-button").submit(function(event){
    event.preventDefault();
    var hour = parseInt($("#hours").val());
    var minute = parseInt($("#minutes").val());
    var second = parseInt($("#seconds").val());
    setTime = testAlarm.setAlarm(hour,minute,second);

    $("#check").text("hour: "+hour+" minute: "+minute + " seconds: " + second);
  })
});
