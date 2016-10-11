var currentTime = moment();

function Alarm() {

}

Alarm.prototype.viewTime = function() {

};

Alarm.prototype.setAlarm = function (h , m , s,type) {
    console.log("initial: " + s);
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

  console.log(h);

  var setTime = moment({hour: h, minute: m, seconds: s});

  return setTime;
};

Alarm.prototype.checkTime = function(current , set) {
  if(current.seconds() === set.seconds() && current.minutes() === set.minutes() && current.hours() === set.hours()){
    return true;
  }
};

exports.alarmModule = Alarm;
