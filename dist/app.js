const page=document.body.dataset.page;
const {routes,heroImage,profile,items}=window.PORTFOLIO_DATA;
let saved=[];try{saved=JSON.parse(localStorage.getItem('blue-basket-saved')||'[]');if(!Array.isArray(saved))saved=[]}catch{}saved=saved.filter(id=>items.some(x=>x.id===id));
const header=`<div class="announcement">A PERSONAL COLLECTION OF IDEAS <span>✦</span> 한국경제 AI 교육 포트폴리오</div><header class="header"><a class="brand" href="index.html" aria-label="eunda works 홈"><span class="brand-star" aria-hidden="true">✧</span>eunda works<span class="brand-period">.</span></a><nav class="nav" aria-label="주 메뉴">${routes.map(([id,name])=>`<a href="${id}.html" ${page===id?'class="active" aria-current="page"':''}>${name}</a>`).join('')}</nav><button class="saved" id="show-saved" aria-label="관심 작품 보기">♡ <span>My picks</span><b id="saved-count">${saved.length}</b></button></header>`;
const footer=`<section class="intro-strip"><h2>좋아하는 것을 담고, 가능성을 발견해요.</h2><p>커머스의 시선으로 발견한 AI의 가능성.<br>한국경제 AI 교육에서 시작된 작은 실험들을 담습니다.</p></section><footer class="footer"><a href="index.html"><strong>eunda works.</strong></a><span>© 2026 eunda works. A collection of curiosities.</span><span>Made with curiosity & AI ✦</span></footer><dialog id="detail"><button class="close" aria-label="닫기">×</button><div class="modal-body"></div></dialog>`;
const typeArt='<div class="type-art"><small>NOTES & DISCOVERIES</small>Ideas<br><i>to go.</i><hr><em>A fresh perspective on AI.</em></div>';
const home=`<section class="hero"><div class="hero-inner wrap"><div class="hero-copy"><div class="eyebrow">CREATIVE ARCHIVE / VOL. 2026</div><h1>eunda<br><span class="serif">works</span><span class="title-star" aria-hidden="true">✧</span></h1><p>작은 호기심이 반짝이는 작업이 되기까지.<br>커머스의 시선으로 모은 AI 크리에이티브 아카이브.</p><a class="pill" href="#collections">컬렉션 둘러보기 <span>↗</span></a></div><div class="hero-art"><img src="${heroImage}" alt="파스텔 하늘 위로 떠 있는 투명한 유리 별과 작은 구슬"><div class="round-sticker">a little curiosity,<strong>a little magic.</strong></div><span class="art-caption">DAYDREAM STUDY — NO. 001</span></div></div></section><div class="ticker"><span>CURATED WITH CURIOSITY</span><i>✦</i><span>POWERED BY AI</span><i>✦</i><span>MADE FOR COMMERCE</span><i>✦</i><span>ALWAYS EXPLORING</span></div><section class="collection wrap" id="collections"><div class="section-top"><div><h2>Collected with <span class="serif">curiosity.</span></h2><p>지금, 어떤 영감을 담아볼까요?</p></div><span class="sample-label">04 COLLECTIONS · SAMPLE WORKS</span></div><div class="category-grid">${routes.map(([id,name,eng],i)=>`<a class="category-card" href="${id}.html"><div class="category-visual ${id}"><span class="cat-no">NO. 0${i+1}</span>${id==='article'?typeArt:id==='project'?'<div class="type-final">THE<br>FINAL<br><i>EDIT.</i><small>IDEAS INTO IMPACT</small></div>':`<img src="${heroImage}" alt="${id==='image'?'별빛과 파스텔 이미지 컬렉션':'브랜드 필름 키 비주얼'}" style="${id==='Live'?'object-position:70% center':''}">${id==='Live'?'<span class="play-disc">▷</span>':''}`}</div><div class="category-title"><h3>${name}</h3><span>↗</span></div><p>${eng} — ${['생각을 읽는 시간','취향을 발견하는 장면','움직임으로 전하는 이야기','배움이 하나의 프로젝트로'][i]}</p></a>`).join('')}</div></section>`;
document.getElementById('app').innerHTML=header+(page==='home'?home:'<main class="wrap" id="page-content"></main>')+footer;
const heart=id=>`<button class="heart" data-save="${id}" aria-label="${items.find(x=>x.id===id).title} 관심 작품 저장" aria-pressed="${saved.includes(id)}"><svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20S3 14.5 3 8.5a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1C21 14.5 12 20 12 20Z"/></svg></button>`;
function heading(eng,ko,desc,count){return `<section class="page-heading"><div class="eyebrow">HOME / ${eng}</div><div class="head-row"><div><h1>${ko}</h1><p>${desc}</p></div><span class="item-count">${count} ITEMS · CURATED BY ME</span></div></section>`}
function card(x){return `<article class="product" data-tag="${x.tag}">${heart(x.id)}<button class="product-open" data-open="${x.id}"><div class="product-picture"><img src="${x.image}" alt="${x.title}" style="object-position:${x.position||'center'};${x.id==='i2'?'transform:scale(1.45)':x.id==='i3'?'transform:scale(1.2)':''}"><span class="badge">${x.type==='Live'?'STORYBOARD':'AI GENERATED'}</span>${x.type==='Live'?'<span class="play-disc">▷</span><span class="duration">영상 기획안</span>':''}</div><div class="product-meta">${x.tag.toUpperCase()} / 2026</div><h3>${x.title}</h3><p class="product-desc">${x.desc}</p></button></article>`}
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
function liveWork(x){
  return `<article class="commercial-work live-work" data-live-company="${x.employer}" data-live-work="${x.id}">
    <header class="commercial-title"><div><div class="eyebrow">${x.employer} ／ ${x.client} ／ ${x.date}</div><h2>${x.title}</h2><p>${x.desc}</p></div>${heart(x.id)}</header>
    <div class="live-lead">
      <div class="live-highlight"><div class="commercial-video live-vertical-video" data-video-frame><button class="commercial-play" data-play-video="${x.youtubeId}" aria-label="${x.title} 하이라이트 영상 재생"><img src="${x.image}" alt="Mmlg 협업 상품을 착용한 해쭈의 라이브 방송 캡처"><span class="commercial-play-disc" aria-hidden="true">▶</span><span class="commercial-play-label">LIVE HIGHLIGHT</span></button></div><div class="commercial-video-caption"><span>방송 하이라이트 · Shorts</span><a href="${x.videoUrl}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div></div>
      <section class="live-context"><div class="eyebrow">01 / BACKGROUND</div><h3>방송 기획 의도</h3><p>${x.summary}</p><div class="live-metrics">${x.metrics.map(m=>`<div><span>${m.label}</span><strong>${m.value}</strong><small>${m.note}</small></div>`).join('')}</div></section>
    </div>
    <section class="live-role"><div class="eyebrow">02 / ROLE</div><h3>담당 역할</h3><ul>${x.roles.map(role=>`<li>${role}</li>`).join('')}</ul></section>
    <section class="commercial-execution"><div class="eyebrow">03 / EXECUTION</div><h3>기획과 현장 연출</h3><div class="execution-grid">${x.execution.map((e,i)=>`<div><span class="execution-number">0${i+1}</span><h4>${e.title}</h4><p>${e.text}</p></div>`).join('')}</div></section>
    <section class="live-gallery"><div class="eyebrow">04 / ON AIR</div><h3>방송 캡처</h3><div class="live-stills">${x.gallery.map(g=>`<figure><a href="${g.src}" target="_blank" rel="noopener" aria-label="${g.caption} 원본 캡처 크게 보기"><img src="${g.src}" alt="${g.caption}" loading="lazy" decoding="async"></a><figcaption>${g.caption}<span aria-hidden="true"> ↗</span></figcaption></figure>`).join('')}</div></section>
    <details class="live-press"><summary>협업 컬렉션 완판 관련 기사 캡처 보기</summary><p>방송 이후 협업 컬렉션과 완판 소식을 소개한 기사 캡처입니다.</p><a href="${x.pressImage}" target="_blank" rel="noopener" aria-label="기사 캡처 크게 보기"><img src="${x.pressImage}" alt="Mmlg X 해쭈 협업 컬렉션, 무신사 라이브 완판 기사 캡처" loading="lazy"></a></details>
  </article>`;
}
function filterLive(company){
  document.querySelectorAll('[data-live-filter]').forEach(button=>{const active=button.dataset.liveFilter===company;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('#live-works [data-live-company]').forEach(work=>{work.hidden=company!=='전체'&&work.dataset.liveCompany!==company;if(!work.hidden)count++;});
  document.getElementById('live-empty').hidden=count>0;
  document.getElementById('live-count').textContent=`${count}개의 방송`;
  document.getElementById('musinsa-experience').hidden=!['전체','무신사'].includes(company);
  // Hidden broadcasts should not continue playing in the background.
  document.querySelectorAll('#live-works [data-live-company][hidden] iframe').forEach(frame=>{const work=items.find(x=>x.id===frame.closest('[data-live-work]').dataset.liveWork);if(work){const holder=document.createElement('div');holder.innerHTML=liveWork(work);frame.closest('[data-video-frame]').replaceChildren(...holder.querySelector('[data-video-frame]').childNodes);}});
}
function aiWork(x){
  return `<article class="commercial-work ai-work" data-ai-category="${x.tag}">
    <header class="commercial-title"><div><div class="eyebrow">${x.projectKind} ／ ${x.tag} ／ ${x.date}</div><h2>${x.title}</h2><p>${x.subtitle}</p></div>${heart(x.id)}</header>
    <div class="ai-character-intro"><img src="${x.image}" alt="무지개 사탕을 든 아기 백호 김호덕"><div><span class="ai-handle">${x.handle}</span><p>${x.desc}</p><span class="ai-contribution">제작 기여도 ${x.contribution}</span></div></div>
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
function renderPage(){const target=document.getElementById('page-content');if(!target)return;
if(page==='introduce'){
  target.classList.add('universe-page');
  target.innerHTML=`<section class="universe-hero"><div class="universe-intro"><div class="eyebrow">MY UNIVERSE / ABOUT & EXPERIENCE</div><div class="universe-name"><span>${profile.name}</span><span>${profile.englishName}</span></div><h1>${lineBreaks(profile.headline)}</h1><p>${profile.summary}</p><a class="universe-contact-jump" href="#contact">함께 작업하기 <span aria-hidden="true">↘</span></a></div><figure class="universe-portrait"><div class="universe-portrait-crop"><img src="${profile.image}" alt="노트북을 들고 있는 서다은의 캐릭터 프로필 이미지"></div><figcaption><span>${profile.englishName}</span><span>${profile.birth}</span></figcaption></figure></section>
  <section class="universe-metrics" aria-label="제작 경험">${profile.metrics.map(m=>`<div><strong>${m.value}</strong><span>${m.label}</span></div>`).join('')}</section>
  <section class="universe-section"><div class="universe-section-title"><span class="eyebrow">01 / WHAT I DO</span><h2>아이디어를 콘텐츠로, 콘텐츠를 경험으로.</h2><p>${profile.detail}</p></div><div class="universe-capabilities">${profile.capabilities.map((c,i)=>`<article><span class="universe-card-number">0${i+1}</span><h3>${c.title}</h3><ul>${c.list.map(task=>`<li>${task}</li>`).join('')}</ul></article>`).join('')}</div><div class="universe-tools"><div><span class="eyebrow">PRODUCTION TOOLS</span><ul>${profile.tools.map(t=>`<li>${t}</li>`).join('')}</ul></div><div><span class="eyebrow">AI WORKFLOW</span><ul>${profile.aiTools.map(t=>`<li>${t}</li>`).join('')}</ul></div></div></section>
  <section class="universe-section"><div class="universe-section-title"><span class="eyebrow">02 / CAREER</span><h2>문화에서 패션, 커머스까지.</h2><p>다양한 브랜드와 플랫폼에서 쌓아온 콘텐츠 제작 경험입니다.</p></div><div class="universe-career">${profile.career.map(c=>`<article><div class="universe-career-meta"><span class="universe-period">${c.period}</span><h3>${c.company}</h3><p>${c.team} · ${c.role}</p></div><ul>${c.tasks.map(task=>`<li>${task}</li>`).join('')}</ul></article>`).join('')}</div></section>
  <section class="universe-section"><div class="universe-section-title"><span class="eyebrow">03 / FREELANCE WORK</span><h2>함께 만든 프로젝트들.</h2></div><div class="universe-freelance">${profile.freelance.map(f=>`<article><span class="universe-period">${f.period}</span><div><h3>${f.title}</h3><p>${f.role}</p></div></article>`).join('')}</div></section>
  <section id="contact" class="universe-contact"><div><div class="eyebrow">04 / CONTACT</div><h2>다음 이야기를<br>함께 만들어볼까요?</h2><p>영상 제작과 라이브 기획·연출, 새로운 콘텐츠 협업 제안을 기다립니다.</p></div><div class="universe-contact-action"><a class="universe-email" href="mailto:${profile.email}">${profile.email}</a><a class="universe-mail-button" href="mailto:${profile.email}"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>메일 보내기 <span aria-hidden="true">↗</span></a></div></section>`;
}
if(page==='article'){const a=items.filter(x=>x.type===page);target.innerHTML=heading('THE EDITORIAL / READING ROOM','Notes <span class="serif">& daydreams.</span>','커머스와 AI 사이, 새로운 관점과 작은 발견을 기록합니다.','03')+`<section class="editorial-feature"><div class="feature-art">${typeArt}</div><div><div class="eyebrow">EDITOR’S PICK · SAMPLE ARTICLE</div><h2>${a[0].title}</h2><p>고객은 더 이상 상품명만 검색하지 않습니다.<br>나의 취향을 이해하는 AI는 쇼핑의 순간을 어떻게 바꿀까요?</p><button class="pill" data-open="a1">기사 읽어보기 <span>↗</span></button></div></section><div class="section-top"><h2>Latest stories</h2><span class="sample-label">생각을 담은 세 편의 글</span></div><section class="article-list">${a.map((x,i)=>`<article class="article-row"><span>0${i+1}</span><div><button data-open="${x.id}"><h3>${x.title}</h3></button><p>${x.tag} · ${x.desc}</p></div><button data-open="${x.id}">읽어보기 ↗</button>${heart(x.id)}</article>`).join('')}</section>`;}
if(page==='image'){
  const works=items.filter(x=>x.type==='image');
  target.innerHTML=heading('PERSONAL AI WORKS','AI','AI로 상상을 구체화하는 개인작업과 실험.',String(works.length).padStart(2,'0'))+
    `<div class="live-company-toolbar"><div class="toolbar" aria-label="AI 작업 소카테고리">${['전체','캐릭터','영상','이미지','앱'].map((category,i)=>`<button class="filter ${i===0?'active':''}" data-ai-filter="${category}" aria-pressed="${i===0}">${category}</button>`).join('')}</div><span id="ai-count" role="status" aria-live="polite">${works.length}개의 프로젝트</span></div><section id="ai-works" aria-label="AI 개인작업">${works.map(aiWork).join('')}</section><p id="ai-empty" class="live-empty" hidden>아직 등록된 프로젝트가 없습니다.</p>`;
}
if(page==='Live'){
  const works=items.filter(x=>x.type==='Live');
  target.innerHTML=heading('LIVE COMMERCE','Live','콘텐츠 참여를 구매로 연결하는 라이브 기획과 연출.',String(works.length).padStart(2,'0'))+
  `<div class="live-company-toolbar"><div class="toolbar" aria-label="근무 회사별 방송 분류">${['전체','티몬','무신사','배민'].map((company,i)=>`<button class="filter ${i===0?'active':''}" data-live-filter="${company}" aria-pressed="${i===0}">${company}</button>`).join('')}</div><span id="live-count" role="status" aria-live="polite">${works.length}개의 방송</span></div>
  <aside id="musinsa-experience" class="live-experience"><div><div class="eyebrow">MUSINSA LIVE / 2021.07–2025.07</div><h2>무신사 라이브</h2></div><p>약 91회의 라이브를 기획·연출했습니다. 상품 소개부터 콘서트·팝업·패션쇼·크리에이터 협업까지 다양한 콘텐츠 포맷을 라이브커머스와 결합하고, 방송 이후 시청 지표와 매출 데이터를 분석했습니다.</p></aside>
  <section id="live-works" aria-label="대표 라이브 방송">${works.map(liveWork).join('')}</section><p id="live-empty" class="live-empty" hidden>아직 등록된 방송이 없습니다.</p>`;
}
if(page==='project'){
  const works=items.filter(x=>x.type==='project');
  target.innerHTML=heading('COMMERCIAL FILMS','Commercial','브랜드의 이야기를 영상으로 만드는 작업들.',String(works.length).padStart(2,'0'))+works.map(commercialWork).join('');
}}

renderPage();
const dialog=document.getElementById('detail');const modal=dialog.querySelector('.modal-body');
function openItem(id){const x=items.find(x=>x.id===id);if(!x)return;modal.innerHTML=x.type==='image'&&x.videos?aiWork(x):x.type==='Live'&&x.youtubeId?liveWork(x):x.youtubeId?commercialWork(x):`<div class="eyebrow">${x.tag}</div><h2>${x.title}</h2>${x.image?`<img src="${x.image}" alt="${x.title}">`:''}<p>${x.body}</p><p class="sample-note">${x.type==='Live'?'임시 영상 기획안입니다. 실제 영상은 아직 업로드되지 않았습니다.':x.type==='image'?'포트폴리오 구성을 위한 AI 생성 이미지와 임시 프로젝트 설명입니다.':'포트폴리오 구성을 위한 임시 콘텐츠입니다.'}</p>`;if(!dialog.open)dialog.showModal();}
function showSaved(){modal.innerHTML='<div class="eyebrow">YOUR LITTLE COLLECTION</div><h2>My picks</h2>'+(!saved.length?'<p class="empty">아직 담은 작품이 없어요.<br>컬렉션에서 마음에 드는 작품의 ♡를 눌러보세요.</p>':saved.map(id=>{const x=items.find(x=>x.id===id);return `<div class="saved-row"><button data-open="${id}">${x.title} ↗</button><button data-remove="${id}" aria-label="${x.title} 저장 취소">삭제</button></div>`}).join(''))+'<p class="sample-note">관심 작품은 이 브라우저에 저장됩니다.</p>';if(!dialog.open)dialog.showModal();}
function toggleSave(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('blue-basket-saved',JSON.stringify(saved))}catch{}document.getElementById('saved-count').textContent=saved.length;document.querySelectorAll('[data-save]').forEach(b=>{const active=saved.includes(b.dataset.save);b.setAttribute('aria-pressed',active)});}
document.addEventListener('click',e=>{const play=e.target.closest('[data-play-video]');if(play)playPortfolioVideo(play);const aiFilter=e.target.closest('[data-ai-filter]');if(aiFilter)filterAi(aiFilter.dataset.aiFilter);const company=e.target.closest('[data-live-filter]');if(company)filterLive(company.dataset.liveFilter);const open=e.target.closest('[data-open]');if(open)openItem(open.dataset.open);const save=e.target.closest('[data-save]');if(save)toggleSave(save.dataset.save);const remove=e.target.closest('[data-remove]');if(remove){toggleSave(remove.dataset.remove);showSaved()}const filter=e.target.closest('[data-filter]');if(filter){document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===filter);b.setAttribute('aria-pressed',b===filter)});document.querySelectorAll('[data-tag]').forEach(x=>x.classList.toggle('hidden',filter.dataset.filter!=='전체'&&x.dataset.tag!==filter.dataset.filter))}});
document.getElementById('show-saved').addEventListener('click',showSaved);dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>modal.replaceChildren());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});

if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();
 const registrations=[{name:'list_portfolio_projects',description:'Read the portfolio projects and which ones are saved in this browser.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute(){return items.map(({id,title,type})=>({id,title,type,saved:saved.includes(id)}))}},{name:'set_saved_project',description:'Save or remove a portfolio project in this browser and update the visible My picks count.',inputSchema:{type:'object',properties:{id:{type:'string'},saved:{type:'boolean'}},required:['id','saved'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||typeof input.saved!=='boolean'||!items.some(x=>x.id===input.id))throw new Error('A valid project id and boolean saved value are required.');if(saved.includes(input.id)!==input.saved)toggleSave(input.id);return {id:input.id,saved:saved.includes(input.id),count:saved.length};}}];
 for(const tool of registrations){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}}
 window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
