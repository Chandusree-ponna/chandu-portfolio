(function(){
  function fillBars(scope){
    (scope||document).querySelectorAll('.pf-bar-fill').forEach(function(el){
      el.style.width = (el.getAttribute('data-level')||0)+'%';
    });
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in');
        if(e.target.querySelector){ fillBars(e.target); }
        if(e.target.classList.contains('pf-bar-fill')){ e.target.style.width=(e.target.getAttribute('data-level')||0)+'%'; }
        io.unobserve(e.target);} });
    },{threshold:.15,rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
    document.querySelectorAll('.pf-bar-fill').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    fillBars();
  }
})();
