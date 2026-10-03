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

## Sparkling sea background · 2026-10-03

The desktop wallpaper uses an original turquoise sea image with silver sparkles and subtle pastel light. Generated with the built-in image_gen tool; the asset and complete prompt are recorded in `dist/assets/ocean-background.md`. All goldfish visuals, animation code and website assets were removed at the user's request. Reduced-motion preferences disable the decorative glints. Portfolio categories are still placeholders pending the user's choice of new names and structure.

## Portfolio folder names

Navigation, desktop shortcuts and START menu now contain four folders: My universe (introduction and experience, `introduce.html`), Live (`Live.html`), Commercial (`project.html`) and AI (`image.html`). The old separate home shortcut, 내폴더 and Note entries have been removed. Existing URLs and placeholder work descriptions remain available for later content replacement. AI is intended to collect videos, images and app introductions; actual new work and career details have not yet been provided.

## Orbital space wallpaper and star cursor

The active desktop wallpaper is now the user's supplied monochrome orbital image, copied unchanged to `dist/assets/orbital-space.png`. The sea overlay has been removed. A native silver-white star cursor (`dist/assets/star-cursor.svg`) and short fading star trail follow mouse movement. Trails ignore clicks, are bounded and automatically removed, and are disabled for touch pointers and reduced-motion preferences. Verified wallpaper loading, star cursor, trail generation/cleanup, reduced-motion behavior and mobile overflow in Chrome; no JavaScript errors.

## Quiet orbits revision

Replaced the low-resolution reference wallpaper with an original image_gen composition: three silver planets, sparse stars, thin orbital arcs and dark negative space behind desktop folders. Active image and exact generation prompt: `dist/assets/quiet-orbits.webp` and `dist/assets/quiet-orbits.md`. Commercial uses a silver clapperboard SVG; AI uses a chip/sparkle SVG across shortcuts, windows, taskbar and START menu. Folder names have dark translucent backplates for legibility. Verified Chrome desktop and mobile screenshots, icon loading, Commercial navigation and START menu; no horizontal overflow or browser errors. The star cursor remains active.

## Unified silver icons

My universe now uses a silver globe, Live a silver broadcast camera, and START a silver ringed planet. All use the same silver highlights and dark blue-gray shading as Commercial and AI, with shared SVG icons in desktop shortcuts, menus, window title bars, address bars and taskbar. Verified desktop/mobile asset loading and layout, and profile window icons; no browser errors or horizontal overflow.

## First Commercial work: 29CM × 재지팩트

Replaced the Commercial concept placeholder with `Lifes Like Recollection` (2020.12), based on the user's portfolio screenshots. The work is stored as a structured `project` item in `dist/content.js`, including purpose, roles, per-task contributions (100/100/50/100%), execution, campaign results and tools. Approx. KRW 1 billion is explicitly labeled total campaign sales, not revenue attributable to the video alone.

The responsive case study uses the existing silver window UI, with a high-resolution YouTube thumbnail and click-to-load privacy-enhanced YouTube embed, plus a direct YouTube fallback link. Works can be saved and opened from My picks; closing the detail dialog clears its player. Additional Commercial items can use the same data structure and renderer. Verified desktop/mobile layout, thumbnail loading, saved-work detail and dialog cleanup, and iframe creation. Automated checks do not establish successful video playback in every user's browser or embedding eligibility. The public GitHub Pages site has not been redeployed.

## First Live work: Mmlg × 해쭈

Replaced the three Live storyboard placeholders with the user's first real broadcast, Musinsa Edition Mmlg × 해쭈 (2024.10). Added filters for 전체 / 티몬 / 무신사 / 배민, with truthful empty states for companies without registered work. The Musinsa career overview (2021.07–2025.07, approx. 91 broadcasts) is separate from the individual case study. Metrics, responsibilities and four execution points come from the user's portfolio slides; no broadcast-specific contribution percentage is inferred from the career overview.

Includes a 9:16 click-to-load YouTube highlight, three full-frame broadcast captures, and an expandable related article capture. Original files in `portfolio image` are preserved; optimized WebP copies are in `dist/assets/live`. Article content is presented as a supplied capture, without inventing an external article URL. The approx. KRW 300 million metric is broadcast revenue; peak simultaneous viewers (4,606) are not conflated with the article's cumulative viewers. Verified desktop/mobile layouts, filters and empty states, all local images, saved-work details, YouTube player loading, stopping/restoring the player on filter changes, and the existing Commercial page.

## First AI personal work: 김호덕

Replaced the three AI image placeholders with the 김호덕 character/ASMR personal project (2026.07). Added provisional filters 전체 / 캐릭터 / 영상 / 이미지 / 앱, with truthful empty states. The single character project includes three separate 9:16 Shorts (알사탕, 떡볶이, 라면), character identity @kimhodie, a six-view character sheet, four candy scene studies, responsibilities, 100% contribution, and the supplied ChatGPT → Gemini → Kling AI → Premiere Pro workflow.

Source images under `portfolio image/김호덕` are preserved. Optimized copies live under `dist/assets/ai`. Candy uses a supplied image as its video poster; tteokbokki and ramen use directly embedded YouTube thumbnail URLs, without downloaded remote media. Videos load on click; starting another episode or hiding the project through filters clears the prior player. Verified desktop/mobile rendering, all imagery, filters and empty states, all three YouTube player connections, single active episode, player cleanup, and saved-project details. Public deployment remains pending.

## My universe: 서다은 introduction

Rebuilt the introduction layout and copy using the user's Canva About Me page and supplied career screenshots. Includes a profile hero, production experience, capabilities and tools, four company career entries, seven freelance projects, and a bottom contact section. Career dates and responsibilities are stored in `dist/content.js`; Musinsa ends in 2025.08 as specified in the latest screenshot.

The supplied 동숲 profile illustration is preserved and displayed with responsive CSS cropping from an optimized WebP copy in `dist/assets/profile`. Both contact links use `mailto:eunda.works@gmail.com`, opening the visitor's email application. Verified desktop and narrow mobile layouts, no horizontal overflow, career/project counts, contact navigation and email links, and the existing Commercial, Live and AI pages. Public deployment remains pending.

## Personal observatory desktop

Applied the approved A observatory composition with B's subtle blue-black palette. The wallpaper is now vector-based, with three sparse elliptical orbits, slowly moving planets, a light grain texture and 72 stars that fade in and out independently. Reduced-motion preferences pause orbital movement and show static stars. Replaced all category icons with matching simple silver pixel SVGs, removed home display typography, and made START text-only. The approved starburst cursor and its fading trail remain active. Verified desktop/mobile layout, star animation, reduced-motion pause/resume, START menu, Live content and asset loading; no horizontal overflow or browser errors. Changes are local pending publication.

The final icon revision uses filled retro pixel art with a shared sky-blue, sage-green and cool silver palette: an Earth without a stand or meridian ring, camcorder, clapperboard and desktop computer with a generated star. Shortcut art is centered at equal sizes; labels have no background box and use a dark text outline with a closer icon-to-label gap.
