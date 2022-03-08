//при прокрутке страницы на более чем 40 px отобразить кнопку
window.onscroll = function() {
  //получить элемент кнопки
  const beginBtn = document.getElementById("beginBtn");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    beginBtn.style.display = "block";
  } else {
    beginBtn.style.display = "none";
  }
};
//при нажатии на кнопку происходит возврат в начало страницы
function toBegining() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}