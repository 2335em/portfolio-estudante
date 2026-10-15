(function(){
  'use strict';
  var menuButton=document.getElementById('menu-toggle');
  var mobileNav=document.getElementById('mobile-nav');
  if(menuButton&&mobileNav){
    menuButton.addEventListener('click',function(){
      var isOpen=menuButton.getAttribute('aria-expanded')==='true';
      menuButton.setAttribute('aria-expanded',String(!isOpen));
      menuButton.setAttribute('aria-label',isOpen?'Abrir menu':'Fechar menu');
      mobileNav.hidden=isOpen;
    });
    mobileNav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');});});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}});
  }
  document.querySelectorAll('[data-detail]').forEach(function(button){
    button.addEventListener('click',function(){
      var key=button.getAttribute('data-detail');
      var panel=document.getElementById('detail-'+key);
      if(!panel)return;
      var opening=panel.hidden;
      panel.hidden=!opening;
      button.setAttribute('aria-expanded',String(opening));
      button.firstChild.textContent=opening?'Ocultar detalhes ':'Detalhes do projeto ';
    });
  });
  var emailButton=document.getElementById('copy-email');
  if(emailButton){emailButton.addEventListener('click',function(){
    if(!navigator.clipboard||!navigator.clipboard.writeText){window.location.href='mailto:emilian.ms15@gmail.com';return;}
    navigator.clipboard.writeText('emilian.ms15@gmail.com').then(function(){emailButton.firstChild.textContent='E-mail copiado ';window.setTimeout(function(){emailButton.firstChild.textContent='Copiar e-mail ';},2200);}).catch(function(){window.location.href='mailto:emilian.ms15@gmail.com';});
  });}
  var year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
})();