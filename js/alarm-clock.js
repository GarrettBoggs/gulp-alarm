var currentTime = moment();

function Alarm() {

}

Alarm.prototype.viewTime = function() {

};

Alarm.prototype.setAlarm = function (h , m , s) {
  var setTime = moment({hour: h, minute: m, seconds: s});
  return setTime;
};

Alarm.prototype.checkTime = function(current , set) {
  if(current.seconds() === set.seconds()){
    alert("Ring Ring!");
  }
};

exports.alarmModule = Alarm;
