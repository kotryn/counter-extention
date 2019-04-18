function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function countDate() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var dd = today.getDate()
  var mm = today.getMonth() + 1
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var nowDate = new Date(yyyy, mm, dd, h, m, s).getTime();
  var endDate = new Date(2019, 4, 18, 23, 45, 0).getTime();
  var timeRemaining = parseInt((endDate - nowDate) / 1000);

  if (timeRemaining >= 0) {
    days = parseInt(timeRemaining / 86400);
    timeRemaining = (timeRemaining % 86400);

    hours = parseInt(timeRemaining / 3600);
    timeRemaining = (timeRemaining % 3600);

    minutes = parseInt(timeRemaining / 60);
    timeRemaining = (timeRemaining % 60);

    seconds = parseInt(timeRemaining);
  }

  return hours + "h " + minutes + "min " + seconds + "s";
}

var res = document.querySelector('#res');
res.style.color = getRandomColor();
document.body.style.backgroundColor = getRandomColor();
res.innerHTML = countDate();

setInterval(function () {
  res.innerHTML = countDate();
}, 1000)