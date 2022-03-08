//переключение класса панели навигации
function toggle() {
  //получить объект панели
  const x = document.getElementById("navigation");
  /*в зависимости от отображения элементов навигации, переименовать класс
  соответствующим образом*/
  if (x.className === "nav") { 
    x.className += "-show" 
  } else {
    x.className = "nav";
  }
}