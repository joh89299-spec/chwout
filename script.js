/**
 * DYNAMIC BUSAN - Main JavaScript
 * Handles Multilingual Toggle, Theme Toggle, Filters, Modals, Bookmarks, and Map Interactions
 */

// ==========================================
// 1. Data Store for Attractions (KO / EN)
// ==========================================
const ATTRACTIONS_DATA = {
  1: {
    id: 1,
    title_ko: "감천문화마을",
    title_en: "Gamcheon Culture Village",
    subtitle_ko: "한국의 마추픽추 & 산토리니",
    subtitle_en: "The Machu Picchu of Korea",
    category: "culture",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    desc_ko: "1950년대 6·25 한국전쟁 피란민들이 산비탈에 터를 잡으며 형성된 계단식 마을입니다. 2009년 '마을미술 프로젝트'를 통해 골목마다 벽화와 독창적인 예술 조형물이 설치되며 세계적인 예술 문화 명소로 탈바꿈했습니다. 미로처럼 얽힌 골목을 탐험하며 스탬프 투어를 즐기고, 마을 정상의 어린 왕자와 사막여우 동상에서 형형색색 지붕과 부산 바다를 배경으로 기념사진을 찍어보세요.",
    desc_en: "Originally formed as a refuge for people fleeing the Korean War in the 1950s, Gamcheon was transformed into an acclaimed art haven through urban regeneration projects starting in 2009. The village features vibrant pastel-hued houses stepped along the steep slopes of coastal hills. International travelers flock here to wander the labyrinthine alleys, collect stamps in the visitor passport, and snap the world-famous photo with the Little Prince looking over the rainbow rooftops.",
    highlights_ko: [
      "어린 왕자와 사막여우 포토존 (인스타 필수 성지)",
      "하늘마루 전망대에서 즐기는 파노라마 오션뷰",
      "골목길 스탬프 투어 및 아기자기한 감성 기념품 숍",
      "마을 곳곳에 숨겨진 50여 점의 인터랙티브 공공 미술품"
    ],
    highlights_en: [
      "The iconic Little Prince and Desert Fox photo spot",
      "Haneulmaru Observatory offering 360-degree village & ocean views",
      "Stamp collecting tour guide with boutique craft souvenir shops",
      "Over 50 whimsical public murals and sculptures hidden along narrow alleys"
    ],
    info: {
      address_ko: "부산광역시 사하구 감내2로 203",
      address_en: "203 Gamnae 2-ro, Saha-gu, Busan",
      hours_ko: "09:00 - 18:00 (연중무휴, 야간 방문 자제)",
      hours_en: "09:00 - 18:00 (Daily, quiet at night)",
      fee_ko: "무료 (지도/스탬프북 2,000원)",
      fee_en: "Free Admission (Map Guide: ₩2,000)",
      transport_ko: "지하철 1호선 토성역 6번 출구 앞 부산대병원 버스정류장에서 사하1-1, 서구2 마을버스 탑승 (약 10분 소요)",
      transport_en: "Subway Line 1 Toseong Station (Exit 6) -> Take local bus Saha 1-1, Seogu 2, or Seogu 2-2 to Gamcheon Elementary School"
    },
    mapQuery: "Gamcheon Culture Village Busan"
  },
  2: {
    id: 2,
    title_ko: "해운대 해수욕장 & 블루라인파크",
    title_en: "Haeundae Beach & Blueline Park",
    subtitle_ko: "바다 위를 달리는 레트로 스카이캡슐",
    subtitle_en: "Busan's Premier Beach & Coastal Sky Capsule",
    category: "ocean",
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80",
    desc_ko: "한국에서 가장 유명한 1.5km 길이의 황금빛 백사장을 자랑하는 해운대 해수욕장은 현대적인 고층 빌딩과 시원한 바다가 공존하는 부산의 상징입니다. 특히 옛 동해남부선 폐선 철로를 친환경 관광열차로 재탄생시킨 '해운대 블루라인파크'는 알록달록한 '스카이캡슐'을 타고 7~10m 공중에서 탁 트인 동해 바다 절경을 프라이빗하게 감상할 수 있어 외국인 여행객의 1순위 예약 필수 코스로 꼽힙니다.",
    desc_en: "Haeundae Beach is South Korea's most celebrated seaside destination, flanked by gleaming modern skyscrapers and luxury seaside hotels. A standout attraction is Haeundae Blueline Park, built over an old seaside railway line. The retro, colorful 'Sky Capsules' hover 7 to 10 meters above the coastal cliffs, providing intimate, 360-degree ocean vistas from Mipo to Cheongsapo. It is easily one of the most viral and booked activities among global visitors.",
    highlights_ko: [
      "스카이캡슐(미포~청사포 2.3km) 공중 레트로 캡슐 탑승",
      "해안선을 바로 옆에서 달리는 해운대 해변열차 (미포~송정 4.8km)",
      "동백섬 해안 산책로 & 누리마루 APEC 하우스",
      "더베이101에서 마린시티 마천루 반영 사진 찍기"
    ],
    highlights_en: [
      "Private Sky Capsule ride hovering above crashing waves",
      "Coastal Beach Train connecting Mipo, Cheongsapo, and Songjeong",
      "Dongbaekseom Island coastal walk and Nurimaru APEC House",
      "The Bay 101 night view reflection photography of Marine City skyscrapers"
    ],
    info: {
      address_ko: "부산광역시 해운대구 해운대해변로 264 / 미포정거장: 달맞이길62번길 13",
      address_en: "264 Haeundaehaebyeon-ro, Haeundae-gu, Busan",
      hours_ko: "해변 상시 개방 / 블루라인파크 09:30 - 18:30 (시즌별 연장 운행)",
      hours_en: "Beach 24/7 / Blueline Park 09:30 - 18:30 (Extended in peak season)",
      fee_ko: "해변 무료 / 스카이캡슐 편도 2인 35,000원, 해변열차 1회 7,000원",
      fee_en: "Beach Free / Sky Capsule ₩35,000 (2-seater one-way) / Train ₩7,000",
      transport_ko: "지하철 2호선 해운대역 3·5번 출구 (해변 도보 5분), 중동역 7번 출구 (미포정거장 도보 10분)",
      transport_en: "Subway Line 2 Haeundae Station (Exit 3/5, 5 min walk) or Jung-dong Station (Exit 7, 10 min walk to Mipo Station)"
    },
    mapQuery: "Haeundae Blueline Park Mipo Station Busan"
  },
  3: {
    id: 3,
    title_ko: "해동용궁사",
    title_en: "Haedong Yonggungsa Temple",
    subtitle_ko: "파도치는 기암절벽 위의 바다 사찰",
    subtitle_en: "The Breathtaking Cliffside Ocean Temple",
    category: "culture",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1200&q=80",
    desc_ko: "1376년 고려시대 공민왕 왕사였던 나옹대사가 창건한 사찰로, 대부분 깊은 산속에 위치한 여타 한국 사찰들과 달리 푸른 동해 바다가 넘실거리는 기암절벽 위에 세워졌습니다. '진심으로 기도하면 누구나 한 가지 소원을 반드시 이룬다'는 전설이 깃들어 있습니다. 108장수계단을 내려서며 마주하는 웅장한 바다와 파도 소리, 붉은 일출은 외국인들에게 잊지 못할 경이로움을 선물합니다.",
    desc_en: "Dating back to 1376 during the Goryeo Dynasty, Haedong Yonggungsa is one of the rare temples in South Korea positioned right along the rugged coastline rather than tucked inside mountain valleys. Legend says that sincere prayers offered here grant at least one true wish. Visitors descend through a dramatic 108-step lantern pathway to be greeted by roaring waves crashing against the temple foundation, statues of the zodiac, and an awe-inspiring golden Buddha.",
    highlights_ko: [
      "108 장수 돌계단과 석등이 만드는 신비로운 진입로",
      "해돋이 바위(일출암)에서 바라보는 장엄한 동해 일출",
      "바다를 굽어보는 해수관음대불 및 금빛 포대화상",
      "용문교(다리) 위에서 소원 동전 던지기 체험"
    ],
    highlights_en: [
      "The 108 stone steps lined with traditional stone lanterns",
      "Sunrise Rock offering dramatic vistas over the roaring East Sea",
      "Magnificent coastal Daungjeon Hall and massive golden Buddha",
      "Tossing wishing coins from the stone bridge into lucky stone basins"
    ],
    info: {
      address_ko: "부산광역시 기장군 기장읍 용궁길 86",
      address_en: "86 Yonggung-gil, Gijang-eup, Gijang-gun, Busan",
      hours_ko: "04:30 - 19:20 (연중무휴)",
      hours_en: "04:30 - 19:20 (Open year-round)",
      fee_ko: "입장료 무료 (주차료 별도)",
      fee_en: "Free Admission (Parking fee applies)",
      transport_ko: "동해선 오시리아역 1번 출구 -> 시내버스 139번 탑승 후 '용궁사국립수산과학원' 하차 (도보 7분)",
      transport_en: "Donghae Line Osiria Station (Exit 1) -> Bus 139 to Yonggungsa bus stop (or ~10 min taxi from Haeundae/Osiria)"
    },
    mapQuery: "Haedong Yonggungsa Temple Busan"
  },
  4: {
    id: 4,
    title_ko: "광안리 해수욕장 & 광안대교",
    title_en: "Gwangalli Beach & Gwangan Bridge",
    subtitle_ko: "환상적인 다이아몬드 브릿지 야경과 드론 라이트쇼",
    subtitle_en: "Diamond Bridge Night Skyline & Drone Spectacular",
    category: "night",
    image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&w=1200&q=80",
    desc_ko: "반달형의 고운 모래사장을 감싸는 광안리 해변은 바다 한가운데를 가로지르는 7.42km의 거대한 현수교 '광안대교(Diamond Bridge)'가 선사하는 파노라마 야경으로 유명합니다. 해변 도로를 따라 세련된 오션뷰 카페, 펍, 수제맥주 브루어리가 밀집해 있어 젊은 여행자들과 외국인들에게 밤마다 활기를 띱니다. 매주 토요일 밤에는 전국 최초 상설 드론쇼인 '광안리 M 드론 라이트쇼'가 펼쳐져 밤하늘을 환상적으로 수놓습니다.",
    desc_en: "A crescent-shaped urban beach famed for its front-row view of the 7.4-kilometer Gwangan Bridge (Diamond Bridge), which illuminates every night with tens of thousands of state-of-the-art LED lights. The beach strip is lined with trendy oceanfront coffee shops, craft breweries, and seafood bars. Every Saturday evening, the city hosts the 'Gwangalli M Drone Light Show'—a mesmerizing free performance of hundreds of coordinated drones creating 3D art across the night sky.",
    highlights_ko: [
      "매주 토요일 밤 상설 '광안리 M 드론 라이트쇼' (무료 관람)",
      "광안대교 LED 미디어 파사드 야경을 바라보며 수제맥주 즐기기",
      "해양레포츠 패들보드(SUP) 성지 (낮과 노을 시간대)",
      "해변가 모래사장에서 즐기는 낭만적인 캔맥주 피크닉"
    ],
    highlights_en: [
      "Free weekly 'M Drone Light Show' every Saturday night",
      "Beachfront craft beer terraces overlooking the dazzling bridge",
      "Korea's top Stand Up Paddleboarding (SUP) hub during daylight & sunset",
      "Classic Korean-style beach picnic with chicken, beer, and ramen"
    ],
    info: {
      address_ko: "부산광역시 수영구 광안해변로 219",
      address_en: "219 Gwanganhaebyeon-ro, Suyeong-gu, Busan",
      hours_ko: "해변 상시 개방 / 드론쇼: 매주 토요일 (동절기 19시·21시 / 하절기 20시·22시)",
      hours_en: "Beach 24/7 / Drone Show: Every Sat (Winter: 7PM, 9PM / Summer: 8PM, 10PM)",
      fee_ko: "해변 및 드론쇼 무료 관람",
      fee_en: "Free Admission & Free Drone Show",
      transport_ko: "지하철 2호선 광안역 3·5번 출구 또는 금련산역 1·3번 출구에서 해변 방향 도보 10분",
      transport_en: "Subway Line 2 Gwangan Station (Exit 3 or 5) or Geumnyeonsan Station (Exit 1 or 3), walk 10 minutes towards the ocean"
    },
    mapQuery: "Gwangalli Beach Busan"
  },
  5: {
    id: 5,
    title_ko: "자갈치시장 & BIFF 광장",
    title_en: "Jagalchi Fish Market & BIFF Square",
    subtitle_ko: "오이소! 보이소! 사이소! K-수산시장 & 길거리 음식",
    subtitle_en: "Korea's Seafood Megahub & Street Food Heaven",
    category: "food",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=80",
    desc_ko: "\"오이소, 보이소, 사이소!\"라는 정겨운 부산 사투리로 유명한 자갈치시장은 대한민국에서 가장 규모가 크고 활기찬 어시장입니다. 갓 잡아 올린 싱싱한 물고기, 대게, 산낙지 등을 1층에서 직접 고르고 2층 회센터에서 즉석 조리해 맛볼 수 있는 생생한 미식 체험이 가능합니다. 길 건너 BIFF(부산국제영화제) 광장에서는 부산의 소울푸드인 달콤고소한 '씨앗호떡'과 비빔당면 등 스트리트 푸드를 즐길 수 있습니다.",
    desc_en: "Buzzing with the famous Busan catchphrase 'Oiso, Boiso, Saiso' (Come, Look, Buy!), Jagalchi is South Korea's largest and most authentic seafood market. The ground floor is a sprawling maze of lively stalls with live fish, king crabs, and abalone, which you can purchase and take directly to the 2nd-floor restaurants for instant sashimi or spicy stew. Just across the street is BIFF Square, where foodies line up for iconic 부산 seed-stuffed pancakes (Ssiat Hotteok) and street bites.",
    highlights_ko: [
      "1층 활어 수조에서 해산물 골라 2층 초장집에서 즉석 맛보기",
      "자갈치 현대화 건물 7층 하늘공원 전망대 (부산 남항 무료 뷰)",
      "BIFF 광장의 전설적인 '씨앗호떡', 떡볶이, 물떡 먹거리 투어",
      "부산 아지매들의 정겨운 활력과 새벽 항구의 이색적인 정취"
    ],
    highlights_en: [
      "The 'Catch & Eat' experience: pick live seafood on 1F, eat on 2F",
      "Free 7th floor Rooftop Observatory overlooking Busan Harbor",
      "Tasting iconic Ssiat Hotteok (sweet brown sugar seed pancakes) at BIFF Square",
      "Vibrant port-city atmosphere powered by the legendary 'Jagalchi Ajumma' fishmongers"
    ],
    info: {
      address_ko: "부산광역시 중구 자갈치해안로 52",
      address_en: "52 Jagalchihaean-ro, Jung-gu, Busan",
      hours_ko: "05:00 - 22:00 (첫째·셋째 주 화요일 휴무)",
      hours_en: "05:00 - 22:00 (Closed 1st & 3rd Tuesday of every month)",
      fee_ko: "시장 입장 무료 (음식 비용 별도)",
      fee_en: "Free Market Entry (Pay per meal/food item)",
      transport_ko: "지하철 1호선 자갈치역 10번 출구 (도보 3분) 또는 남포역 1·2번 출구",
      transport_en: "Subway Line 1 Jagalchi Station (Exit 10, 3 min walk) or Nampo Station (Exit 1 or 2)"
    },
    mapQuery: "Jagalchi Market Busan"
  }
};

