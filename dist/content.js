/**
 * Portfolio content only.
 * Add and edit work here; layout and interactions live in app.js.
 */
(() => {
  const heroImage='assets/eunda-daydream.png';
  window.PORTFOLIO_DATA = {
    // [페이지 ID, 화면에 보일 이름, 영문 설명] 순서입니다.
    routes: [['introduce','내폴더','About Me'],['article','Note','The Editorial'],['Live','Live','Motion Room'],['project','Project','The Final Edit'],['image','Image','Image Studio']],
    heroImage,
    // 내폴더 페이지의 자기소개 내용입니다.
    profile: {
      eyebrow: 'HELLO, THIS IS MY FOLDER',
      greeting: '안녕하세요.',
      name: '서은다입니다.',
      summary: '커머스의 시선으로 고객의 경험을 발견하고,\nAI로 아이디어를 콘텐츠와 비주얼로 만듭니다.',
      keywords: ['COMMERCE', 'CONTENTS', 'AI CREATIVE'],
      sections: [
        {
          title: 'About me',
          text: '사람이 상품을 발견하고 선택하는 과정에 관심이 많습니다. 실무에서 얻은 커머스 경험에 AI 도구를 연결해, 더 이해하기 쉽고 기억에 남는 콘텐츠를 실험하고 있습니다.'
        },
        {
          title: 'What I do',
          list: ['커머스 콘텐츠 기획', '상품·고객 경험 리서치', 'AI 활용 기사·이미지·영상 제작', '브랜드 비주얼 아이디어 개발']
        },
        {
          title: 'My interests',
          text: '좋은 상세 페이지, 취향을 이해하는 추천, 브랜드의 태도가 담긴 이미지, 그리고 반복 작업을 줄여주는 AI 워크플로우에 관심이 있습니다.'
        },
        {
          title: 'A little note',
          quote: '작은 호기심을\n실제로 보여주는 작업으로.',
          text: '이 포트폴리오는 한국경제 AI 교육에서 배우고 만든 결과물을 한 곳에 모은 개인 아카이브입니다.',
          featured: true
        }
      ]
    },
    // 작업물을 추가할 때 아래 객체 하나를 복사해 id, type, tag, title, desc, image, body를 바꾸세요.
    // type은 article, Live, project, image 중 해당 페이지 ID와 같아야 합니다.
    items: [
{id:'a1',type:'article',tag:'커머스 인사이트',title:'AI가 바꾸는 쇼핑의 순간들',desc:'검색에서 발견으로, 커머스 경험의 새로운 가능성',body:'좋은 쇼핑 경험은 상품을 찾는 순간보다, 나에게 필요한 것을 발견하는 순간에 시작됩니다.\n\n이번 글에서는 AI가 상품 탐색, 비교, 구매 결정에 어떻게 쓰일 수 있을지 살펴봅니다. 대화형 검색은 고객이 복잡한 조건을 자연스럽게 설명하도록 돕고, 상품 요약은 긴 상세 페이지의 핵심을 빠르게 이해하도록 돕습니다.\n\n커머스 실무자의 관점에서 가장 중요한 것은 기술 자체보다 고객의 망설임을 줄이는 일입니다. 고객이 어떤 정보 앞에서 멈추는지 관찰하고, 그 지점에 AI를 적용하는 작은 실험을 제안합니다.'},
{id:'a2',type:'article',tag:'AI 실험 노트',title:'하나의 상품, 다섯 가지 이야기',desc:'생성형 AI로 상품 카피의 관점을 넓혀보기',body:'같은 머그컵도 누군가에게는 아침의 루틴이고, 누군가에게는 소중한 사람에게 보내는 선물입니다.\n\n제품의 기능, 사용 장면, 감정, 선물, 지속 가능성이라는 다섯 관점으로 카피를 작성하는 실험을 기획했습니다. 프롬프트에는 대상 고객, 사용 맥락, 문장 길이와 금지 표현을 함께 넣습니다.\n\n생성된 문장은 그대로 사용하지 않고 실제 상품 정보와 일치하는지 확인합니다. 좋은 카피는 화려한 수식어보다 구체적인 사용 장면에서 출발한다는 점을 기록했습니다.'},
{id:'a3',type:'article',tag:'커머스 인사이트',title:'좋은 상세 페이지는 무엇을 덜어낼까?',desc:'고객의 선택을 돕는 정보 설계에 대한 생각',body:'상세 페이지는 모든 정보를 한 번에 보여주는 공간일 필요가 없습니다.\n\n핵심 가치, 사용 장면, 구매 전 확인 사항 순서로 정보를 정리해 봅니다. 고객의 질문을 먼저 적고 각 질문에 대응하는 이미지와 설명을 배치하면 메시지의 우선순위가 보입니다.\n\nAI는 초안을 정리하는 도구로 활용하고, 사실 확인과 최종 표현의 책임은 제작자가 갖는 흐름을 제안합니다.'},
{id:'i1',type:'image',tag:'브랜드 비주얼',title:'Daydream — 별빛을 모으는 시간',desc:'유리 별과 빛으로 그린 파스텔 드림 스터디',image:heroImage,body:'투명한 유리 별과 파스텔빛을 중심으로 만든 아카이브 키 비주얼입니다.\n\n기획 의도: 새로운 아이디어를 발견하는 순간을 별빛의 이미지로 표현하기.\n제작 과정: 오브젝트 구성 → 컬러 팔레트 설정 → 이미지 생성 → 결과 검토.\n\n사용 프롬프트: Dreamy translucent glass stars, pastel blue and blush pink, refracted light, fine analog paper grain, nostalgic editorial still life, no text.'},
{id:'i2',type:'image',tag:'컬러 스터디',title:'Somewhere between sky & rose',desc:'파우더블루와 로즈핑크 사이의 장면',image:heroImage,position:'75% 35%',body:'브랜드 비주얼의 별과 유리 구를 가까이 보여주는 크롭 스터디입니다. 같은 이미지라도 화면 비율과 중심점을 달리하면 새로운 메시지를 만들 수 있습니다.\n\n파우더블루는 넓은 배경에, 로즈핑크와 아이보리는 빛을 머금은 포인트에 사용했습니다.'},
{id:'i3',type:'image',tag:'브랜드 비주얼',title:'A small, shining moment',desc:'흩어진 작은 반짝임을 오래 바라보기',image:heroImage,position:'40% 70%',body:'작은 유리 오브젝트를 하나의 풍경처럼 바라보는 이미지 구성안입니다. 빛의 굴절과 부드러운 색으로 형태를 강조했습니다.\n\n대표 키 비주얼을 세로형 상품 카드에 맞게 재구성한 임시 시안입니다.'},
{id:'v1',type:'Live',tag:'브랜드 필름',title:'작은 빛이 모이는 순간',desc:'eunda works 브랜드 필름 기획안',image:heroImage,body:'브랜드 필름 · 30초 구성안\n\n00–05초: 하늘색 배경 위에 작은 빛이 등장합니다.\n05–12초: 유리 별과 작은 구슬이 천천히 떠오릅니다.\n12–22초: 기사, 이미지, 영상의 아이디어가 하나의 컬렉션으로 모입니다.\n22–30초: eunda works 로고와 함께 마무리합니다.\n\n연출 방향: 가벼운 신스 사운드, 느린 카메라 이동, 부드러운 오브젝트 모션.'},
{id:'v2',type:'Live',tag:'쇼츠',title:'하루의 컬러를 고르는 시간',desc:'컬러 중심의 15초 세로형 쇼츠 기획',image:heroImage,body:'세로형 쇼츠 · 15초 구성안\n\n00–04초: 화면을 채우는 파우더블루.\n04–09초: 로즈핑크 오브젝트로 전환하며 컬러 대비를 강조합니다.\n09–15초: 오브젝트가 한 화면에 모이며 브랜드명을 보여줍니다.\n\n9:16 화면 비율에 맞춰 중앙에 핵심 피사체를 배치하는 기획입니다.'},
{id:'v3',type:'Live',tag:'메이킹',title:'아이디어가 비주얼이 되기까지',desc:'프롬프트부터 결과물까지, 제작 과정 기록',image:heroImage,body:'메이킹 영상 · 60초 구성안\n\n문제 정의와 레퍼런스 정리, 프롬프트 작성, 이미지 비교, 최종 크롭의 네 단계를 보여줍니다.\n\n화면 녹화와 짧은 자막을 조합해 AI를 활용한 제작 과정을 누구나 이해할 수 있도록 설명하는 기획안입니다.'},
{id:'f1',type:'project',tag:'FINAL PROJECT',title:'취향을 발견하는 AI 커머스',desc:'발견부터 콘텐츠 제작까지, 하나로 이어지는 쇼핑 경험',image:heroImage,body:'프로젝트 목표\n고객의 취향과 사용 맥락을 출발점으로, 상품 발견부터 콘텐츠 제작까지 이어지는 AI 커머스 경험을 제안합니다.\n\n문제 정의\n상품이 많아질수록 고객은 더 많은 비교를 해야 합니다. 제작자는 채널마다 다른 콘텐츠를 반복해서 만들어야 합니다.\n\n솔루션\n고객의 요구를 대화로 정리하고, 적합한 상품 정보를 이해하기 쉬운 언어로 전달합니다. 브랜드 이미지와 상품 카피, 숏폼 기획안을 같은 콘셉트 안에서 제작합니다.\n\n검증 계획\n기존 탐색 흐름과 제안한 흐름을 비교해 상품 선택에 걸리는 시간, 정보 이해도, 콘텐츠 일관성을 확인할 예정입니다. 아직 실험 결과나 성과 수치는 없습니다.'}
]
  };
})();
