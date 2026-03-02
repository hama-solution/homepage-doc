import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

/* ══════════════════════════════════════════════
   Project Timeline Data
   ══════════════════════════════════════════════ */
const timelineData = [
  {
    year: '2025',
    projects: [
      {
        no: 1,
        client: '펜타크리드 (SDS)',
        project: 'SDS R&D 협업 개발 시스템 과제',
        category: 'R&D',
      },
      {
        no: 2,
        client: 'AIK (SDI Hungary)',
        project: '전해액 탱크 PLC Maintenance',
        category: 'PLC',
      },
      {
        no: 3,
        client: 'QuDecs (SKON)',
        project: '배터리 출하품질 관리',
        category: 'MES',
      },
      {
        no: 4,
        client: 'AIK (SDI Hungary)',
        project: '전해액 누액 감지 시스템 구축',
        category: 'Control',
      },
      {
        no: 5,
        client: 'Soulbrain Hungary',
        project: 'Canister Management System 구축',
        category: 'MES',
      },
      {
        no: 6,
        client: '현일 (SDI Hungary)',
        project: 'SDIHU 2공장 AGV Setup',
        category: 'Automation',
      },
      {
        no: 7,
        client: '두나 네트워크 (SDI Hungary)',
        project: 'CIM PC Setup',
        category: 'Infra',
      },
      {
        no: 8,
        client: '아이커머 (Samsung Display)',
        project: 'Siemens PLC 네트워크 카드 교체 유지보수',
        category: 'PLC',
      },
    ],
  },
  {
    year: '참고 프로젝트',
    projects: [
      {
        no: 1,
        client: 'SEVT (삼성전자 베트남, 타이응웬))',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 2,
        client: 'SEV(삼성전자 베트남, 박린)',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 3,
        client: 'SEMV(삼성전기 베트남)',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 4,
        client: 'SDV (삼성디스플레이 베트남)',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 5,
        client: '삼성전기 부산사업장 ',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 6,
        client: '제일모직(현 롯데케미칼)',
        project: '전사 MES 시스템 설비 온라인 시스템 설계 및 구축',
        category: '',
      },
      {
        no: 7,
        client: '삼성디스플레이 천안사업장',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 8,
        client: '삼성디스플레이 천진사업장',
        project: '전력/용역 제어시스템 및 통합관제 시스템 구축',
        category: '',
      },
      {
        no: 8,
        client: '한화토탈',
        project: '전력 제어시스템 및 관제시스템',
        category: '',
      },
    ],
  },
];

/* Category → color / label mapping */
const categoryMap = {
  'R&D': {color: '#6366f1', label: 'R&D'},
  PLC: {color: '#ef4444', label: 'PLC'},
  MES: {color: '#3b82f6', label: 'MES'},
  Control: {color: '#10b981', label: 'Control'},
  Automation: {color: '#f59e0b', label: 'Automation'},
  Infra: {color: '#64748b', label: 'Infra'},
  SCADA: {color: '#f59e0b', label: 'SCADA'},
  Utility: {color: '#10b981', label: 'Utility'},
  'Control Center': {color: '#8b5cf6', label: 'Control Center'},
};

/* 전체 프로젝트 수 */
const totalProjects = timelineData.reduce(
  (sum, y) => sum + y.projects.length,
  0,
);

/* 전체 고유 고객사 수 */
const uniqueClients = new Set(
  timelineData.flatMap((y) => y.projects.map((p) => p.client)),
).size;

/* ══════════════════════════════════════════════
   Components
   ══════════════════════════════════════════════ */

function TimelineHero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={styles.heroLabel}>PROJECT TIMELINE</span>
        <Heading as="h1" className={styles.heroTitle}>
          프로젝트 수행 이력
        </Heading>
        <p className={styles.heroSubtitle}>
          하마솔루션이 수행한 주요 프로젝트와 고객사를 소개합니다
        </p>
{/* 
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <strong>{totalProjects}</strong>
            <span>수행 프로젝트</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>{uniqueClients}</strong>
            <span>고객사</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <strong>{timelineData.length}</strong>
            <span>Years</span>
          </div>
        </div>
         */}
      </div>
    </header>
  );
}

function CategoryBadge({category}) {
  const cat = categoryMap[category] || {color: '#94a3b8', label: category};
  return (
    <span
      className={styles.badge}
      style={{
        '--badge-color': cat.color,
      }}>
      {cat.label}
    </span>
  );
}

function ProjectRow({project, index}) {
  return (
    <div className={styles.projectRow} style={{'--row-delay': `${index * 0.05}s`}}>
      <div className={styles.projectNo}>{String(project.no).padStart(2, '0')}</div>
      <div className={styles.projectClient}>
        <span className={styles.clientName}>{project.client}</span>
      </div>
      <div className={styles.projectName}>{project.project}</div>
      <div className={styles.projectCategory}>
        <CategoryBadge category={project.category} />
      </div>
    </div>
  );
}

function YearBlock({yearData, isOpen, onToggle}) {
  return (
    <div className={clsx(styles.yearBlock, isOpen && styles.yearBlockOpen)}>
      {/* Year Header */}
      <button className={styles.yearHeader} onClick={onToggle} type="button">
        <div className={styles.yearLeft}>
          <div className={styles.yearDot} />
          <Heading as="h2" className={styles.yearTitle}>
            {yearData.year}
          </Heading>
          <span className={styles.yearCount}>
            {yearData.projects.length} Projects
          </span>
        </div>
        <span className={clsx(styles.yearToggle, isOpen && styles.yearToggleOpen)}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Projects Table */}
      {isOpen && (
        <div className={styles.yearBody}>
          <div className={styles.projectTable}>
            <div className={styles.projectTableHeader}>
              <div className={styles.projectNo}>No.</div>
              <div className={styles.projectClient}>고객사</div>
              <div className={styles.projectName}>프로젝트</div>
              <div className={styles.projectCategory}>분류</div>
            </div>
            {yearData.projects.map((project, idx) => (
              <ProjectRow key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   Page: Timeline
   ══════════════════════════════════════════════ */
export default function Timeline() {
  const [openYears, setOpenYears] = useState(
    () => new Set(timelineData.map((y) => y.year)),
  );

  const toggleYear = (year) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  };

  const allOpen = openYears.size === timelineData.length;

  return (
    <Layout
      title="Timeline"
      description="하마솔루션 프로젝트 수행 이력 - 고객사 및 프로젝트 타임라인">
      <TimelineHero />
      <main>
        <section className={styles.section}>
          <div className="container">
            {/* Controls */}
            <div className={styles.controls}>
              <button
                className={styles.controlBtn}
                onClick={() =>
                  setOpenYears(
                    allOpen
                      ? new Set()
                      : new Set(timelineData.map((y) => y.year)),
                  )
                }
                type="button">
                {allOpen ? '모두 접기' : '모두 펼치기'}
              </button>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              {timelineData.map((yearData) => (
                <YearBlock
                  key={yearData.year}
                  yearData={yearData}
                  isOpen={openYears.has(yearData.year)}
                  onToggle={() => toggleYear(yearData.year)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