// ==========================================
// 2. Application State & Storage
// ==========================================
let currentLang = localStorage.getItem('busan_vibes_lang') || 'ko';
let currentTheme = localStorage.getItem('busan_vibes_theme') || 'light';
let savedBookmarks = JSON.parse(localStorage.getItem('busan_vibes_bookmarks') || '[]');

// ==========================================
// 3. DOM Elements Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initBookmarksUI();
  setupFilterTabs();
  setupDetailModals();
  setupMapPins();
  setupScrollEffects();
  setupMobileMenu();
});

// ==========================================
// 4. Theme Toggle (Dark / Light)
// ==========================================
function initTheme() {
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', currentTheme);
      localStorage.setItem('busan_vibes_theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (currentTheme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// ==========================================
// 5. Language Switcher (KO / EN)
// ==========================================
function initLanguage() {
  setLanguage(currentLang);

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ko' ? 'en' : 'ko';
      setLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('busan_vibes_lang', lang);
  document.documentElement.lang = lang;

  // Toggle badge styles
  const koBadge = document.getElementById('langKO');
  const enBadge = document.getElementById('langEN');
  if (koBadge && enBadge) {
    if (lang === 'ko') {
      koBadge.classList.add('active');
      enBadge.classList.remove('active');
    } else {
      koBadge.classList.remove('active');
      enBadge.classList.add('active');
    }
  }

  // Update all elements with data-ko and data-en
  const translatables = document.querySelectorAll('[data-ko][data-en]');
  translatables.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
    }
  });

  // Re-render bookmark modal if open
  renderBookmarksList();
}

