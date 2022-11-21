$(".social li a").each(function (i) {
  $(this).hover(function () {
    $(".socialWrapper").toggleClass("socialActive" + (i + 1));
  });
});


function display(val){
  document.getElementById('result').value += val
  return val
}


function solve(){
  let x = document.getElementById('result').value
  let y = eval(x);
  document.getElementById('result').value = y
  return y
}



function clearScreen(){
  document.getElementById('result').value = ''
}