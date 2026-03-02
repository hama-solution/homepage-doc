import React, {useState, useRef, useEffect} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

/* ══════════════════════════════════════════════
   Portfolio Data - 하마솔루션 4대 핵심 사업
   ══════════════════════════════════════════════ */
const portfolioData = [
  {
    id: 'mes',
    tag: 'Manufacturing',
    title: 'MES',
    fullTitle: '자재관리 / 창고관리',
    subtitle: 'Manufacturing Execution System',
    summary:
      '제조 현장에서 사용되는 자재 및 창고에 대한 관리를 바코드 시스템을 활용하여 효율성을 높이고 물류의 상황을 실시간으로 추적합니다.',
    description:
      '제조 현장의 자재 입출고부터 창고 관리까지, 바코드 기반의 체계적인 물류 관리 시스템을 구축합니다. PDA 바코드 스캐너를 활용한 모바일 입출고 관리, 실시간 재고 추적, 자동화된 물류 프로세스를 통해 제조 현장의 효율을 극대화합니다.',
    color: '#3b82f6',
    icon: '🏭',
    features: [
      {
        icon: '📱',
        title: 'PDA 바코드 스캐닝',
        desc: 'PDA 단말기를 활용한 바코드 스캐닝으로 입고/출고 용기번호를 실시간 처리합니다.',
      },
      {
        icon: '📦',
        title: '입고창고 관리',
        desc: '원자재 입고 시 바코드 스캔으로 자동 등록, 입고 위치 및 수량을 실시간 관리합니다.',
      },
      {
        icon: '⚙️',
        title: '생산공정 연동',
        desc: '생산공정과 연계하여 자재 투입 현황을 실시간으로 추적하고 관리합니다.',
      },
      {
        icon: '🚛',
        title: '출고창고 관리',
        desc: '완제품 출고 시 바코드 스캔으로 출고 이력을 자동 기록하고 추적합니다.',
      },
    ],
    processFlow: {
      title: '물류 프로세스 흐름',
      steps: [
        {label: '입고 용기번호\n바코드 스캔', icon: '📱'},
        {label: '입고창고', icon: '🏬'},
        {label: '생산공정', icon: '⚙️'},
        {label: '출고창고', icon: '📤'},
        {label: '출고 용기번호\n바코드 스캔', icon: '📱'},
      ],
    },
    systemComponents: [
      {name: 'PDA 바코드 스캐너', desc: '모바일 입출고 관리 단말'},
      {name: '바코드 라벨 프린터', desc: '용기/자재 라벨 출력'},
      {name: 'CMS 서버', desc: '중앙 데이터 관리 서버'},
      {name: '실시간 대시보드', desc: '재고 현황 모니터링'},
    ],
    softwareArch: {
      title: '소프트웨어 구성도',
      backend: {
        label: 'Framework (Back-end)',
        framework: 'Spring Framework (Spring Boot 2.7.18)',
        items: ['Spring Data JPA', 'JPA/Hibernate', 'Apache Common', 'Query DSL'],
        runtime: 'JVM (JAVA Virtual Machine) 11',
      },
      api: {
        label: 'Rest API',
        protocol: 'JSON',
      },
      frontend: {
        label: 'Framework (Front-end)',
        framework: 'UI Framework (Thymeleaf)',
        items: ['Javascript', 'HTML5', 'CSS3'],
        runtime: 'Web Browser (Edge/Chrome/Safari)',
      },
      infra: {
        database: 'Database - MySQL',
        server: 'Window Server',
      },
      devops: [
        {name: 'Oracle Cloud Server', role: '개발 Server'},
        {name: 'GitLab', role: '개발자원관리'},
        {name: 'Jenkins', role: '자원빌드'},
        {name: 'Docker', role: '실서버 무중단배포'},
      ],
    },
    hardwareArch: {
      title: '하드웨어 구성도',
      layers: [
        {
          name: 'Information Network',
          items: ['Network Switching', 'Web Client (PC x 3대)'],
        },
        {
          name: 'CMS Server',
          items: ['CMS 중앙 관리 서버'],
        },
        {
          name: 'CMS Network',
          items: ['입고 AP (무선 Access Point)', '입고 PDA (x2대)', '출고 AP (무선 Access Point)', '출고 PDA (x2대)'],
        },
      ],
    },
    effects: [
      '입출고 처리 시간 70% 단축',
      '재고 정확도 99.5% 이상 달성',
      '물류 인력 비용 40% 절감',
      '실시간 재고 추적 및 이력 관리',
    ],
  },
  {
    id: 'utility',
    tag: 'Utility Control',
    title: 'UTILITY',
    fullTitle: '공조 / 보일러 / 냉각수 / 초순수',
    subtitle: 'Utility Control System',
    summary:
      '공정 및 Utility 설비의 실시간 모니터링과 제어를 위한 시스템으로 공정관리, Alarm관리, 레포트관리 등을 제공하는 시스템으로 생산을 위한 안정적인 환경을 제공합니다.',
    description:
      '공장 내 공조(HVAC), 보일러, 냉각수, 초순수 등 유틸리티 설비의 통합 모니터링 및 제어 시스템을 구축합니다. FMCS(Facility Monitoring & Control System) 네트워크 기반으로 사무동, 창고동, 복지동 등 전 영역의 설비를 중앙에서 관리하며, 공정관리, Alarm관리, 레포트관리를 통해 안정적인 생산 환경을 보장합니다.',
    color: '#10b981',
    icon: '🔧',
    features: [
      {
        icon: '🌡️',
        title: '공조(HVAC) 제어',
        desc: '온도, 습도, 청정도 등 환경 조건을 자동으로 제어하여 최적의 생산 환경을 유지합니다.',
      },
      {
        icon: '🔥',
        title: '보일러 관리',
        desc: '보일러 설비의 실시간 상태 감시와 자동 제어로 에너지 효율을 극대화합니다.',
      },
      {
        icon: '💧',
        title: '냉각수/초순수 관리',
        desc: '냉각수 및 초순수 설비의 수질, 유량, 압력을 실시간으로 모니터링합니다.',
      },
      {
        icon: '🚨',
        title: 'Alarm 관리',
        desc: '설비 이상 발생 시 즉각적인 알람 발생과 이력 관리로 신속하게 대응합니다.',
      },
    ],
    architecture: {
      title: 'FMCS 네트워크 구성',
      layers: [
        {
          name: '관리 서버',
          items: ['HMI Server', 'DB Server', 'Client 워크스테이션'],
        },
        {
          name: 'FMCS Network',
          items: ['Primary Cable(P)', 'Secondary Cable(S)', 'AB DLR 광 Cable', 'FTP Cable', 'N/W Panel', 'Middleware Panel'],
        },
        {
          name: '제어 영역',
          items: ['사무동 (CPU-1OHVAC-1)', '창고동 (가스저장소, 보세창고, 위험물저장소)', '복지동 (CPU Utility(1), 자원순환센터)'],
        },
      ],
    },
    networkDetail: {
      title: '건물별 제어 네트워크 상세',
      buildings: [
        {
          name: '사무동',
          color: '#10b981',
          controllers: [
            {name: 'RCC-1i / RCC-1o', type: 'controller'},
            {name: 'RIO-1i / RIO-1o', type: 'rio'},
            {name: 'RIO-1a / RIO-1b', type: 'rio'},
            {name: 'N/W R/S-1', type: 'network'},
            {name: 'CPU-1OHVAC-1', type: 'cpu'},
          ],
          floor: '5F ~ 4F',
        },
        {
          name: '창고동',
          color: '#3b82f6',
          controllers: [
            {name: '가스저장소', type: 'facility'},
            {name: '보세창고(위험물저장소)', type: 'facility'},
            {name: 'RIO-2a', type: 'rio'},
            {name: 'N/W No.2', type: 'network'},
            {name: 'CPU-1AHVAC-1', type: 'cpu'},
          ],
          floor: '',
        },
        {
          name: '복지동',
          color: '#f59e0b',
          controllers: [
            {name: 'NI-1a / MID-1a', type: 'controller'},
            {name: 'CPU Utility(1)', type: 'cpu'},
            {name: 'RIO-1', type: 'rio'},
            {name: '자원순환센터', type: 'facility'},
          ],
          floor: '',
        },
      ],
      cableTypes: [
        {name: 'Primary Cable (P)', color: '#ef4444'},
        {name: 'Secondary Cable (S)', color: '#3b82f6'},
        {name: 'AB DLR 광 Cable', color: '#22c55e'},
        {name: 'FTP Cable', color: '#6b7280'},
      ],
    },
    effects: [
      '설비 가동률 95% 이상 유지',
      '에너지 비용 20% 절감',
      '설비 고장 사전 예방 (예지보전)',
      '중앙 통합 관제로 인력 효율화',
    ],
  },
  {
    id: 'scada',
    tag: 'Power System',
    title: 'SCADA',
    fullTitle: '전력 감시 제어 시스템',
    subtitle: 'Power SCADA System',
    summary:
      '공장의 전원을 공급하는 154kV~저압반의 전력망을 계전기 및 Meter를 활용하여 실시간으로 감시 및 제어를 수행합니다.',
    description:
      '154kV 초고압 수전부터 저압반까지 전체 전력 계통을 실시간으로 감시하고 제어하는 전력 SCADA 시스템을 구축합니다. 보호 계전기, 디지털 Meter, BCU(Bay Control Unit) 등의 IED(Intelligent Electronic Device)를 Fiber Optic 통신으로 연결하여 고속·고신뢰 데이터 수집 및 제어를 수행합니다.',
    color: '#f59e0b',
    icon: '⚡',
    features: [
      {
        icon: '📊',
        title: '실시간 전력 감시',
        desc: '전압, 전류, 전력, 역률 등 전력 품질 데이터를 실시간으로 수집·감시합니다.',
      },
      {
        icon: '🛡️',
        title: '보호 계전기 연동',
        desc: '보호 계전기와 연동하여 사고 발생 시 자동 차단 및 이벤트 기록을 수행합니다.',
      },
      {
        icon: '🔌',
        title: '원격 제어',
        desc: '차단기 ON/OFF, 탭 변환 등 전력 설비를 중앙에서 원격으로 제어합니다.',
      },
      {
        icon: '📈',
        title: '전력 분석 리포트',
        desc: '수요 예측, 피크 관리, 전력 사용량 분석 리포트를 자동으로 생성합니다.',
      },
    ],
    architecture: {
      title: '시스템 구성도',
      layers: [
        {
          name: '2단지 Main Backbone Rack / Server Rack',
          items: ['DB서버(이중화)', 'App서버(이중화)', 'IO 서버(이중화)', '방화벽', 'OIS 서버', 'GPS'],
        },
        {
          name: '운영 장비',
          items: ['빔프로젝터', 'EWS', 'OWS', 'OWS', 'Logging 프린터', 'Hard Copier'],
        },
        {
          name: '통신 네트워크',
          items: ['Fiber Optic (multi)', 'Fiber Optic (single)', 'UTP Cable', 'S/M FDF', 'FDF'],
        },
        {
          name: '현장 장비',
          items: ['수/배전 Panel (보호 계전기)', 'BCU Panel (보호 계전기)', 'SWITCH HUB'],
        },
      ],
    },
    scadaDetail: {
      title: '수/배전 Panel 및 BCU Panel 상세',
      panels: [
        {
          name: '수/배전 Panel',
          color: '#f59e0b',
          items: [
            {name: '보호 계전기', type: 'device'},
            {name: '보호 계전기', type: 'device'},
            {name: 'M/M LC', type: 'connector'},
            {name: 'S/M LC', type: 'connector'},
          ],
        },
        {
          name: 'BCU Panel',
          color: '#ef4444',
          items: [
            {name: 'BCU', type: 'device'},
            {name: '보호 계전기', type: 'device'},
            {name: 'Multi-Core 광 케이블', type: 'cable'},
            {name: 'M/M LC', type: 'connector'},
            {name: 'S/M FDF', type: 'connector'},
            {name: 'SWITCH HUB', type: 'network'},
            {name: 'M/M LC', type: 'connector'},
          ],
        },
      ],
      cableTypes: [
        {name: 'Fiber Optic (multi)', color: '#ef4444'},
        {name: 'Fiber Optic (single)', color: '#f59e0b'},
        {name: 'UTP Cable', color: '#3b82f6'},
      ],
      jumperCodes: [
        {name: 'Jumper Code (실외/외부형)', location: '외부 배선'},
        {name: 'Jumper Code (실내/루프형)', location: '내부 배선'},
      ],
    },
    effects: [
      '전력 사고 대응시간 90% 단축',
      '전력 품질 실시간 감시',
      '무인 변전소 운영 실현',
      '전력 데이터 분석 기반 비용 절감',
    ],
  },
  {
    id: 'control-center',
    tag: 'Integrated System',
    title: '통합관제',
    fullTitle: '통합관제센터 구축',
    subtitle: 'Integrated Control Center',
    summary:
      '에너지 절약제품 및 친환경 자재를 활용하고 근무자의 시야각과 편의성을 고려한 설계로 통합관제센터를 구축합니다.',
    description:
      '에너지 절약 제품 및 친환경 자재를 활용하고, 근무자의 시야각과 편의성을 고려한 인체공학적 설계로 통합관제센터를 구축합니다. 대형 비디오월, 개별 모니터링 콘솔, 브리핑룸 등을 포함한 최적의 관제 환경을 설계하며, 전력 SCADA, 유틸리티 제어, MES 등 전 시스템을 하나의 공간에서 통합 운영합니다.',
    color: '#8b5cf6',
    icon: '🖥️',
    features: [
      {
        icon: '📺',
        title: 'Briefing Room',
        desc: '대형 비디오월과 프리젠테이션 설비를 갖춘 브리핑룸을 구성합니다.',
      },
      {
        icon: '🎛️',
        title: '관제실 (Room 1/2)',
        desc: '멀티 모니터 콘솔과 인체공학적 워크스테이션을 배치한 메인 관제실입니다.',
      },
      {
        icon: '🏢',
        title: 'Office Room',
        desc: '관제 운영 인력의 업무 공간으로 관제 시스템과 연동된 사무 환경을 제공합니다.',
      },
      {
        icon: '🌿',
        title: '친환경 인테리어',
        desc: '에너지 절약 조명, 친환경 자재, 최적 동선 설계로 쾌적한 근무환경을 구현합니다.',
      },
    ],
    roomLayout: {
      title: '관제센터 공간 구성',
      rooms: [
        {name: 'Briefing Room', desc: '브리핑 및 회의', icon: '📺'},
        {name: 'Room 1', desc: '메인 관제실', icon: '🎛️'},
        {name: 'Room 2', desc: '보조 관제실', icon: '🖥️'},
        {name: 'Office Room', desc: '운영 사무실', icon: '🏢'},
      ],
    },
    effects: [
      '전 시스템 통합 관제 실현',
      '관제 인력 효율 50% 향상',
      '사고 대응 시간 최소화',
      '에너지 절약형 관제 환경 구축',
    ],
  },
];

