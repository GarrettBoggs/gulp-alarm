var currentTime = moment();
var allAlarms = [];

function Alarm() {

}

Alarm.prototype.setAlarm = function (h , m , s,type) {

  if(type === 'pm'){
    h+=12;
  }

  if(s > 59){
    m += 1;
    s -= 59;
  }
  if(m > 59){
    h += 1;
    m -= 59;
  }



  var setTime = moment({hour: h, minute: m, seconds: s});
  allAlarms.push(setTime);
  return allAlarms;
};

Alarm.prototype.checkTime = function(current , times) {
  for(var i = 0; i < times.length; i ++) {
    if(current.seconds() === times[i].seconds() && current.minutes() === times[i].minutes() && current.hours() === times[i].hours()) {
      return true;
    }
  }

  return false;
};

exports.alarmModule = Alarm;
