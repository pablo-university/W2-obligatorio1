// Probando reveal
//https://scrollrevealjs.org/api/duration.html

/* Esta biblioteca esta muy buena tmbn ya que podes
 nombrar la animación por css es re prolija y puntual
 https://animate.style/#utilities */


// animo elemento interno de mis contenedores
ScrollReveal().reveal('header >*, section >*, footer >*', { 
    delay: 10,
    duration: 1000, reset:true
 });