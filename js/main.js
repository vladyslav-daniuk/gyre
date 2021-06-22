// меню-бургер
$(document).ready(function(){
    $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})
})

// Анимация цифр  от 0
$(document).ready(function () {

    $('.klademug').each(function () {
      $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
      duration: 10000,
      easing: 'swing',
      step: function (now) {
      $(this).text(Math.ceil(now));
      }
      });
    });
    
    });

// Переключатель
    $('.switch-btn').click(function(){
      $(this).toggleClass('switch-on');
  })

  // Переключить класс при нажатии
  $(document).ready(function(){
    $(".switch-btn").click(function(){
      $(".yearly").toggleClass("bold");
      $(".monthly").toggleClass('bold'); return false;
    });
  });

  let btn = document.querySelector('.switch-btn');
  btn.onclick = function(e) {
    let element = document.querySelector(".tab-content-p");
    if(element.classList.contains("show-block")) {
      element.classList.remove("show-block");
    } else {
      element.classList.add("show-block");
    }
  }

  $('.switch-btn').click(function(){
    $(".tabs-content").toggleClass("hidden-block");
  });




  const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
