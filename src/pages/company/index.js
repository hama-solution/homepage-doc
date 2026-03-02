import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

/* ──────────────────────────────────────────────
   1. CEO 인사말 섹션
   ────────────────────────────────────────────── */
function Greeting() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>CEO Greeting</span>
          <Heading as="h2" className={styles.sectionTitle}>
            인사말
          </Heading>
        </div>
        <div className={styles.greetingWrapper}>
          <div className={styles.greetingContent}>
            <blockquote className={styles.greetingQuote}>
              "기술로 산업의 미래를 설계하고,<br />
              신뢰로 고객과 함께 성장합니다."
            </blockquote>
            <p>
              안녕하세요. <strong>(주)에이치앤엠에이</strong> 대표이사입니다.
            </p>
            <p>
              저희 (주)에이치앤엠에이는 제조 현장의 디지털 전환을 선도하는 산업 IT 전문 기업입니다.
              설비/공정제어시스템,통합관제시스템,전력/용역제어시스템,MES 등
              스마트 팩토리 핵심 솔루션을 통해 고객사의 생산성 향상과 운영 효율화를 실현하고 있습니다.
            </p>
            <p>
              급변하는 산업 환경 속에서 현장의 목소리에 귀 기울이며,
              최적화된 기술 솔루션으로 고객의 경쟁력 강화에 기여하겠습니다.
              앞으로도 끊임없는 혁신과 도전으로 산업 자동화의 미래를 함께 만들어가겠습니다.
            </p>
            <p className={styles.ceoSign}>
              <strong>(주)에이치앤엠에이 대표이사</strong>
            </p>
          </div>
          <div className={styles.greetingVisual}>
            <ConsultingIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultingIllustration() {
  return (
    <div className={styles.consultingIllust}>
      <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className={styles.consultingSvg}>
        {/* Background elements */}
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#28165c" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#2e8555" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2e8555" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2e8555" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Decorative circles */}
        <circle cx="340" cy="60" r="40" fill="#2e8555" opacity="0.07" />
        <circle cx="60" cy="270" r="30" fill="#28165c" opacity="0.06" />
        <circle cx="360" cy="250" r="20" fill="#3b82f6" opacity="0.08" />

        {/* Desk */}
        <rect x="30" y="240" width="340" height="8" rx="4" fill="#e2e8f0" />
        <rect x="50" y="248" width="6" height="40" rx="2" fill="#cbd5e1" />
        <rect x="344" y="248" width="6" height="40" rx="2" fill="#cbd5e1" />

        {/* Monitor */}
        <rect x="90" y="80" width="220" height="145" rx="8" fill="url(#screenGrad)" />
        <rect x="90" y="80" width="220" height="145" rx="8" fill="none" stroke="#334155" strokeWidth="3" />
        {/* Monitor stand */}
        <rect x="175" y="225" width="50" height="15" rx="2" fill="#94a3b8" />
        <rect x="160" y="236" width="80" height="6" rx="3" fill="#94a3b8" />

        {/* Screen content - Dashboard */}
        <rect x="100" y="90" width="200" height="125" rx="3" fill="#0f172a" />

        {/* Dashboard header bar */}
        <rect x="100" y="90" width="200" height="18" rx="3" fill="#1e293b" />
        <circle cx="110" cy="99" r="3" fill="#ef4444" />
        <circle cx="120" cy="99" r="3" fill="#f59e0b" />
        <circle cx="130" cy="99" r="3" fill="#22c55e" />
        <text x="200" y="103" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="Arial">Smart Factory Dashboard</text>

        {/* Chart area */}
        <rect x="108" y="115" width="85" height="55" rx="3" fill="#1e293b" />
        {/* Bar chart */}
        <rect x="116" y="150" width="8" height="14" rx="1" fill="url(#chartGrad)" />
        <rect x="128" y="143" width="8" height="21" rx="1" fill="url(#chartGrad)" />
        <rect x="140" y="138" width="8" height="26" rx="1" fill="url(#chartGrad)" />
        <rect x="152" y="131" width="8" height="33" rx="1" fill="url(#chartGrad)" />
        <rect x="164" y="125" width="8" height="39" rx="1" fill="url(#chartGrad)" />
        <rect x="176" y="120" width="8" height="44" rx="1" fill="url(#chartGrad)" />
        <text x="150" y="113" textAnchor="middle" fontSize="5.5" fill="#64748b" fontFamily="Arial">Production Analytics</text>

        {/* Right panel - Stats */}
        <rect x="200" y="115" width="92" height="55" rx="3" fill="#1e293b" />
        <text x="246" y="127" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="Arial">System Status</text>
        <circle cx="220" cy="140" r="8" fill="none" stroke="#2e8555" strokeWidth="2" />
        <text x="220" y="143" textAnchor="middle" fontSize="6" fill="#2e8555" fontWeight="bold" fontFamily="Arial">OK</text>
        <text x="246" y="140" fontSize="5" fill="#94a3b8" fontFamily="Arial">MES</text>
        <circle cx="220" cy="156" r="8" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <text x="220" y="159" textAnchor="middle" fontSize="6" fill="#3b82f6" fontWeight="bold" fontFamily="Arial">OK</text>
        <text x="246" y="158" fontSize="5" fill="#94a3b8" fontFamily="Arial">SCADA</text>

        {/* Bottom row */}
        <rect x="108" y="176" width="55" height="30" rx="3" fill="#1e293b" />
        <text x="135" y="187" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="Arial">Utility</text>
        <text x="135" y="199" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="bold" fontFamily="Arial">98.5%</text>

        <rect x="168" y="176" width="55" height="30" rx="3" fill="#1e293b" />
        <text x="195" y="187" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="Arial">Uptime</text>
        <text x="195" y="199" textAnchor="middle" fontSize="10" fill="#22c55e" fontWeight="bold" fontFamily="Arial">99.9%</text>

        <rect x="228" y="176" width="64" height="30" rx="3" fill="#1e293b" />
        <text x="260" y="187" textAnchor="middle" fontSize="5" fill="#64748b" fontFamily="Arial">Control Center</text>
        <text x="260" y="199" textAnchor="middle" fontSize="10" fill="#8b5cf6" fontWeight="bold" fontFamily="Arial">24/7</text>

        {/* Person 1 - Consultant (left) */}
        <g transform="translate(50, 140)">
          {/* Head */}
          <circle cx="20" cy="30" r="16" fill="#fcd34d" opacity="0.15" />
          <circle cx="20" cy="30" r="12" fill="#f8b84e" />
          {/* Hair */}
          <path d="M10 26 Q8 18, 16 16 Q24 14, 28 20 Q32 18, 30 26" fill="#1e293b" />
          {/* Body */}
          <path d="M5 100 L8 52 Q20 44, 32 52 L35 100" fill="#28165c" />
          {/* Tie */}
          <path d="M18 52 L20 68 L22 52" fill="#2e8555" />
          {/* Collar */}
          <path d="M14 50 L20 56 L26 50" fill="#fff" strokeWidth="0" />
          {/* Arm pointing */}
          <path d="M32 60 Q55 50, 60 55" fill="none" stroke="#28165c" strokeWidth="5" strokeLinecap="round" />
          <circle cx="62" cy="56" r="4" fill="#f8b84e" />
        </g>

        {/* Person 2 - Client (right) */}
        <g transform="translate(320, 150)">
          {/* Head */}
          <circle cx="20" cy="30" r="16" fill="#fcd34d" opacity="0.15" />
          <circle cx="20" cy="30" r="12" fill="#f8b84e" />
          {/* Hair */}
          <path d="M8 28 Q10 16, 20 14 Q30 12, 32 22" fill="#4a3728" />
          {/* Body */}
          <path d="M5 90 L8 52 Q20 44, 32 52 L35 90" fill="#3b82f6" />
          {/* Collar */}
          <path d="M14 50 L20 56 L26 50" fill="#fff" />
          {/* Arm */}
          <path d="M8 60 Q-10 65, -15 60" fill="none" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
          <circle cx="-17" cy="59" r="4" fill="#f8b84e" />
        </g>

        {/* Floating elements */}
        {/* Gear icon */}
        <g transform="translate(42, 55)" opacity="0.5">
          <circle cx="12" cy="12" r="6" fill="none" stroke="#28165c" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.5" fill="#28165c" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 12 + Math.cos(rad) * 6;
            const y1 = 12 + Math.sin(rad) * 6;
            const x2 = 12 + Math.cos(rad) * 9;
            const y2 = 12 + Math.sin(rad) * 9;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#28165c" strokeWidth="2" strokeLinecap="round" />;
          })}
        </g>

        {/* Light bulb icon */}
        <g transform="translate(340, 95)" opacity="0.4">
          <path d="M12 2 C6 2, 2 7, 2 12 C2 16, 5 19, 8 20 L8 24 L16 24 L16 20 C19 19, 22 16, 22 12 C22 7, 18 2, 12 2Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="9" y1="26" x2="15" y2="26" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Chart trend icon */}
        <g transform="translate(50, 80)" opacity="0.4">
          <polyline points="0,14 5,10 10,12 15,4 20,6" fill="none" stroke="#2e8555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="18,2 22,6 18,6" fill="#2e8555" />
        </g>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────
   2. 회사연혁 섹션
   ────────────────────────────────────────────── */