/* ══════════════════════════════════════════════
   Components
   ══════════════════════════════════════════════ */

/* ── Hero ──────────────────────────────────── */
function PortfolioHero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={styles.heroLabel}>SOLUTION</span>
        <Heading as="h1" className={styles.heroTitle}>
          주요 사업내용
        </Heading>
        <p className={styles.heroSubtitle}>
          스마트 팩토리 구축을 위한 하마솔루션의 4대 핵심 솔루션
        </p>
{/* 
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <strong>4</strong>
            <span>핵심 솔루션</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>154kV</strong>
            <span>전력 SCADA</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>24/7</strong>
            <span>통합 관제</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>99.5%</strong>
            <span>재고 정확도</span>
          </div>
        </div>
         */}
      </div>
    </header>
  );
}

/* ── Solution Card ─────────────────────────── */
function SolutionCard({item, isActive, onClick}) {
  return (
    <button
      className={clsx(styles.card, isActive && styles.cardActive)}
      style={{'--card-accent': item.color}}
      onClick={onClick}
      type="button">
      <div className={styles.cardHeader}>
        <span className={styles.cardTag}>{item.tag}</span>
        <span className={styles.cardIcon}>{item.icon}</span>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {item.title}
      </Heading>
      <span className={styles.cardFullTitle}>{item.fullTitle}</span>
      <p className={styles.cardSubtitle}>{item.subtitle}</p>
      <p className={styles.cardSummary}>{item.summary}</p>
      <span className={styles.cardCta}>
        {isActive ? '접기 ↑' : '자세히 보기 →'}
      </span>
    </button>
  );
}

