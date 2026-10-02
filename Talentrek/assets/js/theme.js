
// theme.js - very small theme persistence + toggle
(function(){
  const btn = document.getElementById('theme-toggle');
  function applyTheme(t){
    if(t === 'dark'){
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#101722';
      document.body.style.color = '#f5f7f8';
    } else {
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
    localStorage.setItem('talentrektheme', t);
  }
  // initial
  const saved = localStorage.getItem('talentrektheme') || 'light';
  applyTheme(saved);
  if(btn){
    btn.addEventListener('click', function(){
      const next = (localStorage.getItem('talentrektheme') === 'dark') ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();
