$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })
})

$('.sub-menue').hover(function(){
    $(this).toggleClass('active')
    }, function(){
    $(this).toggleClass('active')
})
