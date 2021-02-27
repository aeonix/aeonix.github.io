$(function() {
  
  // --------------------------------------------------------
  //  Language Dropdown
  // -------------------------------------------------------- 
  $('.langbtn').click(function(e){
    $('.lang-dropdown-child').addClass('show-child');
      e.stopPropagation();
  })
  $('body').click(function(){
    $('.lang-dropdown-child').removeClass('show-child');
  });
  
});
