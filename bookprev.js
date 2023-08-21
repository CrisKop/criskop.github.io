$(document).ready(function() {
    var scrollPosition = 0;
  
    $(".open, .popup-overlay .open").on("click", function() {
      scrollPosition = $(window).scrollTop();
      $("body").addClass("popup-open");
    });
  
    $(".close, .popup-overlay .close").on("click", function() {
      $("body").removeClass("popup-open");
      $(window).scrollTop(scrollPosition);
    });
  
    $(".movilview").on("click", function() {
      scrollPosition = $(window).scrollTop();
      $("body").addClass("popup-open");
      $(".prevmovil").css("display", "flex");
    });
  
    $(".movilviewc").on("click", function() {
      $("body").removeClass("popup-open");
      $(window).scrollTop(scrollPosition);
      $(".prevmovil").css("display", "none");
    });
  
    // Verifica si la URL contiene "#preview" al cargar la página
    if (window.location.hash === "#libroprev") {
      scrollPosition = $(window).scrollTop();
      $(".prevmovil").css("display", "flex");
      $("body").addClass("popup-open");
    }
  });