// ==========================================
// 6. Category Filter Tabs
// ==========================================
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.attraction-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 7. Detail Modal Logic
// ==========================================
function setupDetailModals() {
  const modal = document.getElementById('detailModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const detailButtons = document.querySelectorAll('.detail-btn');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-detail');
      openDetailModal(id);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeDetailModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDetailModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeBookmarkModal();
    }
  });
}

function openDetailModal(id) {
  const item = ATTRACTIONS_DATA[id];
  if (!item) return;

  const modal = document.getElementById('detailModal');
  const modalContent = document.getElementById('modalContent');
  const isKo = currentLang === 'ko';

  const title = isKo ? item.title_ko : item.title_en;
  const subtitle = isKo ? item.subtitle_ko : item.subtitle_en;
  const desc = isKo ? item.desc_ko : item.desc_en;
  const highlights = isKo ? item.highlights_ko : item.highlights_en;
  const address = isKo ? item.info.address_ko : item.info.address_en;
  const hours = isKo ? item.info.hours_ko : item.info.hours_en;
  const fee = isKo ? item.info.fee_ko : item.info.fee_en;
  const transport = isKo ? item.info.transport_ko : item.info.transport_en;

  const highlightsHtml = highlights.map(h => `<li><i class="fa-solid fa-circle-check" style="color: var(--ocean-deep); margin-right: 8px;"></i>${h}</li>`).join('');

  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(item.title_ko)}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`;

  modalContent.innerHTML = `
    <div class="modal-media">
      <img src="${item.image}" alt="${title}" onerror="this.src='https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80';">
    </div>
    <div class="modal-detail-body">
      <div class="modal-title-wrap">
        <h2 class="modal-title">${title}</h2>
        <span class="modal-subtitle">${subtitle}</span>
      </div>
      
      <p class="modal-desc">${desc}</p>

      <h4 class="modal-section-title">
        <i class="fa-solid fa-star" style="color: var(--busan-gold);"></i>
        <span>${isKo ? '주요 관람 포인트' : 'Key Highlights'}</span>
      </h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; font-size: 0.9rem;">
        ${highlightsHtml}
      </ul>

      <h4 class="modal-section-title">
        <i class="fa-solid fa-circle-info" style="color: var(--ocean-deep);"></i>
        <span>${isKo ? '방문 실용 정보' : 'Visitor Practical Info'}</span>
      </h4>
      <div class="modal-info-list">
        <div class="modal-info-item">
          <span class="modal-info-label">${isKo ? '위치' : 'Location'}</span>
          <span class="modal-info-val">${address}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">${isKo ? '운영시간' : 'Operating Hours'}</span>
          <span class="modal-info-val">${hours}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">${isKo ? '입장료' : 'Admission'}</span>
          <span class="modal-info-val">${fee}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">${isKo ? '대중교통' : 'Public Transit'}</span>
          <span class="modal-info-val">${transport}</span>
        </div>
      </div>

      <div class="modal-links-group">
        <a href="${googleMapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <i class="fa-solid fa-map-location-dot"></i>
          <span>${isKo ? '구글 지도로 길찾기' : 'View on Google Maps'}</span>
        </a>
        <a href="${naverMapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="background: #03c75a; border-color: #03c75a; color: #fff; flex: 1;">
          <i class="fa-solid fa-location-arrow"></i>
          <span>${isKo ? '네이버 지도로 보기' : 'Naver Map'}</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 8. Bookmark System
