function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  
var oneDay = 24 * 60 * 60 * 1000;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var firstDate = new Date(yyyy, mm, dd);
var secondDate = new Date(2019, 04, 18);
var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
var res = document.querySelector('#res');
res.style.color = getRandomColor();
document.body.style.backgroundColor = getRandomColor();
res.innerHTML = diffDays;