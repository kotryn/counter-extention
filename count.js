function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function daysInMonth(yyyy, mm) {
  return new Date(yyyy, mm, 0).getDate();
}

function monthDiff(d1, d2) {
  var months;
  var days;
  months = (d2.yyyy - d1.yyyy) * 12;
  months -= d1.mm;
  months += d2.mm;

  if((d2.dd < d1.dd) && months >= 0) {
    days = d2.dd - d1.dd + daysInMonth(d1.yyyy, d1.mm + 1)
    months--
  } else {
    days = d2.dd - d1.dd
  }
  if (months == -1) months = 0;
  return months < -1 || days <= -1 ? { months: 0, days: 0 } : { months: months, days: days };
}

function countDate() {
  var today = new Date();

  var todayData = {
    yyyy: today.getFullYear(),
    mm: today.getMonth() + 1,
    dd: today.getDate(),
    h: today.getHours(),
    m: today.getMinutes(),
    s: today.getSeconds()
  }

  var endData = {
    yyyy: 2020,
    mm: 2,
    dd: 1,
    h: 12,
    m: 0,
    s: 0
  }


  var nowDate = new Date(todayData.yyyy, todayData.mm, todayData.dd, todayData.h, todayData.m, todayData.s).getTime();
  var endDate = new Date(endData.yyyy, endData.mm, endData.dd, endData.h, endData.m, endData.s).getTime();

  var date = monthDiff(todayData, endData)

  if (date.months !== 0 || date.days !== 0) {
    clearInterval(refreshIntervalId);
    var m = ""
    var d = ""
    if (date.months > 0) {
      m = date.months > 1 ? date.months + " months " : date.months + " month "
    }
    if (date.days > 0) {
      d = date.days > 1 ? date.days + " days" : date.days + " day"
    }
    return m + d
  }

  var timeRemaining = parseInt((endDate - nowDate) / 1000);

  if (timeRemaining >= 0) {
    var days = parseInt(timeRemaining / 86400);
    timeRemaining = (timeRemaining % 86400);

    var hours = parseInt(timeRemaining / 3600);
    timeRemaining = (timeRemaining % 3600);

    var minutes = parseInt(timeRemaining / 60);
    timeRemaining = (timeRemaining % 60);

    var seconds = parseInt(timeRemaining);

    return hours + "h " + minutes + "min " + seconds + "s";
  }

  clearInterval(refreshIntervalId);
  return "Bailando!!!";
}

var res = document.querySelector('#res');
res.style.color = getRandomColor();
document.body.style.backgroundColor = getRandomColor();
res.innerHTML = countDate();

var refreshIntervalId = setInterval(function () {
  res.innerHTML = countDate();
}, 1000)