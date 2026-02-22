import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const jobPositions = [
  {
    title: '자동화 설비 제어',
    icon: (
      <svg viewBox="0 0 80 80" className={styles.jobIcon}>
        <rect x="15" y="10" width="50" height="35" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="40" cy="27" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M40 17v-3M40 37v3M30 27h-3M50 27h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="33" y="21" width="14" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="21" x2="40" y2="33" stroke="currentColor" strokeWidth="1.5" />
        <line x1="33" y1="27" x2="47" y2="27" stroke="currentColor" strokeWidth="1.5" />
        <rect x="25" y="50" width="30" height="5" rx="2" fill="currentColor" opacity="0.3" />
        <line x1="30" y1="45" x2="30" y2="55" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="45" x2="40" y2="55" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="45" x2="50" y2="55" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    requirements: [
      '공장 자동화 개발 경험자 우대(PLC/DCS/HMI)',
      '해외 여행에 결격사유 없는 자',
      '남자는 병역 필 또는 면제자',
    ],
  },
  {
    title: '프로그래머',
    icon: (
      <svg viewBox="0 0 80 80" className={styles.jobIcon}>
        <rect x="12" y="10" width="56" height="38" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="16" y="14" width="48" height="28" rx="1" fill="currentColor" opacity="0.08" />
        <line x1="20" y1="48" x2="60" y2="48" stroke="currentColor" strokeWidth="2.5" />
        <rect x="22" y="52" width="36" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect key={i} x={25 + (i % 3) * 11} y={55 + Math.floor(i / 3) * 3.5} width="7" height="2" rx="0.5" fill="currentColor" opacity="0.5" />
        ))}
        <text x="40" y="33" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="currentColor" opacity="0.7">{'</>'}</text>
      </svg>
    ),
    requirements: [
      'JSP, JAVA Script, MS-Sql, ORACLE 사용 가능 자',
      '해외 여행에 결격사유 없는 자',
      '남자는 병역 필 또는 면제자',
    ],
  },
];

const benefitsData = [
  {
    title: '4대보험 적용',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.benefitIconSvg}>
        <rect x="8" y="12" width="32" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    desc: ['국민연금, 의료보험', '고용보험, 산재보험'],
  },
  {
    title: '퇴직연금',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.benefitIconSvg}>
        <rect x="10" y="16" width="28" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="26" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="29" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">&#8361;</text>
        <path d="M18 16v-4h12v4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    desc: ['만 1년이상 재직시'],
  },
  {
    title: '수당제도',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.benefitIconSvg}>
        <rect x="10" y="10" width="28" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="2" />
        <line x1="18" y1="10" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="10" x2="30" y2="18" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="22" width="6" height="4" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="22" y="22" width="6" height="4" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="14" y="30" width="6" height="4" rx="1" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    desc: ['휴일(특근)수당'],
  },
  {
    title: '직원복지',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.benefitIconSvg}>
        <path d="M24 38c-8-6-14-11-14-17a8 8 0 0114-5.3A8 8 0 0138 21c0 6-6 11-14 17z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    desc: [
      '명절/기념일, 생일선물/파티',
      '의료/건강, 건강검진',
      '진료비지원(본인), 출산/육아',
    ],
  },
  {
    title: '사무실환경',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.benefitIconSvg}>
        <path d="M14 36V16l10-6 10 6v20" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="20" y="26" width="8" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="34" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M34 12v4l2.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    desc: ['무선인터넷', '자유복장'],
  },
  {
    title: '주거관련',
    icon: (
      <svg viewBox="0 0 48 48" className={styles.benefitIconSvg}>
        <path d="M8 24l16-14 16 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="14" y="24" width="20" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="30" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    desc: ['기숙사 운영'],
  },
];

/* ──────────────────────────────────────────────
   Hero
   ────────────────────────────────────────────── */
function ContactHero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={styles.heroLabel}>RECRUITMENT</span>
        <Heading as="h1" className={styles.heroTitle}>
          함께 성장할 인재를 찾습니다
        </Heading>
        <p className={styles.heroSubtitle}>
          하마솔루션과 함께 스마트 팩토리의 미래를 만들어갈 열정적인 인재를 모집합니다
        </p>
        <nav className={styles.heroNav}>
          <a href="#positions" className={styles.heroNavItem}>모집분야</a>
          <a href="#benefits" className={styles.heroNavItem}>복리후생</a>
          <a href="#apply" className={styles.heroNavItem}>지원안내</a>
        </nav>
      </div>
    </header>
  );
}

/* ──────────────────────────────────────────────
   1. 모집분야 및 직무요건
   ────────────────────────────────────────────── */
function JobPositions() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Job Positions</span>
          <Heading as="h2" className={styles.sectionTitle}>
            모집분야 및 직무요건
          </Heading>
        </div>
        <div className={styles.jobGrid}>
          {jobPositions.map((job) => (
            <div key={job.title} className={styles.jobCard}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <div className={styles.jobDivider} />
              <div className={styles.jobIconWrapper}>{job.icon}</div>
              <ul className={styles.jobRequirements}>
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   2. 복리후생
   ────────────────────────────────────────────── */
function Benefits() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Benefits</span>
          <Heading as="h2" className={styles.sectionTitle}>
            복리후생
          </Heading>
        </div>
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit) => (
            <div key={benefit.title} className={styles.benefitCard}>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <div className={styles.benefitDivider} />
              <div className={styles.benefitIconCircle}>
                {benefit.icon}
              </div>
              <div className={styles.benefitDesc}>
                {benefit.desc.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   3. 지원안내
   ────────────────────────────────────────────── */
function ApplyInfo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>How to Apply</span>
          <Heading as="h2" className={styles.sectionTitle}>
            지원안내
          </Heading>
        </div>
        <div className={styles.applyWrapper}>
          <div className={styles.applySteps}>
            <div className={styles.applyStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h4>서류 접수</h4>
                <p>이력서 및 자기소개서를 이메일로 제출해 주세요.</p>
              </div>
            </div>
            <div className={styles.applyStepArrow}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.applyStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h4>서류 심사</h4>
                <p>제출하신 서류를 검토 후 결과를 안내해 드립니다.</p>
              </div>
            </div>
            <div className={styles.applyStepArrow}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.applyStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h4>면접</h4>
                <p>실무진 및 임원 면접을 진행합니다.</p>
              </div>
            </div>
            <div className={styles.applyStepArrow}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.applyStep}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h4>최종 합격</h4>
                <p>합격 통보 후 입사일을 조율합니다.</p>
              </div>
            </div>
          </div>
          <div className={styles.applyContact}>
            <div className={styles.applyContactCard}>
              <h4>지원 방법</h4>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>이메일</span>
                <span>master@hamasol.com</span>
              </div>
              {/* <div className={styles.contactItem}>
                <span className={styles.contactLabel}>전화</span>
                <span>031-000-0000</span>
              </div> */}
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>제출서류</span>
                <span>이력서, 자기소개서, 포트폴리오(해당시)</span>
              </div>
              <p className={styles.contactNote}>
                * 상시 채용으로 언제든 지원 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Page: Contact (채용정보)
   ────────────────────────────────────────────── */
export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="하마솔루션 채용정보 - 모집분야 및 직무요건, 복리후생">
      <ContactHero />
      <main>
        <div id="positions"><JobPositions /></div>
        <div id="benefits"><Benefits /></div>
        <div id="apply"><ApplyInfo /></div>
      </main>
    </Layout>
  );
}
