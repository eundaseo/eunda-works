/**
 * Portfolio content only.
 * Add and edit work here; layout and interactions live in app.js.
 */
(() => {
  window.PORTFOLIO_DATA = {
    // [페이지 ID, 화면에 보일 이름, 영문 설명] 순서입니다.
    routes: [['introduce','My universe','About & Experience'],['Live','Live','Live Commerce'],['project','Commercial','Commercial Films'],['image','AI','AI Creative Works']],
    // My universe 페이지의 자기소개 및 이력 내용입니다.
    profile: {
  "name": "서다은",
  "englishName": "Daeun Seo",
  "birth": "1994.06.28",
  "image": "assets/profile/daeun-avatar-cutout.png?v=2",
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
    // Live 페이지의 회사별 소개와 Selected Live Projects입니다. 대표 방송은 아래 items에서 type:'Live', employer로 연결됩니다.
    liveCompanies: [
      {
        "id": "무신사",
        "name": "무신사 라이브",
        "eng": "MUSINSA LIVE",
        "period": "2021.07–2025.07",
        "tagline": "구매로 전환하는 매력적인 단 1시간!",
        "summary": "무신사 라이브커머스팀에서 약 91회의 라이브를 기획·연출했습니다. 상품 소개 중심의 방송뿐 아니라 콘서트·팝업·패션쇼·크리에이터 협업 등 다양한 콘텐츠 포맷을 라이브커머스와 결합했고, 방송 종료 후에는 시청 지표와 매출 데이터를 분석했습니다.",
        "role": "라이브 기획 및 현장 연출, 출연진 및 크리에이터 섭외, 브랜드·MD 협의, 상품 및 프로모션 혜택 조율, 사전 콘텐츠 및 홍보 기획, 실시간 방송 운영, 방송 그래픽 제작, 성과 데이터 분석 및 리뷰 작성",
        "stats": [
          { "value": "약 91회", "label": "라이브 기획·연출" },
          { "value": "100%", "label": "현장 연출·운영 기여도" }
        ],
        "tools": ["OBS", "Premiere Pro", "After Effects", "Photoshop", "Figma"],
        "selected": [
          {
            "title": "미세키서울 라이브",
            "date": "2025.03",
            "points": [
              "브랜드 타깃과 스타일 적합도를 고려해 패션 인플루언서를 라이브 진행자로 섭외",
              "이전 방송 판매 데이터를 분석해 반응과 매출 기여도가 높았던 인기 상품을 핵심 노출 상품으로 선정",
              "해당 상품을 진행자의 메인 착장으로 구성해 장시간 노출하여 주요 매출 견인",
              "진행자·모델의 SNS 채널을 활용한 사전 홍보로 방송 유입 확대"
            ],
            "metrics": [
              { "label": "방송 중 매출", "value": "약 1억 원", "note": "목표 대비 약 138% 달성" },
              { "label": "구매자 시청 시간", "value": "22분 32초", "note": "평균 대비 약 97% 증가" }
            ]
          },
          {
            "title": "시너진 라이브",
            "date": "2025.02",
            "image": "assets/live/synergin-01.jpg",
            "points": [
              "처음으로 오프라인팀과 연계하여 무신사 대림창고 팝업 공간에서 라이브 진행",
              "런웨이 형식의 연출을 활용해 대림창고 팝업 공간과 브랜드 제품 소개",
              "오프라인 현장 이벤트와 라이브 방송 이벤트를 동시에 진행하며 온·오프라인 연계 경험 구성",
              "현장 곳곳에 라이브 진입 QR코드를 배치해 오프라인 방문객의 온라인 라이브 유입 유도",
              "홍보용 숏폼 콘텐츠 제작 및 SNS 이벤트 연계를 통해 라이브와 브랜드 홍보"
            ],
            "metrics": [
              { "label": "구매자 시청 시간", "value": "27분 5초", "note": "평균 대비 약 137% 증가" },
              { "label": "평균 시청 시간", "value": "2분 37초", "note": "평균 대비 약 5% 증가" }
            ]
          },
          {
            "title": "우먼 브랜드 모음전",
            "date": "2024.09",
            "image": "assets/live/woman-brands-01.jpg",
            "points": [
              "인플루언서 최실장, 송이송이와 협업하여 큐레이션형 기획 라이브 진행",
              "10개의 여성복 브랜드를 소개하며 브랜드의 특징과 스타일링 포인트를 안내하는 형식으로 구성",
              "방송 구성에 필요한 디자인 에셋을 직접 제작하여 화면 구성의 완성도 강화",
              "무신사 라이브 최초 120분 편성으로 10개 여성 브랜드와 상품을 폭넓게 소개"
            ],
            "metrics": [
              { "label": "신규 시청자", "value": "5,210명", "note": "평균 대비 약 30.2% 증가" },
              { "label": "구매자 시청 시간", "value": "23분 44초", "note": "평균 대비 약 108% 증가" }
            ]
          },
          {
            "title": "뉴발란스 × 10CM",
            "date": "2024.04",
            "image": "assets/live/newbalance-10cm-01.jpg",
            "points": [
              "뉴발란스와 10CM가 협업한 신제품 발매 라이브 진행",
              "무신사 개러지와 협업하여 콘서트형 라이브 콘텐츠 기획 및 연출",
              "신제품 특징과 스타일링 포인트를 소개하는 상품 중심 라이브도 함께 구성",
              "음악 방송 컨셉을 활용해 신규 시청자 유입과 시청 몰입도 강화"
            ],
            "metrics": [
              { "label": "좋아요", "value": "약 85,000건", "note": "평균 대비 약 270% 증가" },
              { "label": "구매자 시청 시간", "value": "18분 34초", "note": "평균 대비 약 63% 증가" }
            ]
          }
        ]
      },
      {
        "id": "티몬",
        "layout": "showcase",
        "name": "티비온 라이브",
        "eng": "TMON TVON LIVE",
        "period": "2018.11–2019.12",
        "tagline": "미디어 커머스의 선두주자",
        "summary": "티몬의 자체 라이브커머스 채널 티비온에서 총 20회의 방송을 기획·연출하고 현장 운영을 담당했습니다. 식품, 여행·숙박, 유아용품, 뷰티 등 다양한 카테고리를 다루며 단순한 상품 소개를 넘어 시청자 참여 요소를 결합한 다양한 라이브 콘텐츠를 제작했습니다.",
        "role": "라이브 기획 및 현장 연출, 출연진 섭외, 제휴사 미팅 및 혜택 협의, 큐시트 작성, 쇼호스트·외주 인력 관리, 방송 오프닝 타이틀 제작, 송출·카메라·채팅 등 현장 운영",
        "stats": [
          { "value": "20회", "label": "라이브 기획·연출" },
          { "value": "100%", "label": "기획·현장 연출·운영 기여도" }
        ],
        "tools": ["XSplit", "Premiere Pro", "After Effects", "Illustrator"]
      }
    ],
    // 작업물을 추가할 때 아래 객체 하나를 복사해 id, type, tag, title, desc, image, body를 바꾸세요.
    // type은 Live, project, image 중 해당 페이지 ID와 같아야 합니다.
    items: [
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
  "id": "live-musinsa-treemingbird",
  "featured": true,
  "type": "Live",
  "employer": "무신사",
  "order": 1,
  "tag": "디렉터스 라이브",
  "title": "트리밍버드",
  "date": "2024.03",
  "client": "라이브데이",
  "desc": "디렉터와 함께하는 특별한 시간",
  "image": "assets/live/treemingbird-02.jpg",
  "summary": "디렉터가 직접 출연해 신상품을 소개하는 90분 라이브를 진행했습니다. 라이브데이의 하이라이트 방송으로, 많은 신상품의 차이와 스타일링 정보를 효과적으로 전달하면서 시청자의 체류와 구매 전환을 높이는 것이 핵심 과제였습니다.",
  "roles": ["방송 구성 공동 기획", "큐시트 작성", "출연진 섭외", "사전 착장 영상 기획 및 제작", "현장 연출", "방송 그래픽 디자인", "방송 데이터 리뷰 작성"],
  "execution": [
    { "title": "디렉터와의 소통형 구성", "text": "디렉터의 전문성을 활용한 시청자 Q&A 중심의 소통형 구성으로 방송을 설계했습니다." },
    { "title": "9착장으로 묶은 신상품 라인업", "text": "신상품 라인업을 효과적으로 노출하기 위해 총 9착장으로 조합하여 제품별 특징과 스타일링을 제안했습니다." },
    { "title": "사전 착장 영상 활용", "text": "사전 촬영한 착장 영상을 방송 중 반복 노출해 상품 정보를 전달했습니다." }
  ],
  "metrics": [
    { "label": "방송 중 매출", "value": "약 7억 원", "note": "기획전 시간까지 총 8억 원" },
    { "label": "구매 전환율", "value": "6.2%", "note": "평균 대비 약 3.97배" },
    { "label": "구매자 시청 시간", "value": "45분 17초", "note": "평균 대비 약 2.7배" }
  ],
  "gallery": [
    { "src": "assets/live/treemingbird-01.jpg", "caption": "디렉터와 함께하는 Q&A 토크" },
    { "src": "assets/live/treemingbird-02.jpg", "caption": "신상품 착장 소개" },
    { "src": "assets/live/treemingbird-03.jpg", "caption": "사전 촬영한 착장 영상 (LOOK 2)" }
  ],
  "body": "트리밍버드 디렉터스 라이브 (2024.03). 방송 중 매출 약 7억 원, 구매 전환율 6.2%, 구매자 시청 시간 45분 17초."
},
{
  "id": "live-musinsa-satur",
  "type": "Live",
  "employer": "무신사",
  "order": 2,
  "tag": "숏폼 연계",
  "title": "세터",
  "date": "2024.06",
  "client": "쇼룸 라이브",
  "desc": "라이브 방송과 숏폼의 시너지",
  "image": "assets/live/satur-03.jpg",
  "summary": "브랜드의 쇼룸과 상품을 효과적으로 노출하고, 라이브 전부터 고객의 관심과 유입을 확보하기 위해 사전 콘텐츠와 방송을 연계한 홍보 전략이 필요했습니다.",
  "roles": ["라이브 구성 기획", "숏폼 기획·촬영·편집", "SNS 배포 일정 조율", "현장 연출", "방송 데이터 리뷰 작성"],
  "execution": [
    { "title": "쇼룸을 소개하는 연계 숏폼", "text": "출연진과 세터 쇼룸을 방문해 공간과 주요 상품을 소개하는 방송 연계 숏폼을 기획·제작했습니다." },
    { "title": "사전 기대감 형성", "text": "세터 쇼룸과 착장 관련 숏폼을 활용해 라이브에 대한 사전 기대감을 형성했습니다." },
    { "title": "채널 배포로 신규 유입 확대", "text": "브랜드 및 출연진 SNS 채널에 콘텐츠를 배포해 신규 유입을 확대했습니다." },
    { "title": "숏폼에서 라이브로", "text": "숏폼과 라이브를 연결해 콘텐츠 시청이 방송 유입으로 이어지는 구조를 설계했습니다." }
  ],
  "metrics": [
    { "label": "누적 접속자", "value": "52,093명", "note": "평균 대비 약 31% 증가" },
    { "label": "신규 유입자", "value": "4,477명", "note": "평균 대비 약 11.9% 증가" },
    { "label": "숏폼 조회수", "value": "약 2.6만 회", "note": "브랜드 계정 기준 · 출연진 계정 약 4.8천 회" }
  ],
  "gallery": [
    { "src": "assets/live/satur-01.jpg", "caption": "상품 정보 자막과 착장 클로즈업" },
    { "src": "assets/live/satur-02.jpg", "caption": "출연진의 상품 소개" },
    { "src": "assets/live/satur-03.jpg", "caption": "착장 스타일링 제안" }
  ],
  "body": "세터 라이브 (2024.06). 누적 접속자 52,093명, 신규 유입자 4,477명, 숏폼 조회수 약 2.6만 회."
},
{
  "id": "live-musinsa-mmlg-haejoo",
  "featured": true,
  "type": "Live",
  "employer": "무신사",
  "order": 3,
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
      "label": "구매 전환율",
      "value": "10.9%",
      "note": "평균 대비 약 4.7배"
    },
    {
      "label": "최대 동시 접속자",
      "value": "4,606명",
      "note": "평균 대비 약 3.1배"
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
  "id": "live-musinsa-espoir",
  "featured": true,
  "type": "Live",
  "employer": "무신사",
  "order": 4,
  "tag": "뷰티 라이브",
  "title": "에스쁘아",
  "date": "2025.01",
  "client": "무신사 뷰티",
  "desc": "컬러 비교로 세트 구매를 이끈 뷰티 라이브",
  "image": "assets/live/espoir-02.jpg",
  "summary": "에스쁘아의 베스트셀러인 비글로우 볼륨 쿠션과 파운데이션을 소개하는 뷰티 라이브를 진행했습니다. 신상 컬러인 3C 웨딩피치를 중심으로 여러 베이스 제품의 컬러와 차이를 명확하게 전달하고, 고객의 피부 톤과 사용 목적에 맞는 상품 선택 및 세트 구매를 유도하는 것이 핵심 과제였습니다.",
  "roles": ["라이브 구성 기획", "상품·혜택 구성 조율", "컬러 비교 배너 제작", "방송 그래픽 디자인", "현장 연출", "방송 데이터 리뷰 작성"],
  "execution": [
    { "title": "컬러 칩과 비교 배너", "text": "여러 메인 상품의 컬러 차이를 직관적으로 비교할 수 있도록 컬러 칩과 컬러 비교 배너를 사전 제작했습니다." },
    { "title": "레이어링으로 세트 구매 유도", "text": "3C 웨딩피치를 다른 컬러와 레이어링하는 활용법을 제안해 연계 상품 및 세트 구매를 유도했습니다." },
    { "title": "피부 표현이 보이는 화면 구성", "text": "피부 표현과 제품별 차이가 화면에서 잘 드러나도록 시연 순서와 클로즈업 화면을 구성했습니다." },
    { "title": "실시간 데이터로 노출 조정", "text": "방송 중 판매 데이터를 확인해 판매 효율이 높은 바밍글로우와 파운데이션 중심으로 노출 비중을 조정했습니다." }
  ],
  "metrics": [
    { "label": "총매출", "value": "약 5,500만 원", "note": "목표 매출 대비 121% 달성" },
    { "label": "구매 전환율", "value": "3.7%", "note": "평균 대비 약 61% 증가" },
    { "label": "구매자 시청 시간", "value": "18분 43초", "note": "평균 대비 약 63.9% 증가" }
  ],
  "gallery": [
    { "src": "assets/live/espoir-01.jpg", "caption": "라이브 진행 화면" },
    { "src": "assets/live/espoir-02.jpg", "caption": "3C 웨딩피치 컬러 칩과 시연" },
    { "src": "assets/live/espoir-03.jpg", "caption": "컬러 비교 배너로 톤 안내" }
  ],
  "body": "에스쁘아 뷰티 라이브 (2025.01). 총매출 약 5,500만 원(목표 대비 121%), 구매 전환율 3.7%, 구매자 시청 시간 18분 43초."
},
{
  "id": "live-tmon-sono",
  "type": "Live",
  "employer": "티몬",
  "order": 11,
  "tag": "여행·숙박",
  "title": "소노리조트 숙박권",
  "date": "2019.03",
  "client": "티비온 라이브",
  "desc": "목적별 큐레이션으로 1시간 매출 1억 달성",
  "image": "assets/live/sono-02.jpg",
  "summary": "소노호텔앤리조트 객실과 워터파크를 함께 이용할 수 있는 패키지 티켓을 판매하는 라이브를 진행했습니다. 천안·경주·단양·청송 등 여러 지점의 특성과 복잡한 이용 정보를 제한된 방송 시간 안에 명확하게 전달하고, 가족 단위 고객이 여행 목적에 맞는 상품을 쉽게 선택하도록 돕는 것이 핵심 과제였습니다.",
  "roles": ["방송 구성 기획", "상품 및 할인 혜택 조율", "출연진 섭외", "큐시트 작성", "현장 연출"],
  "execution": [
    { "title": "지역별 정보 정리", "text": "전국 주요 지점의 위치와 시설, 이용 혜택을 지역별로 구분해 상품 정보를 전달했습니다." },
    { "title": "목적별 큐레이션", "text": "가족 구성과 여행 목적에 따라 적합한 리조트를 추천하는 큐레이션형 방송으로 구성했습니다." },
    { "title": "패키지 가격 경쟁력 소개", "text": "객실과 워터파크가 결합된 패키지의 가격 경쟁력과 활용 방법을 직관적으로 소개했습니다." },
    { "title": "그래픽과 판넬로 시각화", "text": "복잡한 이용 조건과 할인 혜택을 방송 그래픽과 판넬로 시각화해 구매 탐색을 도왔습니다." }
  ],
  "metrics": [
    { "label": "방송 중 매출", "value": "약 1억 원", "note": "라이브 방송 1시간 기준" }
  ],
  "mockups": [
    "assets/live/sono-01.jpg",
    "assets/live/sono-02.jpg",
    "assets/live/sono-03.jpg"
  ],
  "results": [
    "라이브 방송 1시간 동안 약 1억 원의 매출 달성"
  ],
  "body": "티비온 라이브 소노리조트 숙박권 (2019.03). 라이브 방송 1시간 동안 약 1억 원 매출."
},
{
  "id": "live-tmon-ograe",
  "type": "Live",
  "employer": "티몬",
  "order": 12,
  "tag": "식품 · 현장 참여",
  "title": "오그래",
  "date": "2019.11",
  "client": "티비온 라이브",
  "desc": "생생한 현장 참여 라이브",
  "image": "assets/live/ograe-02.jpg",
  "summary": "숟가락이 동봉된 파우치형 그래놀라 제품으로, 별도의 식기 없이 간편하게 즐길 수 있다는 점이 핵심 특징이었습니다. 라이브 화면만으로 전달하기 어려운 제품의 맛과 편의성을 실제 사용 상황과 생생한 반응을 통해 설득력 있게 보여주는 것이 핵심 과제였습니다.",
  "roles": ["방송 구성 기획", "상품 및 할인 혜택 조율", "출연진 섭외", "큐시트 작성", "현장 연출"],
  "execution": [
    { "title": "사무실 즉석 시식", "text": "쇼호스트가 티몬 사무실을 이동하며 직원들을 대상으로 즉석 시식을 진행했습니다." },
    { "title": "반응으로 전하는 맛", "text": "직원들의 자연스러운 반응을 통해 화면으로 전달하기 어려운 제품의 맛을 간접적으로 표현했습니다." },
    { "title": "오피스 상황 시연", "text": "별도의 식기 없이 바로 먹을 수 있는 제품의 편의성을 실제 오피스 상황에서 시연했습니다." },
    { "title": "참여형 콘텐츠 결합", "text": "제품 설명과 현장 참여 콘텐츠를 결합해 방송의 생동감과 신뢰도를 높였습니다." }
  ],
  "metrics": [
    { "label": "판매량", "value": "역대 최고", "note": "기존 일 판매 실적을 모두 상회" }
  ],
  "mockups": [
    "assets/live/ograe-01.jpg",
    "assets/live/ograe-02.jpg"
  ],
  "results": [
    "라이브 방송 중 판매량이 해당 제품의 기존 일 판매 실적을 모두 상회하며 최고 판매량 기록"
  ],
  "body": "티비온 라이브 오그래 (2019.11). 라이브 방송 중 판매량이 기존 일 판매 실적을 모두 상회하며 최고 판매량 기록."
},
{
  "id": "live-tmon-select",
  "type": "Live",
  "employer": "티몬",
  "order": 13,
  "tag": "모바일 라이브",
  "title": "셀렉트 라이브",
  "date": "2019.04–2019.08",
  "client": "셀렉트(C2C) 신사업",
  "desc": "쉽고 빠른 모바일 라이브의 시작",
  "image": "assets/live/select-02.jpg",
  "summary": "기존 스튜디오 중심 라이브의 제작 부담과 장소 제약을 낮추고, 판매자가 모바일로 쉽고 빠르게 방송할 수 있는 새로운 라이브 방식이 필요했습니다. 셀렉트(C2C) 신사업의 초기 테스트 단계에 참여해 판매자와 시청자가 실시간으로 소통하는 모바일 라이브의 운영을 지원했습니다.",
  "roles": ["셀렉트 라이브 초기 운영 지원", "‘리코야 택배왔SHOW’ 상품 선정 및 방송 운영", "라이브 상품 할인율 협의", "모바일 송출·카메라·채팅 운영", "오프닝 타이틀 제작"],
  "execution": [
    { "title": "‘리코야 택배왔SHOW’", "text": "판매자 리코가 직접 상품을 선정하고 소개하는 ‘리코야 택배왔SHOW’ 라이브 운영을 지원했습니다." },
    { "title": "스튜디오 밖으로", "text": "모바일 송출의 장점을 활용해 스튜디오가 아닌 다양한 현장에서 라이브를 진행했습니다." },
    { "title": "대학교 축제 현장 판매", "text": "대학교 축제 현장을 방문해 젤리 상품을 판매하는 현장형 콘텐츠를 구성했습니다." },
    { "title": "채팅 중심 소통", "text": "실시간 채팅을 중심으로 판매자와 시청자가 가볍게 소통하는 방송 방식을 운영했습니다." }
  ],
  "metrics": [
    { "label": "현장", "value": "축제·매장·스튜디오", "note": "공간 제약 없는 모바일 라이브 운영 사례 확보" }
  ],
  "mockups": [
    "assets/live/select-01.jpg",
    "assets/live/select-02.jpg",
    "assets/live/select-03.jpg"
  ],
  "results": [
    "대학교 축제, 오프라인 매장, 스튜디오 등 다양한 환경에서의 모바일 라이브 운영",
    "셀렉트 신사업 초기 단계에서 공간의 제약이 없는 다양한 라이브 운영 사례 확보"
  ],
  "body": "티몬 셀렉트 라이브 (2019.04–2019.08). 대학교 축제, 오프라인 매장, 스튜디오 등 다양한 환경에서 모바일 라이브 운영."
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
