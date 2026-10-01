# eunda works

A Korean AI portfolio presented as a retro desktop: blue wallpaper, silver application windows and an original space backdrop. Includes desktop shortcuts, a START menu, window controls and saved projects.

All pages use the Hamchorom (HCRDotum) webfont, regular weight 400, with font-display: swap.

## 페이지

- `dist/index.html`: 홈, 컬렉션 안내
- `dist/introduce.html`: 내폴더, 자기소개 프로필
- `dist/article.html`: 기사 (요청한 파일명 그대로)
- `dist/image.html`: 이미지 갤러리, 카테고리 필터
- `dist/Live.html`: 영상 기획안
- `dist/project.html`: Final Project 소개
- `dist/content.js`: 메뉴, 자기소개, 작업물 데이터
- `dist/style.css`: 공통 디자인과 반응형 스타일
- `dist/app.js`: 페이지 구성, 상세 창, 관심 작품 저장
- `dist/desktop.js`: 바탕화면, 창 제어, START 메뉴, 시계

## 콘텐츠 교체

각 페이지는 독립적인 HTML 진입점을 가지며, 콘텐츠는 `dist/content.js`에서 관리합니다. `profile`에서 자기소개를, `items` 배열에서 작업물을 수정하세요. 작업물의 title(제목), desc(요약), body(본문), image(이미지 경로)를 바꾸면 됩니다. 새 이미지 파일은 `dist/assets`에 넣고 경로를 연결합니다. 현재 세 이미지 카드는 같은 생성 이미지의 크롭 스터디입니다.

모든 HTML은 `content.js` → `app.js` → `desktop.js` 순서로 불러옵니다. 이 순서는 바꾸지 마세요. 새 작업물을 추가할 때는 `content.js`만 수정하면 됩니다.

영상은 아직 실제 영상이 없는 임시 스토리보드입니다. 실제 자료로 교체할 때 영상 파일을 assets에 넣고 video 요소를 연결하거나 영상 서비스 링크를 사용하세요. 현재 파일 업로드 관리자, 로그인, 서버 저장 기능은 없습니다. 파일을 수정한 후 다시 배포하는 정적 웹사이트입니다.

My picks는 현재 브라우저의 localStorage에 저장됩니다. 다른 브라우저나 기기와 동기화되지 않습니다. 임시 기사, 영상 기획, Final Project 내용은 실제 교육 과제나 성과로 오해하지 않도록 예시 표시를 포함합니다.

## 이미지

dist/assets/eunda-daydream.png는 built-in image_gen으로 생성했습니다.

Prompt: Vintage dreamy pastel editorial still life of floating pearlescent glass five-point stars and spheres over a powder blue/rose horizon. Nostalgic 1990s editorial mood, analog paper texture, film grain, pastel mint/ivory/peach refractions, restrained glow and silver sparkles. No typography, logos, UI, watermark, or shopping bag.

## 검증

HTML 진입점과 로컬 파일 경로, JavaScript 구문을 확인했습니다. 브라우저 시각 검증은 수행하지 않았습니다. WebMCP는 지원되는 환경에서만 활성화되며, 현재 환경에서 실제 등록/실행 검증은 하지 못했습니다.


## Retro desktop update

`dist/desktop.js` manages the desktop, window controls, START menu and clock. `dist/assets/retro-universe.png` is an original image_gen background with blue nebulae, silver orbital paths and four planets.

Verified all five pages in Chrome at desktop and mobile widths, no horizontal overflow or JavaScript errors. Checked window minimize/restore/maximize, START menu, category filter, saved projects and detail dialogs.

Navigation: Note (article.html), Live (Live.html), Project (project.html), Image (image.html). Legacy artcle.html, video.html and final.html redirect to the renamed pages. The desktop top bar has no brand title.
