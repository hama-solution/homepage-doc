import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

/* ══════════════════════════════════════════════
   Client Data
   ══════════════════════════════════════════════ */
const clientGroups = [
  {
    category: 'Samsung Group',
    description: '삼성 그룹사와 함께 스마트 팩토리 솔루션을 구축하고 있습니다.',
    clients: [
      {
        name: '삼성전자',
        nameEn: 'Samsung Electronics',
        description: '반도체, 디스플레이, IT & Mobile',
        color: '#1428a0',
        initial: 'SE',
        logo: '/img/clients/samsung-electronics.png',
      },
      {
        name: '삼성SDI',
        nameEn: 'Samsung SDI',
        description: '이차전지, 전자재료',
        color: '#0b3d91',
        initial: 'SDI',
        logo: '/img/clients/samsung-sdi.png',
      },
      {
        name: '삼성SDS',
        nameEn: 'Samsung SDS',
        description: 'IT 서비스, 클라우드, 물류',
        color: '#0066b3',
        initial: 'SDS',
        logo: '/img/clients/samsung-sds.png',
      },
      {
        name: '삼성전기',
        nameEn: 'Samsung Electro-Mechanics',
        description: '전자부품, MLCC, 기판',
        color: '#00447c',
        initial: 'SEM',
        logo: '/img/clients/samsung-electro.png',
      },
      {
        name: '삼성디스플레이',
        nameEn: 'Samsung Display',
        description: 'OLED, LCD 디스플레이',
        color: '#2c2c8a',
        initial: 'SD',
        logo: '/img/clients/samsung-display.png',
      },
    ],
  },
  {
    category: 'Partners',
    description: '글로벌 파트너사와 함께 사업 영역을 확장하고 있습니다.',
    clients: [
      {
        name: 'Soulbrain',
        nameEn: 'Soulbrain Co., Ltd.',
        description: '2차전지 전해액 및 전자 관련 화학 소재 제조',
        color: '#e63312',
        initial: 'SB',
        logo: '/img/clients/soulbrain.png',
      },
      {
        name: 'SKON',
        nameEn: 'SKON Co., Ltd.',
        description: '이차전지 소재 전문기업',
        color: '#00a651',
        initial: 'SK',
        logo: '/img/clients/skon.png',
      },
    ],
  },
];

const totalClients = clientGroups.reduce(
  (sum, g) => sum + g.clients.length,
  0,
);

/* ══════════════════════════════════════════════
   Components
   ══════════════════════════════════════════════ */

function ClientHero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={styles.heroLabel}>OUR CLIENTS</span>
        <Heading as="h1" className={styles.heroTitle}>
          신뢰할 수 있는 파트너
        </Heading>
        <p className={styles.heroSubtitle}>
          대한민국 대표 기업들과 함께 산업 자동화의 미래를 만들어갑니다
        </p>
{/* 
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <strong>{totalClients}+</strong>
            <span>고객사</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>Global</strong>
            <span>헝가리 외 해외 거점</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>100%</strong>
            <span>고객 재계약률</span>
          </div>
        </div>
         */}
      </div>
    </header>
  );
}

/* ── Logo Component ─────────────────────────── */
function ClientLogo({client}) {
  if (client.logo) {
    return (
      <div className={styles.logoWrap}>
        <img
          src={client.logo}
          alt={client.name}
          className={styles.logoImg}
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className={styles.logoInitial} style={{'--logo-color': client.color}}>
      <span className={styles.logoText}>{client.initial}</span>
    </div>
  );
}

/* ── Client Card ────────────────────────────── */
function ClientCard({client}) {
  return (
    <div className={styles.clientCard} style={{'--card-color': client.color}}>
      <ClientLogo client={client} />
      <div className={styles.clientInfo}>
        <strong className={styles.clientName}>{client.name}</strong>
        <span className={styles.clientNameEn}>{client.nameEn}</span>
        <p className={styles.clientDesc}>{client.description}</p>
      </div>
    </div>
  );
}

/* ── Client Group ───────────────────────────── */
function ClientGroup({group}) {
  return (
    <div className={styles.group}>
      <div className={styles.groupHeader}>
        <Heading as="h2" className={styles.groupTitle}>
          {group.category}
        </Heading>
        <p className={styles.groupDesc}>{group.description}</p>
      </div>
      <div className={styles.clientGrid}>
        {group.clients.map((client, idx) => (
          <ClientCard key={idx} client={client} />
        ))}
      </div>
    </div>
  );
}

/* ── Logo Wall (marquee) ────────────────────── */
function LogoWall() {
  const allClients = clientGroups.flatMap((g) => g.clients);
  const doubled = [...allClients, ...allClients];

  return (
    <section className={styles.logoWallSection}>
      <div className={styles.logoWallTrack}>
        <div className={styles.logoWallSlide}>
          {doubled.map((client, idx) => (
            <div
              key={idx}
              className={styles.logoWallItem}
              style={{'--logo-color': client.color}}>
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className={styles.logoWallImg}
                  loading="lazy"
                />
              ) : (
                <span className={styles.logoWallInitial}>{client.initial}</span>
              )}
              <span className={styles.logoWallName}>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   Page: Client
   ══════════════════════════════════════════════ */
export default function Client() {
  return (
    <Layout
      title="Client"
      description="하마솔루션 고객사 - 삼성전자, 삼성SDI, 삼성SDS, 삼성전기, 삼성디스플레이, Soulbrain, SKON">
      <ClientHero />
      <main>
        {/* Logo Marquee */}
        {/* <LogoWall /> */}

        {/* Client Groups */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>PARTNERS</span>
              <Heading as="h2" className={styles.sectionTitle}>
                함께하는 고객사
              </Heading>
            </div>
            {clientGroups.map((group, idx) => (
              <ClientGroup key={idx} group={group} />
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>WHY HAMA SOLUTION</span>
              <Heading as="h2" className={styles.sectionTitle}>
                고객이 (주)에이치앤엠에이를 선택하는 이유
              </Heading>
            </div>
            <div className={styles.trustGrid}>
              <TrustItem
                icon="🏆"
                number="01"
                title="검증된 기술력"
                desc="삼성 그룹사 다수 프로젝트 수행 경험을 보유한 전문 엔지니어링 기업입니다."
              />
              <TrustItem
                icon="🌍"
                number="02"
                title="글로벌 대응"
                desc="헝가리 등 해외 현지 프로젝트를 직접 수행하는 글로벌 역량을 갖추고 있습니다."
              />
              <TrustItem
                icon="🔧"
                number="03"
                title="맞춤형 솔루션"
                desc="고객 현장에 최적화된 맞춤형 시스템을 설계·구축합니다."
              />
              <TrustItem
                icon="🤝"
                number="04"
                title="장기 파트너십"
                desc="단순 납품이 아닌, 운영·유지보수까지 함께하는 장기 파트너입니다."
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function TrustItem({icon, number, title, desc}) {
  return (
    <div className={styles.trustItem}>
      <div className={styles.trustTop}>
        <span className={styles.trustIcon}>{icon}</span>
        <span className={styles.trustNumber}>{number}</span>
      </div>
      <strong className={styles.trustTitle}>{title}</strong>
      <p className={styles.trustDesc}>{desc}</p>
    </div>
  );
}