// ==========================================
function initBookmarksUI() {
  updateBookmarkCount();

  // Bind like buttons in cards
  const cards = document.querySelectorAll('.attraction-card');
  cards.forEach(card => {
    const id = parseInt(card.getAttribute('data-id'), 10);
    const likeBtn = card.querySelector('.like-btn');

    if (savedBookmarks.includes(id)) {
      likeBtn.classList.add('liked');
    }

    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(id, likeBtn);
    });
  });

  // Open Bookmark Drawer Modal
  const openBookmarksBtn = document.getElementById('openBookmarksBtn');
  const bookmarkModal = document.getElementById('bookmarkModal');
  const bookmarkCloseBtn = document.getElementById('bookmarkCloseBtn');

  if (openBookmarksBtn) {
    openBookmarksBtn.addEventListener('click', () => {
      renderBookmarksList();
      bookmarkModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (bookmarkCloseBtn) {
    bookmarkCloseBtn.addEventListener('click', closeBookmarkModal);
  }

  if (bookmarkModal) {
    bookmarkModal.addEventListener('click', (e) => {
      if (e.target === bookmarkModal) closeBookmarkModal();
    });
  }
}

function toggleBookmark(id, btnElement) {
  const idx = savedBookmarks.indexOf(id);
  if (idx > -1) {
    savedBookmarks.splice(idx, 1);
    if (btnElement) btnElement.classList.remove('liked');
  } else {
    savedBookmarks.push(id);
    if (btnElement) btnElement.classList.add('liked');
  }

  localStorage.setItem('busan_vibes_bookmarks', JSON.stringify(savedBookmarks));
  updateBookmarkCount();
}

function updateBookmarkCount() {
  const countEl = document.getElementById('bookmarkCount');
  if (countEl) {
    countEl.textContent = savedBookmarks.length;
  }
}

function closeBookmarkModal() {
  const bookmarkModal = document.getElementById('bookmarkModal');
  if (bookmarkModal) {
    bookmarkModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderBookmarksList() {
  const listContainer = document.getElementById('bookmarkList');
  if (!listContainer) return;

  const isKo = currentLang === 'ko';

  if (savedBookmarks.length === 0) {
    listContainer.innerHTML = `
      <div class="bookmark-empty">
        <i class="fa-regular fa-heart"></i>
        <p>${isKo ? '아직 찜한 명소가 없습니다. 마음에 드는 명소 카드의 하트를 눌러보세요!' : 'No saved spots yet. Tap the heart icon on any sight to save it!'}</p>
      </div>
    `;
    return;
  }

  let html = '<div class="bookmark-items-list">';
  savedBookmarks.forEach(id => {
    const item = ATTRACTIONS_DATA[id];
    if (item) {
      const title = isKo ? item.title_ko : item.title_en;
      const subtitle = isKo ? item.subtitle_ko : item.subtitle_en;
      html += `
        <div class="bookmark-card-mini">
          <div>
            <div class="bookmark-mini-title">${title}</div>
            <div class="bookmark-mini-subtitle">${subtitle}</div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.8rem; width: auto;" onclick="closeBookmarkModal(); openDetailModal(${id});">
              ${isKo ? '보기' : 'View'}
            </button>
            <button class="bookmark-remove-btn" title="삭제" onclick="removeBookmarkItem(${id})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }
  });
  html += '</div>';

  listContainer.innerHTML = html;
}

// Global removal helper
window.removeBookmarkItem = function(id) {
  const card = document.querySelector(`.attraction-card[data-id="${id}"]`);
  const likeBtn = card ? card.querySelector('.like-btn') : null;
  toggleBookmark(id, likeBtn);
  renderBookmarksList();
};

window.openDetailModal = openDetailModal;
window.closeBookmarkModal = closeBookmarkModal;

// ==========================================
// 9. Interactive Map Pins
// ==========================================
function setupMapPins() {
  const pins = document.querySelectorAll('.map-pin');
  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      const targetId = pin.getAttribute('data-target');
      const targetCard = document.querySelector(`.attraction-card[data-id="${targetId}"]`);
      
      if (targetCard) {
        // Ensure the card is visible if filter was applied
        targetCard.style.display = 'flex';
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add highlight pulse animation
        targetCard.style.boxShadow = '0 0 0 4px var(--ocean-deep), var(--shadow-hover)';
        setTimeout(() => {
          targetCard.style.boxShadow = '';
        }, 1800);
      }
    });
  });
}

// ==========================================
// 10. Scroll Spy & Back to Top
// ==========================================
function setupScrollEffects() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Show/hide Back To Top
    if (scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Scroll Spy for Navigation Active Link
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================
// 11. Mobile Navigation Menu
// ==========================================
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}
