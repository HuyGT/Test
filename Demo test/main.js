setInterval(myTimer, 1000);

// function show_password() {
//   var p = document.getElementById("password");
//   p.type = "text";
//   document.getElementById("eye").className = "fa-solid fa-eye-slash"
// }
let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');

let preLoad = document.getElementById("preLoader");
window.addEventListener("load",function (){
  preLoad.style.display = "none";
})

btn.onclick = function(){
    btn.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
}

close.onclick = function(){
    btn.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
}
$(document).ready(function(){
  $('#eye').click(function(){
    $(this).toggleClass('open');
    $(this).children('i').toggleClass('fa-solid fa-eye-slash fa-solid fa-eye');
    if($(this).hasClass('open')){
      document.getElementById("password").type = "text";
    }else{
      document.getElementById("password").type = "password";
    }
  });

  $(window).scroll(function () { 
    if($(this).scrollTop()){
      $('#backtotop').fadeIn();
    }else{
      $('#backtotop').fadeOut();
    }
  });

  $('#backtotop').click(function () { 
    $('html, body').animate({scrollTop: 0},1000)
  });

  $('#dark_button').click(function () { 
    $('body').toggleClass('dark-mode');
    $('.check').toggleClass('switch');

  });
})


  

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function changeImage1(){
var x = document.getElementById("img1");
  document.getElementById("imgChange").src = x.src ;
}

function changeImage2(){
  var y = document.getElementById("img2");
    document.getElementById("imgChange").src = y.src ;
  }

  function rotate(){
      document.getElementById("imgChange").style.transform = "rotate(45deg)" ;
    }
    function not_rotate(){
      document.getElementById("imgChange").style.transform = "" ;
    }