/* Desktop presentation uses the existing portfolio data and actions. */
(() => {
  const icon = name => `<img class="desktop-category-icon" src="assets/icon-${name}.svg" alt="" aria-hidden="true">`;
  const icons = {home:icon('orbit'),introduce:icon('universe'),Live:icon('live'),project:icon('commercial'),image:icon('ai')};
  const current = routes.find(([id]) => id === page);
  const title = current ? current[1] : 'eunda works';
  const app = document.getElementById('app');
  // A native star cursor remains usable without the decorative trail.
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const trail = document.createElement('div');
  trail.className = 'star-cursor-trail';
  trail.setAttribute('aria-hidden', 'true');
  document.body.append(trail);
  let lastSparkle = 0;
  document.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches) return;
    const now = performance.now();
    if (now - lastSparkle < 55 || trail.childElementCount >= 18) return;
    lastSparkle = now;
    const star = document.createElement('span');
    star.className = 'cursor-sparkle';
    star.style.cssText = `left:${event.clientX}px;top:${event.clientY}px;--size:${8 + Math.random()*8}px;--drift:${Math.random()*16-8}px`;
    trail.append(star);
    star.addEventListener('animationend', () => star.remove(), {once:true});
    // Also clean up in case a preference change cancels an animation.
    setTimeout(() => star.remove(), 900);
  }, {passive:true});
  const content = document.createElement('div');
  content.className = 'window-content';
  if (page === 'home') {
    content.innerHTML = `<main class="space-home"><div class="space-caption">PERSONAL UNIVERSE · EST. 2026</div><div class="welcome"><p class="welcome-small">Welcome to my little universe</p><h1>eunda <span>works</span></h1><p class="welcome-copy">커머스의 시선으로 탐험하는 AI의 가능성.<br>작은 호기심으로 시작된 작업들을 만나보세요.</p></div><nav class="planet-links" aria-label="컬렉션 선택">${routes.map(([id,name,eng],i)=>`<a href="${id}.html"><span class="planet-icon" aria-hidden="true">${icons[id]}</span><strong>${name}</strong><small>0${i+1} / ${eng}</small><span class="open-label">OPEN ↗</span></a>`).join('')}</nav><div class="space-foot"><span>SELECT A COLLECTION TO EXPLORE</span><span>한국경제 AI 교육 포트폴리오</span></div></main>`;
  } else {
    content.append(document.getElementById('page-content'));
  }
  app.querySelectorAll('.announcement,.header,.hero,.ticker,.collection,.intro-strip,.footer').forEach(el=>el.remove());
  const top = document.createElement('header');
  top.className='desktop-menubar';
  top.innerHTML=`<nav aria-label="메인 메뉴">${routes.map(([id,name])=>`<a href="${id}.html" ${page===id?'aria-current="page"':''}>${name}</a>`).join('')}</nav><time id="desktop-clock"></time>`;
  const shortcuts=document.createElement('nav');
  shortcuts.className='desktop-shortcuts'; shortcuts.setAttribute('aria-label','바탕화면 바로가기');
  shortcuts.innerHTML=`${routes.map(([id,name])=>`<a href="${id}.html" ${page===id?'aria-current="page"':''}><span aria-hidden="true">${icons[id]}</span><strong>${name}</strong></a>`).join('')}`;
  const win=document.createElement('section');
  win.hidden=page==='home';
  win.className='desktop-window';win.id='portfolio-window';win.setAttribute('aria-label',title+' 창');
  win.innerHTML=`<div class="window-titlebar"><span class="window-app-icon" aria-hidden="true">${icons[page]||icons.home}</span><span class="window-title">${title}${current?' — eunda works':''}</span><div class="window-controls"><button data-window="minimize" aria-label="창 최소화"><svg class="window-control-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 11h10"/></svg></button><button data-window="maximize" aria-label="창 최대화" aria-pressed="false"><svg class="window-control-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 3h10v10H3z"/></svg></button><button data-window="close" aria-label="창 닫기"><svg class="window-control-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="m3 3 10 10M13 3 3 13"/></svg></button></div></div><div class="window-navigation"><a class="back-button" href="index.html" aria-label="홈으로">←</a><span class="address-label">Address</span><div class="address-field"><span aria-hidden="true">${icons.introduce}</span> eunda.works / ${page==='home'?'my-universe':page}<span class="address-arrow">▾</span></div></div>`;
  win.append(content);
  const status=document.createElement('div');status.className='window-status';
  status.innerHTML=`<span>${page==='home'?routes.length+' collections':page==='introduce'?'PROFILE FILE':items.filter(x=>x.type===page).length+' projects'} · ${title}</span><span>AI CREATIVE ARCHIVE</span><span class="status-grip" aria-hidden="true">◢</span>`;win.append(status);
  const taskbar=document.createElement('footer');taskbar.className='desktop-taskbar';
  taskbar.innerHTML=`<button class="start-button" id="start-button" aria-expanded="false" aria-controls="start-menu"><span aria-hidden="true">${icons.home}</span> START</button><div class="task-divider"></div><button class="task-tab active" id="restore-window" aria-controls="portfolio-window" aria-expanded="true">${icons[page]||icons.home} <span>${title}</span></button><button class="task-tab" id="show-saved" aria-label="관심 작품 보기">♡ <span>My picks</span> <b id="saved-count">${saved.length}</b></button><span class="taskbar-note">a little curiosity, a new world.</span><span class="system-tray" aria-label="온라인 포트폴리오">◉ <span>eunda works © 2026</span></span>`;
  const start=document.createElement('nav');start.id='start-menu';start.className='start-menu';start.hidden=true;start.setAttribute('aria-label','시작 메뉴');
  start.innerHTML=`<div class="start-banner">eunda <b>works</b></div><div>${routes.map(([id,name])=>`<a href="${id}.html">${icons[id]} ${name}</a>`).join('')}<button id="start-picks">♡ 관심 작품</button></div>`;
  app.prepend(top,shortcuts,win);app.append(start,taskbar);
  document.getElementById('show-saved').addEventListener('click',showSaved);
  const startButton=document.getElementById('start-button');
  const setStart=open=>{start.hidden=!open;startButton.setAttribute('aria-expanded',String(open));};
  startButton.addEventListener('click',()=>setStart(start.hidden));
  document.getElementById('start-picks').addEventListener('click',()=>{setStart(false);showSaved();});
  const restore=document.getElementById('restore-window');
  const setWindow=open=>{win.hidden=!open;restore.classList.toggle('active',open);restore.setAttribute('aria-expanded',String(open));if(!open)restore.focus();};
  restore.classList.toggle('active',!win.hidden);
  restore.setAttribute('aria-expanded',String(!win.hidden));
  restore.addEventListener('click',()=>setWindow(win.hidden));
  win.querySelector('[data-window="minimize"]').addEventListener('click',()=>setWindow(false));
  win.querySelector('[data-window="close"]').addEventListener('click',()=>setWindow(false));
  win.querySelector('[data-window="maximize"]').addEventListener('click',e=>{const max=win.classList.toggle('maximized');e.currentTarget.setAttribute('aria-pressed',String(max));e.currentTarget.setAttribute('aria-label',max?'창 크기 복원':'창 최대화');});
  document.addEventListener('click',e=>{if(!start.contains(e.target)&&!startButton.contains(e.target))setStart(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!start.hidden){setStart(false);startButton.focus();}});
  function tick(){const date=new Date();const clock=document.getElementById('desktop-clock');clock.dateTime=date.toISOString();clock.textContent=new Intl.DateTimeFormat('en-US',{weekday:'short',hour:'2-digit',minute:'2-digit',hour12:true}).format(date).toUpperCase();}
  tick();const timer=setInterval(tick,30000);window.addEventListener('pagehide',()=>clearInterval(timer),{once:true});
})();
