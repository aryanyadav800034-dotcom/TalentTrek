
// main.js — minimal, readable helpers
document.addEventListener('DOMContentLoaded', function(){
  // simple form handlers for demo (no backend)
  const postForm = document.getElementById('post-form');
  if(postForm){
    postForm.addEventListener('submit', function(e){
      e.preventDefault();
      const title = postForm.title.value || 'Untitled project';
      const msg = document.getElementById('msg');
      msg.innerHTML = '<div class="p-3 bg-primary/10 rounded">Project "' + title + '" created (demo). Redirecting to Dashboard...</div>';
      setTimeout(()=> location.href='dashboard.html', 900);
    });
  }

  const loginForm = document.getElementById('login-form');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      // demo: just go to dashboard
      location.href='dashboard.html';
    });
  }

  const applyBtn = document.getElementById('apply-btn');
  if(applyBtn){
    applyBtn.addEventListener('click', function(){
      alert('Application submitted (demo).');
      location.href = 'dashboard.html';
    });
  }

  const pwToggle = document.getElementById('pw-toggle');
  if(pwToggle){
    pwToggle.addEventListener('click', function(){
      const pw = document.getElementById('pw');
      if(!pw) return;
      if(pw.type === 'password'){ pw.type='text'; pwToggle.textContent='Hide'; }
      else { pw.type='password'; pwToggle.textContent='Show'; }
    });
  }

});
