var mu = document.getElementById('music');

function main(){
  $("#left, #right").on("click", function(){
    mu.play();
  })
}

function chgvoice(){
  mu.volumn = 0.01;
}

$(document).ready(main)