/* ── MES Process Flow Diagram ──────────────── */
function ProcessFlowDiagram({flow}) {
  return (
    <div className={styles.flowDiagram}>
      <h4 className={styles.diagramTitle}>{flow.title}</h4>
      <div className={styles.flowSteps}>
        {flow.steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className={styles.flowStep}>
              <span className={styles.flowStepIcon}>{step.icon}</span>
              <span className={styles.flowStepLabel}>
                {step.label.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </span>
            </div>
            {idx < flow.steps.length - 1 && (
              <div className={styles.flowArrow}>
                <svg width="32" height="20" viewBox="0 0 32 20">
                  <path
                    d="M0 10 L24 10 M18 4 L26 10 L18 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Architecture Diagram ──────────────────── */
function ArchitectureDiagram({arch, accentColor}) {
  return (
    <div className={styles.archDiagram}>
      <h4 className={styles.diagramTitle}>{arch.title}</h4>
      <div className={styles.archLayers}>
        {arch.layers.map((layer, idx) => (
          <div
            key={idx}
            className={styles.archLayer}
            style={{'--layer-accent': accentColor}}>
            <div className={styles.archLayerName}>{layer.name}</div>
            <div className={styles.archLayerItems}>
              {layer.items.map((item, i) => (
                <div key={i} className={styles.archItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Room Layout (통합관제) ────────────────── */
function RoomLayoutDiagram({layout, accentColor}) {
  return (
    <div className={styles.roomDiagram}>
      <h4 className={styles.diagramTitle}>{layout.title}</h4>
      <div className={styles.roomGrid}>
        {/* <div className={styles.roomCenter}>
          <div className={styles.roomCenterCircle}>
            <span>인테리어</span>
            <strong>Concept</strong>
            <span className={styles.roomCenterIcon}>⚙️</span>
          </div>
        </div> */}
        {/* {layout.rooms.map((room, idx) => (
          <div
            key={idx}
            className={clsx(styles.roomCard, styles[`roomPos${idx}`])}
            style={{'--room-accent': accentColor}}>
            <span className={styles.roomCardIcon}>{room.icon}</span>
            <strong className={styles.roomCardName}>{room.name}</strong>
            <span className={styles.roomCardDesc}>{room.desc}</span>
          </div>
        ))} */}
      </div>
      {/* Monitoring Image */}
      <div className={styles.roomMonitoringWrap}>
        <img
          src="/img/portfolio/mornitoring.png"
          alt="모니터링 룸 레이아웃"
          className={styles.roomMonitoringImg}
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ── Software Architecture Diagram (MES) ───── */
function SoftwareArchDiagram({arch, accentColor}) {
  return (
    <div className={styles.swDiagram}>
      <h4 className={styles.diagramTitle}>{arch.title}</h4>

      {/* Back-end ↔ API ↔ Front-end */}
      <div className={styles.swMainRow}>
        {/* Back-end */}
        <div className={styles.swSide}>
          <div className={styles.swFrameworkLabel} style={{background: '#1e293b', color: '#fff'}}>
            {arch.backend.framework}
          </div>
          <div className={styles.swSecondRow}>
            <span className={styles.swChip}>{arch.backend.items[3]}</span>
          </div>
          <div className={styles.swItemRow}>
            {arch.backend.items.slice(0, 3).map((item, i) => (
              <span key={i} className={styles.swChipDark}>{item}</span>
            ))}
          </div>
          <div className={styles.swSideLabel}>Framework (Back-end)</div>
        </div>

        {/* API Center */}
        <div className={styles.swApiCenter}>
          <div className={styles.swApiBox}>
            <span className={styles.swApiTitle}>Rest API</span>
            <span className={styles.swApiArrow}>⇄</span>
            <span className={styles.swApiProtocol}>{arch.api.protocol}</span>
          </div>
        </div>

        {/* Front-end */}
        <div className={styles.swSide}>
          <div className={styles.swFrameworkLabel} style={{background: '#1e293b', color: '#fff'}}>
            {arch.frontend.framework}
          </div>
          <div className={styles.swItemRow}>
            {arch.frontend.items.map((item, i) => (
              <span key={i} className={styles.swChipDark}>{item}</span>
            ))}
          </div>
          <div className={styles.swSideLabel}>Framework (Front-end)</div>
        </div>
      </div>

      {/* Runtime Layer */}
      <div className={styles.swRuntimeRow}>
        <div className={styles.swRuntimeBox} style={{background: '#2d6a6a', color: '#fff'}}>
          {arch.backend.runtime}
        </div>
        <div className={styles.swRuntimeSpacer} />
        <div className={styles.swRuntimeBox} style={{background: '#2d6a6a', color: '#fff'}}>
          {arch.frontend.runtime}
        </div>
      </div>

      {/* Infra Layer */}
      <div className={styles.swInfraRow}>
        <div className={styles.swInfraBox} style={{background: '#60a5fa', color: '#fff'}}>
          {arch.infra.database}
        </div>
      </div>
      <div className={styles.swInfraRow}>
        <div className={styles.swInfraBox} style={{background: '#64748b', color: '#fff'}}>
          {arch.infra.server}
        </div>
      </div>

      {/* DevOps */}
      <div className={styles.swDevopsRow}>
        {arch.devops.map((d, i) => (
          <React.Fragment key={i}>
            <div className={styles.swDevopsItem}>
              <strong>{d.name}</strong>
              <span>{d.role}</span>
            </div>
            {i < arch.devops.length - 1 && (
              <div className={styles.swDevopsArrow}>▸▸</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Hardware Architecture Diagram (MES) ───── */
function HardwareArchDiagram({arch, accentColor}) {
  return (
    <div className={styles.hwDiagram}>
      <h4 className={styles.diagramTitle}>{arch.title}</h4>
      <div className={styles.hwLayers}>
        {arch.layers.map((layer, idx) => (
          <React.Fragment key={idx}>
            <div className={styles.hwLayer}>
              <div className={styles.hwLayerLabel}>{layer.name}</div>
              <div className={styles.hwLayerItems}>
                {layer.items.map((item, i) => (
                  <div key={i} className={styles.hwItem}>
                    <span className={styles.hwItemIcon}>
                      {layer.name === 'Information Network' && i === 0 && '🔀'}
                      {layer.name === 'Information Network' && i === 1 && '🖥️'}
                      {layer.name === 'CMS Server' && '🗄️'}
                      {layer.name === 'CMS Network' && item.includes('AP') && '📡'}
                      {layer.name === 'CMS Network' && item.includes('PDA') && '📱'}
                    </span>
                    <span className={styles.hwItemText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {idx < arch.layers.length - 1 && (
              <div className={styles.hwConnector}>
                <svg width="24" height="28" viewBox="0 0 24 28">
                  <path d="M12 0 L12 20 M6 14 L12 22 L18 14" fill="none" stroke="var(--ifm-color-emphasis-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Utility Network Detail Diagram ───────── */
function UtilityNetworkDiagram({detail}) {
  return (
    <div className={styles.utilNetDiagram}>
      <h4 className={styles.diagramTitle}>{detail.title}</h4>
      {/* Cable legend */}
      <div className={styles.cableLegend}>
        {detail.cableTypes.map((c, i) => (
          <div key={i} className={styles.cableLegendItem}>
            <span className={styles.cableLine} style={{background: c.color}} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
      {/* Buildings */}
      <div className={styles.buildingGrid}>
        {detail.buildings.map((bld, idx) => (
          <div key={idx} className={styles.buildingCard} style={{'--bld-color': bld.color}}>
            <div className={styles.buildingHeader}>
              <span className={styles.buildingName}>{bld.name}</span>
              {bld.floor && <span className={styles.buildingFloor}>{bld.floor}</span>}
            </div>
            <div className={styles.buildingControllers}>
              {bld.controllers.map((ctrl, i) => (
                <div key={i} className={clsx(styles.ctrlItem, styles[`ctrl_${ctrl.type}`])}>
                  <span className={styles.ctrlDot} />
                  <span>{ctrl.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Network Detail Images */}
      <div className={styles.utilNetImages}>
        <div className={styles.utilNetImgWrap}>
          <img
            src="/img/portfolio/utility01.png"
            alt="Utility 네트워크 구성도"
            className={styles.utilNetImg}
            loading="lazy"
          />
          <span className={styles.utilNetImgCaption}>네트워크 구성도</span>
        </div>
        <div className={styles.utilNetImgWrap}>
          <img
            src="/img/portfolio/utility02.png"
            alt="Utility 모니터링 화면"
            className={styles.utilNetImg}
            loading="lazy"
          />
          <span className={styles.utilNetImgCaption}>모니터링 화면</span>
        </div>
      </div>
    </div>
  );
}

/* ── SCADA Panel Detail Diagram ──────────── */
function ScadaPanelDiagram({detail}) {
  return (
    <div className={styles.scadaPanelDiagram}>
      <h4 className={styles.diagramTitle}>{detail.title}</h4>
      {/* Cable legend */}
      <div className={styles.cableLegend}>
        {detail.cableTypes.map((c, i) => (
          <div key={i} className={styles.cableLegendItem}>
            <span className={styles.cableLine} style={{background: c.color}} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
      {/* Panels */}
      <div className={styles.panelGrid}>
        {detail.panels.map((panel, idx) => (
          <div key={idx} className={styles.panelCard} style={{'--panel-color': panel.color}}>
            <div className={styles.panelHeader}>{panel.name}</div>
            <div className={styles.panelItems}>
              {panel.items.map((item, i) => (
                <div key={i} className={clsx(styles.panelItem, styles[`pnl_${item.type}`])}>
                  <span className={styles.panelItemDot} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Jumper Codes */}
      <div className={styles.jumperRow}>
        {detail.jumperCodes.map((jc, i) => (
          <div key={i} className={styles.jumperItem}>
            <span className={styles.jumperIcon}>🔗</span>
            <div>
              <strong>{jc.name}</strong>
              <span>{jc.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Network Detail Images */}
      <div className={styles.utilNetImages}>
        <div className={styles.utilNetImgWrap}>
          <img
            src="/img/portfolio/scada01.png"
            alt="Utility 네트워크 구성도"
            className={styles.utilNetImg}
            loading="lazy"
          />
          <span className={styles.utilNetImgCaption}>네트워크 구성도</span>
        </div>
        <div className={styles.utilNetImgWrap}>
          <img
            src="/img/portfolio/scada02.png"
            alt="Utility 모니터링 화면"
            className={styles.utilNetImg}
            loading="lazy"
          />
          <span className={styles.utilNetImgCaption}>모니터링 화면</span>
        </div>
      </div>
    </div>
  );
}

/* ── System Components ─────────────────────── */
function SystemComponents({components, accentColor}) {
  return (
    <div className={styles.sysComponents}>
      {components.map((comp, idx) => (
        <div
          key={idx}
          className={styles.sysItem}
          style={{'--sys-accent': accentColor}}>
          <div className={styles.sysNumber}>{String(idx + 1).padStart(2, '0')}</div>
          <div>
            <strong className={styles.sysName}>{comp.name}</strong>
            <span className={styles.sysDesc}>{comp.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Solution Detail ───────────────────────── */
function SolutionDetail({item}) {
  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, [item.id]);

  return (
    <section
      ref={detailRef}
      className={styles.detail}
      style={{'--detail-accent': item.color}}>
      <div className="container">
        {/* Header */}
        <div className={styles.detailHeader}>
          <div className={styles.detailTitleArea}>
            <span className={styles.detailIcon}>{item.icon}</span>
            <div>
              <span className={styles.detailTag}>{item.tag}</span>
              <Heading as="h2" className={styles.detailTitle}>
                {item.title}
                <span className={styles.detailFullTitle}>{item.fullTitle}</span>
              </Heading>
            </div>
          </div>
          <p className={styles.detailDesc}>{item.description}</p>
        </div>

        {/* Process Flow (MES only) */}
        {item.processFlow && (
          <div className={styles.detailSection}>
            <ProcessFlowDiagram flow={item.processFlow} />
          </div>
        )}

        {/* Software Architecture (MES only) */}
        {item.softwareArch && (
          <div className={styles.detailSection}>
            <SoftwareArchDiagram arch={item.softwareArch} accentColor={item.color} />
          </div>
        )}

        {/* Hardware Architecture (MES only) */}
        {item.hardwareArch && (
          <div className={styles.detailSection}>
            <HardwareArchDiagram arch={item.hardwareArch} accentColor={item.color} />
          </div>
        )}

        {/* Architecture Diagram (Utility, SCADA) */}
        {item.architecture && (
          <div className={styles.detailSection}>
            <ArchitectureDiagram arch={item.architecture} accentColor={item.color} />
          </div>
        )}

        {/* Utility Network Detail */}
        {item.networkDetail && (
          <div className={styles.detailSection}>
            <UtilityNetworkDiagram detail={item.networkDetail} />
          </div>
        )}

        {/* SCADA Panel Detail */}
        {item.scadaDetail && (
          <div className={styles.detailSection}>
            <ScadaPanelDiagram detail={item.scadaDetail} />
          </div>
        )}

        {/* Room Layout (통합관제) */}
        {item.roomLayout && (
          <div className={styles.detailSection}>
            <RoomLayoutDiagram layout={item.roomLayout} accentColor={item.color} />
          </div>
        )}

        {/* Features */}
        <div className={styles.detailSection}>
          <Heading as="h3" className={styles.detailSectionTitle}>
            주요 기능
          </Heading>
          <div className={styles.featuresGrid}>
            {item.features.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <span className={styles.featureIcon}>{feat.icon}</span>
                <strong className={styles.featureTitle}>{feat.title}</strong>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System Components (MES only) */}
        {item.systemComponents && (
          <div className={styles.detailSection}>
            <Heading as="h3" className={styles.detailSectionTitle}>
              시스템 구성요소
            </Heading>
            <SystemComponents
              components={item.systemComponents}
              accentColor={item.color}
            />
          </div>
        )}

        {/* Effects */}
        <div className={styles.detailSection}>
          <Heading as="h3" className={styles.detailSectionTitle}>
            도입 효과
          </Heading>
          <div className={styles.effectsGrid}>
            {item.effects.map((effect, idx) => (
              <div key={idx} className={styles.effectItem}>
                <span className={styles.effectCheck}>✓</span>
                <span className={styles.effectText}>{effect}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   Page: Portfolio
   ══════════════════════════════════════════════ */
export default function Portfolio() {
  const [activeId, setActiveId] = useState(null);
  const activeItem = portfolioData.find((d) => d.id === activeId) || null;

  return (
    <Layout
      title="Solution"
      description="하마솔루션 주요 사업내용 - MES, Utility 제어시스템, 전력 SCADA, 통합관제 시스템">
      <PortfolioHero />
      <main>
        {/* Card Grid */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>SOLUTIONS</span>
              <Heading as="h2" className={styles.sectionTitle}>
                4대 핵심 솔루션
              </Heading>
              <p className={styles.sectionDesc}>
                각 솔루션을 클릭하면 상세 정보를 확인할 수 있습니다
              </p>
            </div>
            <div className={styles.cardGrid}>
              {portfolioData.map((item) => (
                <SolutionCard
                  key={item.id}
                  item={item}
                  isActive={activeId === item.id}
                  onClick={() =>
                    setActiveId(activeId === item.id ? null : item.id)
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detail View */}
        {activeItem && <SolutionDetail item={activeItem} />}

        {/* Work Process */}
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>WORK PROCESS</span>
              <Heading as="h2" className={styles.sectionTitle}>
                프로젝트 수행 프로세스
              </Heading>
              <p className={styles.sectionDesc}>
                현장 분석부터 안정적인 운영까지, 체계적인 프로세스로 수행합니다
              </p>
            </div>
            <div className={styles.processGrid}>
              {[
                {step: '01', title: '현장 분석', desc: '현장 방문 및 요구사항 분석, As-Is 시스템 조사', icon: '🔍'},
                {step: '02', title: '기본 설계', desc: '시스템 아키텍처 설계, 네트워크 구성 설계', icon: '📐'},
                {step: '03', title: '상세 설계', desc: 'H/W, S/W 상세 설계, I/O List, 화면 설계', icon: '📋'},
                {step: '04', title: '제작 / 개발', desc: '패널 제작, S/W 개발, FAT(Factory Acceptance Test)', icon: '💻'},
                {step: '05', title: '현장 설치', desc: '장비 설치, 배선 공사, 시스템 연동', icon: '🏗️'},
                {step: '06', title: '시운전', desc: 'SAT(Site Acceptance Test), 성능 검증, 안정화', icon: '✅'},
                {step: '07', title: '운영 / 유지보수', desc: '24/7 원격 지원, 정기 점검, 기능 업그레이드', icon: '🛡️'},
              ].map((p) => (
                <ProcessStep key={p.step} {...p} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ProcessStep({step, title, desc, icon}) {
  return (
    <div className={styles.processStep}>
      <span className={styles.processIcon}>{icon}</span>
      <span className={styles.processNumber}>{step}</span>
      <strong className={styles.processTitle}>{title}</strong>
      <p className={styles.processDesc}>{desc}</p>
    </div>
  );
}
