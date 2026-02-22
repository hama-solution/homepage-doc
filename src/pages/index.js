import React, {useEffect, useState, useRef} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const businessItems = [
  {
    tag: 'MES',
    title: 'MES 솔루션',
    desc: '자재관리, 창고관리 등 생산 현장의 디지털 전환을 위한 통합 제조실행 시스템',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.bizIcon}>
        <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="26" width="16" height="12" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <rect x="34" y="26" width="16" height="12" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="42" width="36" height="8" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="14" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="22" cy="14" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="28" cy="14" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    link: '/portfolio',
  },
  {
    tag: 'UTILITY',
    title: '유틸리티 제어 시스템',
    desc: '공조, 보일러, 냉각수, 초순수 등 유틸리티 설비의 통합 모니터링 및 제어',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.bizIcon}>
        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 28v8l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 18l4 4M42 42l4 4M18 46l4-4M42 22l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    link: '/portfolio',
  },
  {
    tag: 'SCADA',
    title: '전력 SCADA',
    desc: '154kV 초고압부터 저압반까지 전력 계통의 실시간 감시 및 제어 시스템',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.bizIcon}>
        <rect x="6" y="14" width="52" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <polyline points="14,38 22,26 30,34 38,22 46,30 52,24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="26" r="2" fill="currentColor" />
        <circle cx="38" cy="22" r="2" fill="currentColor" />
        <circle cx="52" cy="24" r="2" fill="currentColor" />
        <line x1="14" y1="44" x2="14" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="50" y1="44" x2="50" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    link: '/portfolio',
  },
  {
    tag: 'CONTROL',
    title: '통합관제 시스템',
    desc: '다수의 설비 및 시스템을 하나의 관제센터에서 통합 모니터링 및 운영',
    icon: (
      <svg viewBox="0 0 64 64" className={styles.bizIcon}>
        <rect x="4" y="12" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="36" y="12" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="36" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="16" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="48" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="48" cy="20" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="32" cy="44" r="3" fill="currentColor" opacity="0.3" />
        <rect x="28" y="54" width="8" height="4" rx="1" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    link: '/portfolio',
  },
];

const statsData = [
  {label: '설립연도', value: 2023, suffix: ''},
  {label: '수행 프로젝트', value: 18, suffix: '+'},
  {label: '주요 고객사', value: 7, suffix: '개'},
  {label: '글로벌 진출', value: 3, suffix: '개국'},
];

const clientLogos = [
  {name: '삼성전자', logo: '/img/clients/samsung-electronics.png'},
  {name: '삼성SDI', logo: '/img/clients/samsung-sdi.png'},
  {name: '삼성SDS', logo: '/img/clients/samsung-sds.png'},
  {name: '삼성전기', logo: '/img/clients/samsung-electro.png'},
  {name: '삼성디스플레이', logo: '/img/clients/samsung-display.png'},
  {name: 'Soulbrain', initials: 'SB', color: '#e63312'},
  {name: 'SKON', initials: 'SK', color: '#00a651'},
];

/* ──────────────────────────────────────────────
   Hooks
   ────────────────────────────────────────────── */
function useTypingEffect(words, typingSpeed = 100, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return displayText;
}

function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {threshold: 0.3},
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return {count, ref};
}

/* ──────────────────────────────────────────────
   1. Hero Section
   ────────────────────────────────────────────── */
function HeroSection() {
  const typingWords = ['MES', 'SCADA', 'Utility Control', '통합관제'];
  const typedText = useTypingEffect(typingWords, 120, 2200);

  return (
    <header className={styles.hero}>
      <div className={styles.heroParticles}>
        {Array.from({length: 20}).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>HAMA SOLUTION</span>
          <Heading as="h1" className={styles.heroTitle}>
            스마트 팩토리의<br />
            <span className={styles.heroHighlight}>디지털 가치</span>를 창조합니다
          </Heading>
          <div className={styles.heroTyping}>
            <span className={styles.typingText}>{typedText}</span>
            <span className={styles.typingCursor}>|</span>
          </div>
          <p className={styles.heroDesc}>
            산업 현장의 디지털 전환을 선도하는 IT 솔루션 전문 기업
          </p>
          <div className={styles.heroCta}>
            <Link to="/portfolio" className={styles.ctaPrimary}>
              솔루션 보기
            </Link>
            <Link to="/company" className={styles.ctaSecondary}>
              회사 소개
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </div>
    </header>
  );
}

/* ──────────────────────────────────────────────
   2. Total IT Service (stats)
   ────────────────────────────────────────────── */
function StatItem({label, value, suffix}) {
  const {count, ref} = useCountUp(value);
  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statValue}>
        {count}
        <span className={styles.statSuffix}>{suffix}</span>
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsHeader}>
          <span className={styles.sectionLabel}>Total IT Service</span>
          <Heading as="h2" className={styles.sectionTitle}>
            산업 IT 토탈 서비스
          </Heading>
          <p className={styles.sectionDesc}>
            시스템 개발부터 컨설팅, 운영까지 제조 현장에 필요한 모든 IT 서비스를 제공합니다
          </p>
        </div>
        <div className={styles.statsGrid}>
          {statsData.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   3. Our Business
   ────────────────────────────────────────────── */
function BusinessSection() {
  return (
    <section className={styles.businessSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Business</span>
          <Heading as="h2" className={styles.sectionTitle}>
            사업 분야
          </Heading>
        </div>
        <div className={styles.bizGrid}>
          {businessItems.map((item) => (
            <Link
              key={item.tag}
              to={item.link}
              className={styles.bizCard}>
              <span className={styles.bizTag}>{item.tag}</span>
              <div className={styles.bizIconWrapper}>{item.icon}</div>
              <h3 className={styles.bizTitle}>{item.title}</h3>
              <p className={styles.bizDesc}>{item.desc}</p>
              <span className={styles.bizMore}>
                Learn more
                <svg viewBox="0 0 20 20" width="16" height="16">
                  <path d="M4 10h12M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   4. Client Logos
   ────────────────────────────────────────────── */
function ClientSection() {
  return (
    <section className={styles.clientSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Clients</span>
          <Heading as="h2" className={styles.sectionTitle}>
            신뢰하는 파트너
          </Heading>
        </div>
        <div className={styles.clientTrack}>
          <div className={styles.clientSlide}>
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={styles.clientLogo}
                style={{'--brand-color': client.color || '#1428a0'}}>
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={styles.clientLogoImg}
                  />
                ) : (
                  <>
                    <span className={styles.clientInitials}>{client.initials}</span>
                    <span className={styles.clientName}>{client.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   5. CTA Section
   ────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            함께 성장할 인재를 찾습니다
          </Heading>
          <p className={styles.ctaDesc}>
            스마트 팩토리의 미래를 함께 만들어갈 열정적인 인재를 모집합니다
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            채용 정보 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Page: Home
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <Layout
      title="HAMA Solution - 스마트 팩토리 IT 솔루션"
      description="MES, 전력 SCADA, 유틸리티 제어, 통합관제 시스템 전문 기업 하마솔루션">
      <HeroSection />
      <main>
        {/* <StatsSection /> */}
        <BusinessSection />
        <ClientSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
