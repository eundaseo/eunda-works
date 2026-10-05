const page=document.body.dataset.page;
const {routes,profile,items,liveCompanies=[]}=window.PORTFOLIO_DATA;
let saved=[];try{saved=JSON.parse(localStorage.getItem('blue-basket-saved')||'[]');if(!Array.isArray(saved))saved=[]}catch{}saved=saved.filter(id=>items.some(x=>x.id===id));
const header=`<header class="header"><button class="saved" id="show-saved" aria-label="관심 작품 보기">♡ <span>My picks</span><b id="saved-count">${saved.length}</b></button></header>`;
const footer=`<dialog id="detail"><button class="close" aria-label="닫기">×</button><div class="modal-body"></div></dialog>`;
document.getElementById('app').innerHTML=header+(page==='home'?'':'<main class="wrap" id="page-content"></main>')+footer;
const heart=id=>`<button class="heart" data-save="${id}" aria-label="${items.find(x=>x.id===id).title} 관심 작품 저장" aria-pressed="${saved.includes(id)}"><svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20S3 14.5 3 8.5a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1C21 14.5 12 20 12 20Z"/></svg></button>`;
function heading(eng,ko,desc,count){return `<section class="page-heading"><div class="eyebrow">HOME / ${eng}</div><div class="head-row"><div><h1>${ko}</h1><p>${desc}</p></div><span class="item-count">${count} ITEMS · CURATED BY ME</span></div></section>`}
const lineBreaks=value=>value.replace(/\n/g,'<br>');
function commercialWork(x){
  return `<article class="commercial-work">
    <header class="commercial-title"><div><div class="eyebrow">${x.client} <span>／ ${x.date}</span></div><h2>${x.title}</h2><p>${x.desc}</p></div>${heart(x.id)}</header>
    <div class="commercial-video" data-video-frame>
      <button class="commercial-play" data-play-video="${x.youtubeId}" aria-label="${x.title} 영상 재생">
        <img src="https://i.ytimg.com/vi/${x.youtubeId}/maxresdefault.jpg" alt="29CM × 재지팩트 Lifes Like 10주년 굿즈 티저 영상 썸네일" referrerpolicy="no-referrer" decoding="async">
        <span class="commercial-play-disc" aria-hidden="true">▶</span><span class="commercial-play-label">PLAY FILM</span>
      </button>
    </div>
    <div class="commercial-video-caption"><span>${x.tag} · ${x.date}</span><a href="${x.videoUrl}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div>
    <div class="commercial-overview">
      <section class="commercial-summary"><div class="eyebrow">01 / SUMMARY</div><h3>제작 목적</h3><p>${x.summary}</p></section>
      <section class="commercial-role"><div class="eyebrow">02 / ROLE & CONTRIBUTION</div><h3>담당 역할과 기여도</h3><p>${x.roles.join(' · ')}</p><dl class="contribution-list">${x.contributions.map(c=>`<div><dt>${c.label}</dt><dd><span class="contribution-track" aria-hidden="true"><span style="width:${c.percent}%"></span></span><span>${c.percent}%</span></dd></div>`).join('')}</dl></section>
    </div>
    <section class="commercial-execution"><div class="eyebrow">03 / EXECUTION</div><h3>연출과 편집</h3><div class="execution-grid">${x.execution.map((text,i)=>`<div><span class="execution-number">0${i+1}</span><p>${text}</p></div>`).join('')}</div></section>
    <section class="commercial-results"><div><div class="eyebrow">04 / RESULTS</div><h3>활용 및 성과</h3><ul>${x.results.map(text=>`<li>${text}</li>`).join('')}</ul></div><div class="commercial-metric"><span>${x.revenueLabel}</span><strong>${x.revenue}</strong></div></section>
    <section class="commercial-tools"><span class="eyebrow">05 / TOOLS</span><ul>${x.tools.map(tool=>`<li>${tool}</li>`).join('')}</ul></section>
  </article>`;
}
function liveVideo(x){
  // Highlight URLs are added later; until then the capture stays as a quiet placeholder.
  if(!x.youtubeId)return `<div class="live-highlight"><div class="commercial-video live-vertical-video live-video-pending"><img src="${x.image}" alt="${x.title} 라이브 방송 캡처"><span class="live-pending-label"><small>LIVE HIGHLIGHT</small>영상 준비 중</span></div><div class="commercial-video-caption"><span>방송 하이라이트 · 추후 업데이트</span></div></div>`;
  return `<div class="live-highlight"><div class="commercial-video live-vertical-video" data-video-frame><button class="commercial-play" data-play-video="${x.youtubeId}" aria-label="${x.title} 하이라이트 영상 재생"><img src="${x.image}" alt="${x.title} 라이브 방송 캡처"><span class="commercial-play-disc" aria-hidden="true">▶</span><span class="commercial-play-label">LIVE HIGHLIGHT</span></button></div><div class="commercial-video-caption"><span>방송 하이라이트 · Shorts</span><a href="${x.videoUrl}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div></div>`;
}
function liveWork(x){
  return `<article class="commercial-work live-work" data-live-work="${x.id}">
    <header class="commercial-title"><div><div class="eyebrow">${x.employer} ／ ${x.client} ／ ${x.date}</div><h2>${x.title}</h2><p>${x.desc}</p></div>${heart(x.id)}</header>
    <div class="live-lead">
      ${liveVideo(x)}
      <section class="live-context"><div class="eyebrow">01 / BACKGROUND</div><h3>방송 기획 의도</h3><p>${x.summary}</p><div class="live-metrics">${x.metrics.map(m=>`<div><span>${m.label}</span><strong>${m.value}</strong><small>${m.note}</small></div>`).join('')}</div></section>
    </div>
    <section class="live-role"><div class="eyebrow">02 / ROLE</div><h3>담당 역할</h3><ul>${x.roles.map(role=>`<li>${role}</li>`).join('')}</ul></section>
    <section class="commercial-execution"><div class="eyebrow">03 / EXECUTION</div><h3>기획과 현장 연출</h3><div class="execution-grid">${x.execution.map((e,i)=>`<div><span class="execution-number">0${i+1}</span>${e.title?`<h4>${e.title}</h4>`:''}<p>${e.text||e}</p></div>`).join('')}</div></section>
    <section class="live-gallery"><div class="eyebrow">04 / ON AIR</div><h3>방송 캡처</h3><div class="live-stills">${x.gallery.map(g=>`<figure><a href="${g.src}" target="_blank" rel="noopener" aria-label="${g.caption} 원본 캡처 크게 보기"><img src="${g.src}" alt="${g.caption}" loading="lazy" decoding="async"></a><figcaption>${g.caption}<span aria-hidden="true"> ↗</span></figcaption></figure>`).join('')}</div></section>
    ${x.pressImage?`<details class="live-press"><summary>협업 컬렉션 완판 관련 기사 캡처 보기</summary><p>방송 이후 협업 컬렉션과 완판 소식을 소개한 기사 캡처입니다.</p><a href="${x.pressImage}" target="_blank" rel="noopener" aria-label="기사 캡처 크게 보기"><img src="${x.pressImage}" alt="${x.title} 협업 컬렉션 완판 기사 캡처" loading="lazy"></a></details>`:''}
  </article>`;
}
const isShowcase=x=>liveCompanies.find(c=>c.id===x.employer)?.layout==='showcase';
function liveCard(x,i){
  const action=isShowcase(x)?`data-live-jump="${x.id}"`:`data-open="${x.id}" aria-haspopup="dialog"`;
  return `<button type="button" class="live-card" ${action} aria-label="${x.title} 방송 상세 보기">
    <span class="live-card-thumb"><img src="${x.image}" alt="" loading="lazy" decoding="async"><span class="live-card-no">0${i+1}</span></span>
    <span class="live-card-body"><span class="live-card-meta">${x.tag} · ${x.date}</span><strong class="live-card-title">${x.title}</strong><span class="live-card-desc">${x.desc}</span>
    <span class="live-card-metrics">${x.metrics.slice(0,2).map(m=>`<span><small>${m.label}</small><b>${m.value}</b></span>`).join('')}</span>
    <span class="live-card-more">자세히 보기 <span aria-hidden="true">↗</span></span></span>
  </button>`;
}
function liveSelected(list){
  return `<section class="live-selected"><div class="live-subhead"><h3>Selected Live Projects</h3><span>그 외 주요 라이브 · 눌러서 펼쳐보기</span></div><div class="live-selected-list">${list.map(s=>`<details class="live-selected-item"><summary><span class="live-selected-date">${s.date}</span><strong>${s.title}</strong><span class="live-selected-metrics">${s.metrics.map(m=>`<span><small>${m.label}</small><b>${m.value}</b><em>${m.note}</em></span>`).join('')}</span><span class="live-selected-toggle" aria-hidden="true"></span></summary><div class="live-selected-detail${s.image?'':' no-image'}"><ul>${s.points.map(t=>`<li>${t}</li>`).join('')}</ul>${s.image?`<img src="${s.image}" alt="${s.title} 라이브 방송 캡처" loading="lazy" decoding="async">`:''}</div></details>`).join('')}</div></section>`;
}
function liveShowcase(x,i){
  const phones=x.mockups.map((src,n)=>`<span class="phone-mockup${x.mockups.length>1&&n===Math.floor(x.mockups.length/2)?' is-front':''}"><img src="${src}" alt="${x.title} 라이브 방송 캡처 ${n+1}" loading="lazy" decoding="async"></span>`).join('');
  return `<article class="live-showcase" id="${x.id}" data-live-work="${x.id}">
    <div class="live-showcase-phones phones-${x.mockups.length}">${phones}</div>
    <div class="live-showcase-copy">
      <div class="eyebrow">대표방송 0${i+1} ／ ${x.date}</div><p class="live-showcase-tagline">${x.desc}</p><h3>${x.title}</h3>
      <section><h4>Background</h4><p>${x.summary}</p></section>
      <section><h4>Role</h4><p>${x.roles.join(', ')}</p></section>
      <section><h4>Execution</h4><ul>${x.execution.map(e=>`<li>${e.text||e}</li>`).join('')}</ul></section>
      <section class="live-showcase-results"><h4>Results</h4><ul>${x.results.map(t=>`<li>${t}</li>`).join('')}</ul></section>
    </div>
  </article>`;
}
function liveCompany(c,works){
  const showcase=c.layout==='showcase';
  const list=showcase?works.map(liveShowcase).join(''):`<div class="live-card-grid">${works.map(liveCard).join('')}</div>`;
  return `<section class="live-company" data-live-company="${c.id}" hidden>
    <header class="live-company-intro"><div><div class="eyebrow">${c.eng} / ${c.period}</div><h2>${c.name}</h2><p class="live-company-tagline">${c.tagline}</p><p>${c.summary}</p></div><dl class="live-company-stats">${c.stats.map(st=>`<div><dt>${st.label}</dt><dd>${st.value}</dd></div>`).join('')}</dl></header>
    <div class="live-company-meta"><div><span class="eyebrow">ROLE</span><p>${c.role}</p></div><div><span class="eyebrow">TOOLS</span><ul>${c.tools.map(t=>`<li>${t}</li>`).join('')}</ul></div></div>
    ${works.length?`<section class="live-featured"><div class="live-subhead"><h3>대표 방송</h3><span>${String(works.length).padStart(2,'0')}편${showcase?'':' · 카드를 누르면 상세 내용이 열려요'}</span></div>${list}</section>`:''}
    ${c.selected?.length?liveSelected(c.selected):''}
  </section>`;
}
// 전체: a short summary per company with a few highlights, linking to each company's full view.
function liveOverview(companies,works){
  return `<div class="live-overview" data-live-company="전체">${companies.map(c=>{
    const own=works.filter(x=>x.employer===c.id);
    const featured=own.filter(x=>x.featured);
    const picks=(featured.length?featured:own).slice(0,3);
    const count=own.length+(c.selected?.length||0);
    return `<section class="live-overview-company">
      <header class="live-overview-head"><div><div class="eyebrow">${c.eng} / ${c.period}</div><h2>${c.name}</h2><p>${c.tagline}</p></div><dl>${c.stats.map(st=>`<div><dt>${st.label}</dt><dd>${st.value}</dd></div>`).join('')}</dl></header>
      <div class="live-card-grid live-card-grid-3">${picks.map(liveCard).join('')}</div>
      <button type="button" class="live-more" data-live-filter="${c.id}"><span><strong>${c.name} 전체 보기</strong><small>방송 ${count}개 · 기획 의도와 성과까지</small></span><b aria-hidden="true">→</b></button>
    </section>`;}).join('')}</div>`;
}
function filterLive(company,scroll=true){
  document.querySelectorAll('.live-company-toolbar [data-live-filter]').forEach(button=>{const active=button.dataset.liveFilter===company;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('#live-companies>[data-live-company]').forEach(section=>{section.hidden=section.dataset.liveCompany!==company;});
  if(scroll)document.querySelector('.live-company-toolbar')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function jumpToLive(id){
  const x=items.find(item=>item.id===id);if(!x)return;
  filterLive(x.employer,false);
  requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}));
}
function aiWork(x){
  return `<article class="commercial-work ai-work" data-ai-category="${x.tag}">
    <header class="commercial-title"><div><div class="eyebrow">${x.projectKind} ／ ${x.tag} ／ ${x.date}</div><h2>${x.title}</h2><p>${x.subtitle}</p></div>${heart(x.id)}</header>
    <div class="ai-character-intro"><img src="${x.image}" alt="무지개 사탕을 든 아기 백호 김호덕"><div><span class="ai-handle">${x.handle}</span><p>${x.desc}</p><span class="ai-contribution">제작 기여도 ${x.contribution}</span>${x.channels?.length?`<nav class="ai-channel-links" aria-label="${x.title} 채널">${x.channels.map(channel=>`<a href="${channel.url}" target="_blank" rel="noopener noreferrer" aria-label="${x.title} ${channel.label} 채널 (새 탭)">${channel.label} <span aria-hidden="true">↗</span></a>`).join('')}</nav>`:''}</div></div>
    <section class="ai-videos"><div class="eyebrow">01 / SHORTS</div><h3>김호덕의 음식 탐구</h3><div class="ai-episodes">${x.videos.map((v,i)=>`<article class="ai-episode"><div class="ai-episode-title"><span>EP. 0${i+1}</span><h4>${v.label}</h4></div><div class="commercial-video live-vertical-video" data-video-frame><button class="commercial-play ${v.poster.startsWith('http')?'ai-youtube-poster':''}" data-play-video="${v.youtubeId}" aria-label="김호덕 ${v.label} 영상 재생"><img src="${v.poster}" alt="김호덕 ${v.label} 영상 썸네일" decoding="async"><span class="commercial-play-disc" aria-hidden="true">▶</span><span class="commercial-play-label">PLAY SHORTS</span></button></div><a class="ai-youtube-link" href="${v.url}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></article>`).join('')}</div></section>
    <section class="ai-overview"><div class="eyebrow">02 / OVERVIEW</div><h3>캐릭터와 콘텐츠 기획</h3><p>${x.summary}</p><a href="${x.characterSheet}" target="_blank" rel="noopener" aria-label="김호덕 캐릭터 시트 크게 보기"><img class="ai-character-sheet" src="${x.characterSheet}" alt="김호덕의 정면, 측면, 뒷모습, 앉은 자세, 표정과 사탕을 든 모습" loading="lazy"></a></section>
    <section class="live-role"><div class="eyebrow">03 / ROLE</div><h3>담당 역할</h3><ul>${x.roles.map(role=>`<li>${role}</li>`).join('')}</ul></section>
    <section class="commercial-execution"><div class="eyebrow">04 / PROCESS & TOOLS</div><h3>AI와 함께 만든 제작 과정</h3><div class="execution-grid">${x.process.map((step,i)=>`<div><div class="ai-process-top"><span class="execution-number">0${i+1}</span><span class="ai-tool">${step.tool}</span></div><h4>${step.title}</h4><p>${step.text}</p></div>`).join('')}</div></section>
    <section class="ai-stills-section"><div class="eyebrow">05 / SCENE STUDY</div><h3>알사탕 에피소드 장면</h3><div class="ai-stills">${x.gallery.map(g=>`<figure><a href="${g.src}" target="_blank" rel="noopener" aria-label="${g.caption} 크게 보기"><img src="${g.src}" alt="${g.caption}" loading="lazy"></a><figcaption>${g.caption} ↗</figcaption></figure>`).join('')}</div></section>
  </article>`;
}
function resetVideoPreviews(root){
  root.querySelectorAll('[data-video-frame]').forEach(frame=>{if(frame.querySelector('iframe')&&frame._videoPreview)frame.replaceChildren(frame._videoPreview.cloneNode(true));});
}
function filterAi(category){
  document.querySelectorAll('[data-ai-filter]').forEach(button=>{const active=button.dataset.aiFilter===category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('#ai-works [data-ai-category]').forEach(work=>{work.hidden=category!=='전체'&&work.dataset.aiCategory!==category;if(work.hidden)resetVideoPreviews(work);else count++;});
  document.getElementById('ai-empty').hidden=count>0;
  document.getElementById('ai-count').textContent=`${count}개의 프로젝트`;
}
function playPortfolioVideo(button){
  const ai=button.closest('.ai-work');
  if(ai)resetVideoPreviews(ai);

  const frame=button.closest('[data-video-frame]');
  frame._videoPreview=button.cloneNode(true);
  const iframe=document.createElement('iframe');
  iframe.src=`https://www.youtube-nocookie.com/embed/${button.dataset.playVideo}?autoplay=1&rel=0`;
  iframe.title=button.getAttribute('aria-label');
  iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy='strict-origin-when-cross-origin';
  iframe.allowFullscreen=true;
  frame.replaceChildren(iframe);
  iframe.focus();
}
// Contact messages are relayed by FormSubmit; the first message sends an activation mail to profile.email.
function setupContactForm(){
  const dialog=document.getElementById('contact-dialog');
  const form=document.getElementById('contact-form');
  const status=form.querySelector('.contact-status');
  const submit=form.querySelector('.contact-submit');
  document.querySelectorAll('[data-contact-open]').forEach(button=>button.addEventListener('click',()=>{dialog.showModal();form.elements.name.focus();}));
  dialog.querySelectorAll('[data-contact-close]').forEach(button=>button.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(!form.checkValidity()){status.dataset.state='error';status.textContent='이름, 이메일, 문의 내용을 확인해주세요.';form.querySelector(':invalid').focus();return;}
    const data=Object.fromEntries(new FormData(form));
    submit.disabled=true;status.dataset.state='';status.textContent='보내는 중…';
    try{
      const response=await fetch(`https://formsubmit.co/ajax/${profile.email}`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({...data,_subject:`[eunda works] ${data.type} 문의 · ${data.name}`,_replyto:data.email,_template:'table',_captcha:'false'})});
      const result=await response.json().catch(()=>({}));
      if(!response.ok||String(result.success)==='false')throw new Error(result.message||response.status);
      form.reset();status.dataset.state='done';status.textContent='문의가 전송되었어요. 확인 후 회신드릴게요!';
    }catch{
      status.dataset.state='error';status.innerHTML=`전송하지 못했어요. <a href="mailto:${profile.email}">${profile.email}</a>로 직접 보내주세요.`;
    }finally{submit.disabled=false;}
  });
}
function renderPage(){const target=document.getElementById('page-content');if(!target)return;
if(page==='introduce'){
  target.classList.add('universe-page');
  target.innerHTML=`<section class="universe-hero"><div class="universe-intro"><div class="eyebrow">MY UNIVERSE / ABOUT & EXPERIENCE</div><div class="universe-name"><span>${profile.name}</span><span>${profile.englishName}</span></div><h1>${lineBreaks(profile.headline)}</h1><p>${profile.summary}</p><a class="universe-contact-jump" href="#contact">함께 작업하기 <span aria-hidden="true">↓</span></a></div><figure class="universe-portrait"><img src="${profile.image}" alt="노트북을 들고 있는 서다은의 캐릭터 프로필 이미지"><figcaption><span>${profile.englishName}</span><span>${profile.birth}</span></figcaption></figure></section>
  <section class="universe-metrics" aria-label="제작 경험">${profile.metrics.map(m=>`<div><strong>${m.value}</strong><span>${m.label}</span></div>`).join('')}</section>
  <section class="universe-section"><div class="universe-section-title"><span class="eyebrow">01 / WHAT I DO</span><h2>아이디어를 콘텐츠로, 콘텐츠를 경험으로.</h2><p>${profile.detail}</p></div><div class="universe-capabilities">${profile.capabilities.map((c,i)=>`<article><span class="universe-card-number">0${i+1}</span><h3>${c.title}</h3><ul>${c.list.map(task=>`<li>${task}</li>`).join('')}</ul></article>`).join('')}</div><div class="universe-tools"><div><span class="eyebrow">PRODUCTION TOOLS</span><ul>${profile.tools.map(t=>`<li>${t}</li>`).join('')}</ul></div><div><span class="eyebrow">AI WORKFLOW</span><ul>${profile.aiTools.map(t=>`<li>${t}</li>`).join('')}</ul></div></div></section>
  <section class="universe-section"><div class="universe-section-title"><span class="eyebrow">02 / CAREER</span><h2>문화에서 패션, 커머스까지.</h2><p>다양한 브랜드와 플랫폼에서 쌓아온 콘텐츠 제작 경험입니다.</p></div><div class="universe-career">${profile.career.map(c=>`<article><div class="universe-career-meta"><span class="universe-period">${c.period}</span><h3>${c.company}</h3><p>${c.team} · ${c.role}</p></div><ul>${c.tasks.map(task=>`<li>${task}</li>`).join('')}</ul></article>`).join('')}</div></section>
  <section class="universe-section"><div class="universe-section-title"><span class="eyebrow">03 / FREELANCE WORK</span><h2>함께 만든 프로젝트들.</h2></div><div class="universe-freelance">${profile.freelance.map(f=>`<article><span class="universe-period">${f.period}</span><div><h3>${f.title}</h3><p>${f.role}</p></div></article>`).join('')}</div></section>
  <section id="contact" class="universe-contact"><div><div class="eyebrow">04 / CONTACT</div><h2>다음 이야기를<br>함께 만들어볼까요?</h2><p>영상 제작과 라이브 기획·연출, 새로운 콘텐츠 협업 제안을 기다립니다.</p></div><div class="universe-contact-action"><a class="universe-email" href="mailto:${profile.email}">${profile.email}</a><button type="button" class="universe-mail-button" data-contact-open><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>문의 보내기 <span aria-hidden="true">↗</span></button></div></section>
  <dialog id="contact-dialog" class="contact-dialog" aria-labelledby="contact-title"><button type="button" class="close" data-contact-close aria-label="닫기">×</button>
    <form id="contact-form" class="contact-form" novalidate>
      <div class="eyebrow">NEW MESSAGE</div><h2 id="contact-title">협업 문의</h2><p class="contact-lead">남겨주신 내용은 ${profile.email}로 바로 전달됩니다.</p>
      <div class="contact-row"><label><span>이름 <b aria-hidden="true">*</b></span><input name="name" autocomplete="name" required maxlength="60"></label><label><span>회사 / 소속</span><input name="company" autocomplete="organization" maxlength="80"></label></div>
      <label><span>회신받을 이메일 <b aria-hidden="true">*</b></span><input name="email" type="email" autocomplete="email" required maxlength="120"></label>
      <label><span>문의 유형</span><select name="type"><option>영상 제작</option><option>라이브커머스 기획·연출</option><option>AI 콘텐츠</option><option>채용 · 기타</option></select></label>
      <label><span>문의 내용 <b aria-hidden="true">*</b></span><textarea name="message" rows="5" required maxlength="3000" placeholder="프로젝트 내용, 일정, 예산 등을 자유롭게 적어주세요."></textarea></label>
      <input type="text" name="_honey" class="contact-honey" tabindex="-1" autocomplete="off" aria-hidden="true">
      <p class="contact-status" role="status" aria-live="polite"></p>
      <div class="contact-actions"><button type="button" class="contact-cancel" data-contact-close>취소</button><button type="submit" class="contact-submit">보내기</button></div>
    </form>
  </dialog>`;
  setupContactForm();
}
if(page==='image'){
  const works=items.filter(x=>x.type==='image');
  target.innerHTML=heading('PERSONAL AI WORKS','AI','AI로 상상을 구체화하는 개인작업과 실험.',String(works.length).padStart(2,'0'))+
    `<div class="live-company-toolbar"><div class="toolbar" aria-label="AI 작업 소카테고리">${['전체','캐릭터','영상','이미지','앱'].map((category,i)=>`<button class="filter ${i===0?'active':''}" data-ai-filter="${category}" aria-pressed="${i===0}">${category}</button>`).join('')}</div><span id="ai-count" role="status" aria-live="polite">${works.length}개의 프로젝트</span></div><section id="ai-works" aria-label="AI 개인작업">${works.map(aiWork).join('')}</section><p id="ai-empty" class="live-empty" hidden>아직 등록된 프로젝트가 없습니다.</p>`;
}
if(page==='Live'){
  const works=items.filter(x=>x.type==='Live').sort((a,b)=>(a.order||99)-(b.order||99));
  const companies=liveCompanies.filter(c=>works.some(x=>x.employer===c.id)||c.selected?.length);
  target.innerHTML=heading('LIVE COMMERCE','Live','콘텐츠 참여를 구매로 연결하는 라이브 기획과 연출.',String(works.length).padStart(2,'0'))+
  `<div class="live-company-toolbar"><div class="toolbar" aria-label="회사별 라이브 분류">${['전체',...companies.map(c=>c.id)].map((company,i)=>`<button class="filter ${i===0?'active':''}" data-live-filter="${company}" aria-pressed="${i===0}">${company}</button>`).join('')}</div></div>`+
  `<div id="live-companies">${liveOverview(companies,works)}${companies.map(c=>liveCompany(c,works.filter(x=>x.employer===c.id))).join('')}</div>`;
}
if(page==='project'){
  const works=items.filter(x=>x.type==='project');
  target.innerHTML=heading('COMMERCIAL FILMS','Commercial','브랜드의 이야기를 영상으로 만드는 작업들.',String(works.length).padStart(2,'0'))+works.map(commercialWork).join('');
}}

