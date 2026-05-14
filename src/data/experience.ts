import type { Experience } from './types'

/**
 * @file 경력 콘텐츠.
 * 개별 SI 프로젝트는 projects.ts 로 분리하고, 여기서는 회사 단위 + 성과 불릿만 다룬다.
 * 성과 불릿은 "무엇을 → 어떻게 → 정량 결과" 형태. 수치가 비어 있는 항목은
 * 추후 실제 측정값으로 교체할 것.
 */
export const experiences: Experience[] = [
  {
    id: 'gnt-solution',
    company: { ko: '(주)지앤티솔루션', en: 'GNT Solution' },
    role: {
      ko: '풀스택 엔지니어 (프론트엔드 · 백엔드 · 서버)',
      en: 'Full-Stack Engineer (Frontend · Backend · Server)',
    },
    period: { ko: '2021.08 - 재직 중', en: 'Aug 2021 - Present' },
    location: { ko: '서울 가산', en: 'Gasan, Seoul' },
    achievements: {
      ko: [
        'GitLab–Jenkins 자동 빌드/배포 파이프라인을 구축해 수동 배포 과정을 제거, 배포 소요 시간을 약 90% 단축하고 배포 오류·롤백 빈도를 낮춤',
        '단일 서버 구조(Web/WAS 통합)를 3-Tier 이중화 구조(Web/WAS/DB, 총 6대)로 전환해 서비스 가용성을 확보하고 장애 대응 시간을 단축',
        'Oracle → PostgreSQL 대규모 데이터 마이그레이션과 스키마 표준화를 수행해 라이선스 비용을 절감하고 데이터 처리 성능을 개선',
        '팀 단위 JIRA 도입을 제안·구축해 PM·개발자 간 이슈와 진행 현황 관리 프로세스를 정립하고 협업 효율을 개선',
        '공공 Open API 연계 로직을 표준화·개선해 대외 연동 오류 응답률을 낮추고 데이터 조회 속도와 안정성을 향상',
      ],
      en: [
        'Built an automated GitLab–Jenkins build/deploy pipeline, removing manual deployment steps — cut deployment time by ~90% and reduced deploy errors and rollbacks',
        'Migrated a single-server stack (combined Web/WAS) to a 3-tier redundant architecture (Web/WAS/DB, 6 servers), securing availability and shortening incident response time',
        'Led a large-scale Oracle → PostgreSQL data migration with schema standardization, reducing licensing cost and improving data-processing performance',
        'Proposed and set up team-wide JIRA adoption, establishing an issue- and progress-tracking process between PMs and developers',
        'Standardized and improved public Open API integration logic, lowering external integration error rates and improving query speed and stability',
      ],
    },
  },
]
