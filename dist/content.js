/**
 * Portfolio content only.
 * Add and edit work here; layout and interactions live in app.js.
 */
(() => {
  const heroImage='assets/eunda-daydream.png';
  window.PORTFOLIO_DATA = {
    // [페이지 ID, 화면에 보일 이름, 영문 설명] 순서입니다.
    routes: [['introduce','My universe','About & Experience'],['Live','Live','Live Commerce'],['project','Commercial','Commercial Films'],['image','AI','AI Creative Works']],
    heroImage,
    // My universe 페이지의 자기소개 및 이력 내용입니다.
    profile: {
  "name": "서다은",
  "englishName": "Daeun Seo",
  "birth": "1994.06.28",
  "image": "assets/profile/daeun-avatar.webp",
  "headline": "기획부터 제작까지,\n한계를 넓히는 올라운더 PD",
  "summary": "문화·패션·커머스 분야에서 콘텐츠 제작 실무를 경험해왔습니다. 영상 기획과 촬영, 편집, 모션그래픽, 라이브커머스 연출 등 제작 전반을 담당하며 8년간 다양한 브랜드 콘텐츠를 제작해왔습니다.",
  "detail": "섭외부터 제작, 방송 운영과 데이터 분석까지 콘텐츠 제작의 전 과정을 직접 주도합니다. 실무에서 쌓은 제작 경험을 바탕으로 AI를 활용한 캐릭터·영상·이미지 작업으로 표현의 범위를 넓히고 있습니다.",
  "email": "eunda.works@gmail.com",
  "metrics": [
    {
      "value": "110여 편",
      "label": "라이브 기획·연출"
    },
    {
      "value": "90여 편",
      "label": "숏폼 제작"
    },
    {
      "value": "A to Z",
      "label": "기획부터 데이터 분석까지"
    }
  ],
  "capabilities": [
    {
      "title": "Video & Content",
      "list": [
        "영상 기획",
        "촬영 및 편집",
        "라이브커머스 기획·연출",
        "브랜드 콘텐츠 제작"
      ]
    },
    {
      "title": "Design & Motion",
      "list": [
        "모션그래픽",
        "그래픽·포스터 디자인",
        "방송 그래픽 및 비주얼 에셋 제작"
      ]
    },
    {
      "title": "AI Creative",
      "list": [
        "캐릭터·콘텐츠 콘셉트 기획",
        "AI 이미지·영상 제작",
        "스토리보드 및 프롬프트 구성"
      ]
    }
  ],
  "tools": [
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "Illustrator",
    "Figma",
    "OBS"
  ],
  "aiTools": [
    "ChatGPT",
    "Gemini",
    "Kling AI"
  ],
  "career": [
    {
      "company": "무신사",
      "team": "라이브커머스팀",
      "role": "PD",
      "period": "2021.07–2025.08",
      "tasks": [
        "무신사 라이브 기획 및 연출",
        "라이브 출연진 섭외 및 발굴",
        "숏TV 콘텐츠 기획 및 제작",
        "기획전 라이브 오프닝 타이틀 영상 제작"
      ]
    },
    {
      "company": "29CM",
      "team": "미디어랩",
      "role": "PD",
      "period": "2019.12–2021.04",
      "tasks": [
        "29TV 뷰티 콘텐츠 촬영 및 편집",
        "29TV 콘텐츠 기획 및 제작",
        "29TV 운영 및 데이터 분석",
        "기획전 프로젝트 영상 제작"
      ]
    },
    {
      "company": "티몬",
      "team": "콘텐츠제작팀",
      "role": "PD",
      "period": "2018.04–2019.12",
      "tasks": [
        "티비온 라이브 기획 및 연출",
        "쇼호스트 pool 관리 및 계약서 담당",
        "기획전 라이브 오프닝 타이틀 영상 제작",
        "라이브 숏클립 편집"
      ]
    },
    {
      "company": "마이크임팩트",
      "team": "TV팀",
      "role": "PD",
      "period": "2016.10–2017.07",
      "tasks": [
        "청춘페스티벌 콘텐츠 기획 및 촬영",
        "SK행복나눔재단 SIT 프로젝트 기획 및 촬영",
        "자사 콘텐츠 수급 및 배급 관리",
        "자사 콘텐츠 클립 제작 및 SNS 업로드"
      ]
    }
  ],
  "freelance": [
    {
      "title": "롯데하이마트 홈서비스",
      "role": "숏폼 편집",
      "period": "2023.10–2024.04"
    },
    {
      "title": "배달의민족 배민라이브",
      "role": "프리랜서 라이브 작업 · 우아한형제들",
      "period": "2021.04–2021.07"
    },
    {
      "title": "대한민국 청소년 온라인 창업 경진 대회",
      "role": "영상 편집",
      "period": "2021.01"
    },
    {
      "title": "데상트스포츠재단 MOVE SHARE",
      "role": "영상 편집",
      "period": "2020.11"
    },
    {
      "title": "와디즈 ‘청춘열차 창업비스쿨’",
      "role": "영상 편집",
      "period": "2018.04"
    },
    {
      "title": "굿모닝 푸드트럭 페스티벌",
      "role": "현장 스케치 촬영",
      "period": "2017.10"
    },
    {
      "title": "청소년 사회적 기업 캠프 ‘소셜루키’",
      "role": "현장 스케치 촬영",
      "period": "2017.07"
    }
  ]
},
    // 작업물을 추가할 때 아래 객체 하나를 복사해 id, type, tag, title, desc, image, body를 바꾸세요.
    // type은 article, Live, project, image 중 해당 페이지 ID와 같아야 합니다.
    items: [
{id:'a1',type:'article',tag:'커머스 인사이트',title:'AI가 바꾸는 쇼핑의 순간들',desc:'검색에서 발견으로, 커머스 경험의 새로운 가능성',body:'좋은 쇼핑 경험은 상품을 찾는 순간보다, 나에게 필요한 것을 발견하는 순간에 시작됩니다.\n\n이번 글에서는 AI가 상품 탐색, 비교, 구매 결정에 어떻게 쓰일 수 있을지 살펴봅니다. 대화형 검색은 고객이 복잡한 조건을 자연스럽게 설명하도록 돕고, 상품 요약은 긴 상세 페이지의 핵심을 빠르게 이해하도록 돕습니다.\n\n커머스 실무자의 관점에서 가장 중요한 것은 기술 자체보다 고객의 망설임을 줄이는 일입니다. 고객이 어떤 정보 앞에서 멈추는지 관찰하고, 그 지점에 AI를 적용하는 작은 실험을 제안합니다.'},
{id:'a2',type:'article',tag:'AI 실험 노트',title:'하나의 상품, 다섯 가지 이야기',desc:'생성형 AI로 상품 카피의 관점을 넓혀보기',body:'같은 머그컵도 누군가에게는 아침의 루틴이고, 누군가에게는 소중한 사람에게 보내는 선물입니다.\n\n제품의 기능, 사용 장면, 감정, 선물, 지속 가능성이라는 다섯 관점으로 카피를 작성하는 실험을 기획했습니다. 프롬프트에는 대상 고객, 사용 맥락, 문장 길이와 금지 표현을 함께 넣습니다.\n\n생성된 문장은 그대로 사용하지 않고 실제 상품 정보와 일치하는지 확인합니다. 좋은 카피는 화려한 수식어보다 구체적인 사용 장면에서 출발한다는 점을 기록했습니다.'},
{id:'a3',type:'article',tag:'커머스 인사이트',title:'좋은 상세 페이지는 무엇을 덜어낼까?',desc:'고객의 선택을 돕는 정보 설계에 대한 생각',body:'상세 페이지는 모든 정보를 한 번에 보여주는 공간일 필요가 없습니다.\n\n핵심 가치, 사용 장면, 구매 전 확인 사항 순서로 정보를 정리해 봅니다. 고객의 질문을 먼저 적고 각 질문에 대응하는 이미지와 설명을 배치하면 메시지의 우선순위가 보입니다.\n\nAI는 초안을 정리하는 도구로 활용하고, 사실 확인과 최종 표현의 책임은 제작자가 갖는 흐름을 제안합니다.'},
{
  "id": "ai-kimhodie",
  "type": "image",
  "tag": "캐릭터",
  "title": "김호덕",
  "subtitle": "인간의 음식을 연구하는 호랑이",
  "date": "2026.07",
  "handle": "@kimhodie",
  "channels": [
    { "label": "Instagram", "url": "https://www.instagram.com/kimhodie" },
    { "label": "YouTube", "url": "https://www.youtube.com/@kimhodie" }
  ],
  "projectKind": "개인작업",
  "contribution": "100%",
  "image": "assets/ai/kimhodie-profile.webp",
  "characterSheet": "assets/ai/kimhodie-character-sheet.webp",
  "desc": "아기 백호 김호덕의 음식 탐구 ASMR 숏폼 시리즈",
  "summary": "ASMR 콘텐츠에 캐릭터 애니메이션을 결합해, 인간의 음식을 탐구하는 아기 백호 ‘김호덕’의 숏폼 콘텐츠를 기획했습니다. ChatGPT로 콘텐츠 콘셉트와 스토리보드, 장면별 프롬프트를 구성하고 Gemini로 캐릭터와 주요 이미지를 제작했습니다. Kling AI로 이미지에 움직임을 구현한 뒤 Premiere Pro에서 컷 편집, 효과음 보정과 사운드 디자인을 진행해 최종 영상을 완성했습니다.",
  "roles": [
    "콘텐츠 콘셉트 기획",
    "스토리보드 및 프롬프트 작성",
    "AI 이미지·영상 제작",
    "영상 편집"
  ],
  "process": [
    {
      "tool": "ChatGPT",
      "title": "콘셉트와 장면 설계",
      "text": "콘텐츠 콘셉트, 스토리보드, 장면별 프롬프트 구성"
    },
    {
      "tool": "Gemini",
      "title": "캐릭터와 이미지 제작",
      "text": "캐릭터와 주요 장면 이미지 제작"
    },
    {
      "tool": "Kling AI",
      "title": "이미지에 움직임 구현",
      "text": "이미지 기반 캐릭터 애니메이션 제작"
    },
    {
      "tool": "Premiere Pro",
      "title": "편집과 사운드 디자인",
      "text": "컷 편집, 효과음 보정, 사운드 디자인 및 최종 영상 완성"
    }
  ],
  "videos": [
    {
      "label": "알사탕",
      "youtubeId": "8S6av-Nt4bE",
      "url": "https://youtube.com/shorts/8S6av-Nt4bE?feature=share",
      "poster": "assets/ai/kimhodie-candy-01.webp"
    },
    {
      "label": "떡볶이",
      "youtubeId": "cZ76Fo2evag",
      "url": "https://youtube.com/shorts/cZ76Fo2evag?feature=share",
      "poster": "https://i.ytimg.com/vi/cZ76Fo2evag/hqdefault.jpg"
    },
    {
      "label": "라면",
      "youtubeId": "99-FjshvIA8",
      "url": "https://youtube.com/shorts/99-FjshvIA8?feature=share",
      "poster": "https://i.ytimg.com/vi/99-FjshvIA8/hqdefault.jpg"
    }
  ],
  "gallery": [
    {
      "src": "assets/ai/kimhodie-candy-01.webp",
      "caption": "알사탕 탐구"
    },
    {
      "src": "assets/ai/kimhodie-candy-02.webp",
      "caption": "포장과 질감의 클로즈업"
    },
    {
      "src": "assets/ai/kimhodie-candy-03.webp",
      "caption": "사탕을 관찰하는 장면"
    },
    {
      "src": "assets/ai/kimhodie-candy-04.webp",
      "caption": "캐릭터 표정과 음식 디테일"
    }
  ],
  "body": "개인작업 김호덕 (2026.07). 인간의 음식을 연구하는 아기 백호의 ASMR 숏폼 시리즈. 콘셉트 기획, 스토리보드 및 프롬프트 작성, AI 이미지·영상 제작, 영상 편집. ChatGPT, Gemini, Kling AI, Premiere Pro. 기여도 100%."
},
{
  "id": "live-musinsa-mmlg-haejoo",
  "type": "Live",
  "employer": "무신사",
  "tag": "크리에이터 협업",
  "title": "Mmlg × 해쭈",
  "date": "2024.10",
  "client": "무신사 에디션",
  "desc": "팬덤을 구매 전환으로 연결하다",
  "youtubeId": "pj7ub0qFk-I",
  "videoUrl": "https://youtube.com/shorts/pj7ub0qFk-I?feature=share",
  "image": "assets/live/mmlg-haejoo-01.webp",
  "summary": "Mmlg와 유튜버 해쭈의 협업 상품을 소개하는 ‘무신사 에디션’ 라이브를 진행했습니다. 해쭈 팬덤의 높은 관심을 자연스러운 콘텐츠 참여와 실제 구매로 전환하고, 이후 팬미팅까지 이어지는 방송 구조를 설계했습니다.",
  "roles": [
    "라이브 구성 기획",
    "상품·혜택 구성 조율",
    "현장 연출",
    "방송 데이터 리뷰 작성"
  ],
  "execution": [
    {
      "title": "팬미팅으로 이어지는 스타일링",
      "text": "팬미팅에 참석하는 해쭈와 팬들의 착장을 제안하는 ‘해쭈룩·쭈친룩’ 콘셉트를 구성했습니다."
    },
    {
      "title": "팬덤이 익숙한 참여형 콘텐츠",
      "text": "해쭈의 인기 콘텐츠인 ‘월드컵’ 포맷을 활용해 최애 착장 퀴즈 이벤트를 기획했습니다."
    },
    {
      "title": "구매와 팬미팅 응모 연결",
      "text": "라이브 구매 고객을 팬미팅 초대권 응모와 자동 연계해 구매 동기를 강화했습니다."
    },
    {
      "title": "상품 설명과 콘텐츠의 결합",
      "text": "팬덤이 익숙하게 즐길 수 있는 콘텐츠와 상품 설명을 결합해 방송 몰입도를 높였습니다."
    }
  ],
  "metrics": [
    {
      "label": "방송 중 매출",
      "value": "약 3억 원",
      "note": "라이브 중 초도 물량 완판"
    },
    {
      "label": "최대 동시 접속자",
      "value": "4,606명",
      "note": "평균 대비 약 3.1배"
    },
    {
      "label": "구매 전환율",
      "value": "10.9%",
      "note": "평균 대비 약 4.7배"
    }
  ],
  "gallery": [
    {
      "src": "assets/live/mmlg-haejoo-01.webp",
      "caption": "협업 상품 소개"
    },
    {
      "src": "assets/live/mmlg-haejoo-02.webp",
      "caption": "팬미팅 혜택 안내와 라이브 진행"
    },
    {
      "src": "assets/live/mmlg-haejoo-03.webp",
      "caption": "해쭈룩 스타일링 제안"
    }
  ],
  "pressImage": "assets/live/mmlg-haejoo-press.webp",
  "body": "무신사 에디션 Mmlg × 해쭈 (2024.10). 라이브 구성 기획, 상품·혜택 구성 조율, 현장 연출, 방송 데이터 리뷰 작성. 방송 중 초도 물량 완판 및 약 3억 원 매출. 최대 동시 접속자 4,606명, 구매 전환율 10.9%."
},
{
  "id": "commercial-29cm-lifes-like",
  "type": "project",
  "tag": "굿즈 티저",
  "title": "Lifes Like Recollection",
  "client": "29CM × 재지팩트",
  "date": "2020.12",
  "desc": "재지팩트 Lifes Like 10주년 기념 굿즈 공개 전 기대감을 높이는 티저 영상",
  "youtubeId": "HNzc-QLIcXw",
  "videoUrl": "https://www.youtube.com/watch?v=HNzc-QLIcXw",
  "summary": "재지팩트 ‘Lifes Like’ 10주년 기념 굿즈의 제품 공개 전 기대감을 높이기 위한 티저 영상을 제작했습니다. 제품의 직접적인 노출은 최소화하고, 컬러와 질감, 브랜드 무드가 돋보이도록 구성했습니다.",
  "roles": [
    "티저 영상 콘셉트 기획",
    "촬영 구성 및 현장 촬영",
    "영상 편집",
    "색보정"
  ],
  "contributions": [
    {
      "label": "기획",
      "percent": 100
    },
    {
      "label": "디자인",
      "percent": 100
    },
    {
      "label": "촬영",
      "percent": 50
    },
    {
      "label": "편집",
      "percent": 100
    }
  ],
  "execution": [
    "제품의 전체 형태보다 클로즈업과 컬러·소재·디테일을 중심으로 편집해 제품에 대한 호기심을 유도했습니다.",
    "제품 공개 전 브랜드와 굿즈에 대한 기대감을 형성하는 티저 구조를 설계했습니다."
  ],
  "results": [
    "완성 영상을 기획전 공개 전 사전 광고 소재로 활용했습니다.",
    "해당 기획전 전체 판매액 약 10억 원을 기록했습니다."
  ],
  "revenue": "약 10억 원",
  "revenueLabel": "기획전 전체 판매액",
  "tools": [
    "Premiere Pro",
    "After Effects",
    "Illustrator"
  ],
  "body": "재지팩트 Lifes Like 10주년 기념 굿즈 티저. 콘셉트 기획, 촬영 구성 및 현장 촬영, 편집, 색보정. 기획 100% · 디자인 100% · 촬영 50% · 편집 100%."
}
]
  };
})();