const historyData = [
  {
    year: '2024',
    events: [
      'Hama Solutions Hungary 설립',
    ],
  },
  {
    year: '2023',
    events: [
      '주식회사 에이치앤엠에이 설립',
    ],
  },
];

function History() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>History</span>
          <Heading as="h2" className={styles.sectionTitle}>
            회사연혁
          </Heading>
        </div>
        <div className={styles.timeline}>
          {historyData.map((item, idx) => (
            <div
              key={item.year}
              className={clsx(
                styles.timelineItem,
                idx % 2 === 0 ? styles.timelineLeft : styles.timelineRight,
              )}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <span className={styles.timelineYear}>{item.year}</span>
                <ul className={styles.timelineEvents}>
                  {item.events.map((evt, i) => (
                    <li key={i}>{evt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   3. 조직도 섹션
   ────────────────────────────────────────────── */
function Organization() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Organization</span>
          <Heading as="h2" className={styles.sectionTitle}>
            조직도
          </Heading>
        </div>
        <div className={styles.orgChartV2}>
          {/* Row 1: CEO */}
          <div className={styles.orgRow}>
            <div className={styles.orgCeoBox}>
              <strong>대표이사</strong>
            </div>
          </div>

          {/* Vertical line from CEO */}
          <div className={styles.orgVLine} />

          {/* Row 2: 기술연구소 (left) + 경영지원팀 (right) branching from center */}
          <div className={styles.orgMidRow}>
            <div className={styles.orgMidLeft}>
              <div className={styles.orgHLineBranch} />
              <div className={styles.orgLabBox}>
                <strong>기술연구소</strong>
                <span className={styles.orgLabBadge}>&apos;26 예정</span>
              </div>
            </div>
            <div className={styles.orgMidCenter}>
              <div className={styles.orgHLineCenter} />
            </div>
            <div className={styles.orgMidRight}>
              <div className={styles.orgHLineBranch} />
              <div className={styles.orgMgmtBox}>
                <strong>경영지원팀</strong>
              </div>
            </div>
          </div>

          {/* Vertical line to teams */}
          <div className={styles.orgVLine} />

          {/* Horizontal branch line */}
          <div className={styles.orgBranchLine}>
            <div className={styles.orgBranchH} />
          </div>

          {/* Row 3: Teams */}
          <div className={styles.orgTeamRow}>
            <div className={styles.orgTeamVLine} />
            <div className={styles.orgTeamVLine} />
          </div>
          <div className={styles.orgTeamRow}>
            <div className={styles.orgTeamBox}>
              <strong>Process Control 팀</strong>
              <span>(자동제어, 통합관제)</span>
            </div>
            <div className={styles.orgTeamBox}>
              <strong>MES 개발팀</strong>
              <span>(생산관리, 창고관리)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   4. 오시는길 섹션 (Kakao Map)
   ────────────────────────────────────────────── */
function Location() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Kakao Map SDK 로딩
    if (typeof window === 'undefined') return;
    if (window.kakao && window.kakao.maps) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    // TODO: 실제 Kakao JavaScript 앱 키로 교체하세요
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=e43a45913745b4893c55de36950e79d3&libraries=services&autoload=false';
    script.async = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      // cleanup 시 스크립트 제거하지 않음 (캐싱)
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;
    if (!window.kakao || !window.kakao.maps) return;

    window.kakao.maps.load(() => {
      const coords = new window.kakao.maps.LatLng(37.4004, 127.1064);
      const map = new window.kakao.maps.Map(mapRef.current, {
        center: coords,
        level: 3,
      });

      const marker = new window.kakao.maps.Marker({position: coords});
      marker.setMap(map);

      const infowindow = new window.kakao.maps.InfoWindow({
        content:
          '<div style="padding:8px 12px;font-size:13px;font-weight:600;white-space:nowrap;">(주)에이치앤엠에이 (HAMA Solution)</div>',
      });
      // infowindow.open(map, marker);

      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch('경기 화성시 동탄대로 706', function(result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map : map,
                position : coords,
            });
            
            infowindow.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    });
    });
  }, [mapLoaded]);

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Location</span>
          <Heading as="h2" className={styles.sectionTitle}>
            오시는길
          </Heading>
        </div>
        <div className={styles.locationWrapper}>
          <div className={styles.mapContainer}>
            <div ref={mapRef} className={styles.map} />
          </div>
          <div className={styles.locationInfo}>
            <div className={styles.locationCard}>
              <div className={styles.locationItem}>
                <span className={styles.locationIcon}>📍</span>
                <div>
                  <strong>주소</strong>
                  <p>경기 화성시 동탄대로 706 동탄IT밸리2 718호</p>
                </div>
              </div>
              {/* <div className={styles.locationItem}>
                <span className={styles.locationIcon}>📞</span>
                <div>
                  <strong>전화</strong>
                  <p>031-000-0000</p>
                </div>
              </div>
              <div className={styles.locationItem}>
                <span className={styles.locationIcon}>📠</span>
                <div>
                  <strong>팩스</strong>
                  <p>031-000-0001</p>
                </div>
              </div> */}
              <div className={styles.locationItem}>
                <span className={styles.locationIcon}>✉️</span>
                <div>
                  <strong>이메일</strong>
                  <p>master@hamasol.com</p>
                </div>
              </div>
              <div className={styles.locationItem}>
                <span className={styles.locationIcon}>🚇</span>
                <div>
                  <strong>대중교통</strong>
                  <p>현대트랜시스(중) 도보 5분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Page: Company
   ────────────────────────────────────────────── */
function CompanyHero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={styles.heroLabel}>HAMA SOLUTION</span>
        <Heading as="h1" className={styles.heroTitle}>
          기술로 산업의 미래를 설계합니다
        </Heading>
        <p className={styles.heroSubtitle}>
          MES &middot; 전력 SCADA &middot; 유틸리티 제어 &middot; 통합제어 시스템
        </p>
        <nav className={styles.heroNav}>
          <a href="#greeting" className={styles.heroNavItem}>인사말</a>
          <a href="#history" className={styles.heroNavItem}>회사연혁</a>
          <a href="#organization" className={styles.heroNavItem}>조직도</a>
          <a href="#location" className={styles.heroNavItem}>오시는길</a>
        </nav>
      </div>
    </header>
  );
}

export default function Company() {
  return (
    <Layout
      title="Company"
      description="하마솔루션 회사소개 - MES, 전력 SCADA, 유틸리티 제어, 통합제어 시스템">
      <CompanyHero />
      <main>
        <div id="greeting"><Greeting /></div>
        <div id="history"><History /></div>
        <div id="organization"><Organization /></div>
        <div id="location"><Location /></div>
      </main>
    </Layout>
  );
}
