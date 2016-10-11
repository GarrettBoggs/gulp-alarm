var Alarm = require("./../js/alarm-clock.js").alarmModule;
var setTime = moment();
var testAlarm = new Alarm();
var snd = new Audio("images/Quack.mp3");
var duckSound = false;


$(document).ready(function(){
  $("#duck").hide();
  function reloadTime(){
    setInterval(function(){
      $("#time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      if(setTime) {
        if(testAlarm.checkTime(moment(),setTime)){
          $("#duck").show();
          duckSound=true;
        }
        if(duckSound){
          snd.play();
        }
      }
    }, 1000)
  }

  reloadTime();

  $("#set-button").submit(function(event){
    event.preventDefault();
    $("#duck").hide();
    duckSound=false;
    var hour = parseInt($("#hours").val());
    var minute = parseInt($("#minutes").val());
    var second = parseInt($("#seconds").val());
    var type = $('input[name="meridian"]:checked').val();
    console.log(type);
    setTime = testAlarm.setAlarm(hour,minute,second,type);
    console.log(moment().hours());
    $("#check").text("hour: "+hour+" minute: "+minute + " seconds: " + second);
  })

  $("#stop-alarm").submit(function(event){
    event.preventDefault();
    setTime = null;
    $("#duck").hide();
    $("#check").hide();
    duckSound=false;
  });

  $("#duck").click(function(event){
    event.preventDefault();
    setTime = testAlarm.setAlarm(moment().hours(),moment().minutes(),moment().seconds()+5);
    $("#duck").hide();

     duckSound=false;
  });

});