renderPage();
const dialog=document.getElementById('detail');const modal=dialog.querySelector('.modal-body');
function openItem(id){const x=items.find(x=>x.id===id);if(!x)return;dialog.classList.toggle('dialog-wide',x.type==='Live');if(x.type==='Live'&&page==='Live')history.replaceState(null,'',`#${id}`);modal.innerHTML=x.type==='image'&&x.videos?aiWork(x):x.type==='Live'?liveWork(x):x.youtubeId?commercialWork(x):`<div class="eyebrow">${x.tag}</div><h2>${x.title}</h2>${x.image?`<img src="${x.image}" alt="${x.title}">`:''}<p>${x.body}</p>`;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;}
function showSaved(){dialog.classList.remove('dialog-wide');modal.innerHTML='<div class="eyebrow">YOUR LITTLE COLLECTION</div><h2>My picks</h2>'+(!saved.length?'<p class="empty">아직 담은 작품이 없어요.<br>컬렉션에서 마음에 드는 작품의 ♡를 눌러보세요.</p>':saved.map(id=>{const x=items.find(x=>x.id===id);return `<div class="saved-row"><button data-open="${id}">${x.title} ↗</button><button data-remove="${id}" aria-label="${x.title} 저장 취소">삭제</button></div>`}).join(''))+'<p class="sample-note">관심 작품은 이 브라우저에 저장됩니다.</p>';if(!dialog.open)dialog.showModal();}
function toggleSave(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('blue-basket-saved',JSON.stringify(saved))}catch{}document.getElementById('saved-count').textContent=saved.length;document.querySelectorAll('[data-save]').forEach(b=>{const active=saved.includes(b.dataset.save);b.setAttribute('aria-pressed',active)});}
document.addEventListener('click',e=>{const play=e.target.closest('[data-play-video]');if(play)playPortfolioVideo(play);const aiFilter=e.target.closest('[data-ai-filter]');if(aiFilter)filterAi(aiFilter.dataset.aiFilter);const company=e.target.closest('[data-live-filter]');if(company)filterLive(company.dataset.liveFilter);const jump=e.target.closest('[data-live-jump]');if(jump)jumpToLive(jump.dataset.liveJump);const open=e.target.closest('[data-open]');if(open)openItem(open.dataset.open);const save=e.target.closest('[data-save]');if(save)toggleSave(save.dataset.save);const remove=e.target.closest('[data-remove]');if(remove){toggleSave(remove.dataset.remove);showSaved()}const filter=e.target.closest('[data-filter]');if(filter){document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===filter);b.setAttribute('aria-pressed',b===filter)});document.querySelectorAll('[data-tag]').forEach(x=>x.classList.toggle('hidden',filter.dataset.filter!=='전체'&&x.dataset.tag!==filter.dataset.filter))}});
document.getElementById('show-saved').addEventListener('click',showSaved);dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{modal.replaceChildren();if(location.hash)history.replaceState(null,'',location.pathname+location.search);});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});

// A shared link such as Live.html#live-musinsa-satur opens that broadcast directly.
if(page==='Live'&&location.hash){const x=items.find(x=>x.type==='Live'&&x.id===location.hash.slice(1));if(x){if(isShowcase(x))jumpToLive(x.id);else openItem(x.id);}}

if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();
 const registrations=[{name:'list_portfolio_projects',description:'Read the portfolio projects and which ones are saved in this browser.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute(){return items.map(({id,title,type})=>({id,title,type,saved:saved.includes(id)}))}},{name:'set_saved_project',description:'Save or remove a portfolio project in this browser and update the visible My picks count.',inputSchema:{type:'object',properties:{id:{type:'string'},saved:{type:'boolean'}},required:['id','saved'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||typeof input.saved!=='boolean'||!items.some(x=>x.id===input.id))throw new Error('A valid project id and boolean saved value are required.');if(saved.includes(input.id)!==input.saved)toggleSave(input.id);return {id:input.id,saved:saved.includes(input.id),count:saved.length};}}];
 for(const tool of registrations){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}}
 window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
