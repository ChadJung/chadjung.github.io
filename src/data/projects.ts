import type { Project } from './types'

/**
 * @file 프로젝트 콘텐츠 — 포트폴리오의 핵심 섹션.
 *
 * 출처: 경력기술서(이력서) 기반. 아래 항목은 이력서에 명시되지 않아 추정/플레이스홀더이므로
 * 실제 값으로 교체 권장:
 *   - teamSize (팀 규모)
 *   - contribution (담당 비중 %)
 *   - metrics 의 일부 수치
 *   - gallery (이미지 경로)
 *   - personal-msa 프로젝트 전반
 */
export const projects: Project[] = [
  /* ---------------------------------------------------------------- */
  {
    id: 'koroad-unified-auth',
    name: {
      ko: '한국도로교통공단 통합인증 접수/관리시스템 구축',
      en: 'KoROAD Unified Certification Intake/Management System',
    },
    summary: {
      ko: '시험·교정·검사 업무를 하나로 묶은 통합 관리 시스템 구축과 CI/CD 환경 설계.',
      en: 'Built an integrated management system unifying testing, calibration and inspection work, with a CI/CD environment.',
    },
    categories: ['backend'],
    status: 'done',
    stack: ['Java', 'Spring Boot', 'JSP', 'JavaScript', 'PostgreSQL', 'GitLab', 'Jenkins'],
    thumbnail: '🔐',
    client: { ko: '한국도로교통공단', en: 'Korea Road Traffic Authority (KoROAD)' },
    period: { ko: '2025.10 - 2026.01', en: 'Oct 2025 - Jan 2026' },
    role: { ko: 'PL · SE (Senior Engineer)', en: 'PL · Senior Engineer' },
    teamSize: { ko: '확인 필요', en: 'TBD' },
    metrics: [
      { value: '~90%', label: { ko: '배포 소요 시간 단축', en: 'Deployment time reduced' } },
      { value: '3종', label: { ko: '시험·교정·검사 업무 통합', en: 'Domains unified' } },
    ],
    background: {
      ko: '시험·교정·검사 업무가 분리 운영되어 접수·이력 관리가 분산되어 있었고, 배포가 수동으로 이루어져 오류와 롤백이 잦았다. 업무를 통합 관리하는 시스템과 자동화된 배포 환경이 필요했다.',
      en: 'Testing, calibration and inspection work were operated separately, so intake and history management were fragmented, and manual deployments caused frequent errors and rollbacks. An integrated management system and an automated deployment environment were needed.',
    },
    gallery: [],
    contribution: 80,
    responsibilities: {
      ko: [
        'GitLab–Jenkins 기반 자동 빌드/배포 파이프라인 설계 및 구축',
        '시험·교정·검사 업무 통합 관리 시스템의 DB·서비스 구조 설계',
        '사용자 정의 템플릿 기반 기록서/성적서 동적 생성 기능 구현',
        '접수·관리·이력 관리 등 핵심 업무 CRUD 기능 개발',
      ],
      en: [
        'Designed and built an automated build/deploy pipeline on GitLab–Jenkins',
        'Designed the DB and service structure of the integrated management system',
        'Implemented dynamic generation of records/certificates from user-defined templates',
        'Developed core CRUD features for intake, management and history',
      ],
    },
    problems: [
      {
        title: { ko: '수동 배포로 인한 잦은 배포 오류', en: 'Frequent deploy errors from manual deployment' },
        situation: {
          ko: '사내 개발 서버 배포가 수동으로 진행되어 배포 시간이 길고 휴먼 에러로 인한 롤백이 반복됐다.',
          en: 'Deployments to the internal dev server were manual, taking long and causing repeated rollbacks from human error.',
        },
        cause: {
          ko: '빌드·배포 단계가 표준화되지 않아 담당자마다 절차가 달랐고, 검증 단계가 누락되기 쉬웠다.',
          en: 'Build/deploy steps were not standardized, so procedures varied by person and verification steps were easily skipped.',
        },
        solution: {
          ko: 'GitLab 형상관리와 Jenkins를 연동해 자동 빌드/배포 파이프라인을 구성하고, 수동 배포 절차를 제거했다.',
          en: 'Connected GitLab version control with Jenkins to build an automated build/deploy pipeline and removed the manual deployment process.',
        },
        result: {
          ko: '배포 소요 시간을 약 90% 단축하고 배포 오류·롤백 발생 빈도를 크게 낮췄다.',
          en: 'Cut deployment time by ~90% and significantly reduced the frequency of deploy errors and rollbacks.',
        },
      },
      {
        title: { ko: '업무별로 다른 기록서·성적서 양식', en: 'Different record/certificate formats per task' },
        situation: {
          ko: '시험·교정·검사 업무마다 기록서/성적서 양식이 달라 양식이 늘어날 때마다 코드 수정이 필요했다.',
          en: 'Each task type had different record/certificate formats, requiring code changes whenever a new format was added.',
        },
        cause: {
          ko: '출력 양식이 코드에 하드코딩되어 있어 업무 변화에 유연하게 대응할 수 없었다.',
          en: 'Output formats were hardcoded, leaving no flexibility for changing business needs.',
        },
        solution: {
          ko: '사용자 정의 템플릿을 기반으로 기록서/성적서를 동적으로 생성하는 구조를 설계·구현했다.',
          en: 'Designed and implemented a structure that dynamically generates records/certificates from user-defined templates.',
        },
        result: {
          ko: '신규 양식 추가 시 코드 수정 없이 템플릿 등록만으로 대응 가능해져 업무 유연성과 운영 효율이 향상됐다.',
          en: 'New formats could be handled by registering a template instead of changing code, improving flexibility and operational efficiency.',
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'koroad-enforcement-inspection',
    name: {
      ko: '한국도로교통공단 무인교통단속장비 검사업무관리시스템 고도화',
      en: 'KoROAD Traffic Enforcement Equipment Inspection System Enhancement',
    },
    summary: {
      ko: '검사 업무 관리 시스템 고도화와 3-Tier 인프라 전환, Oracle→PostgreSQL 마이그레이션.',
      en: 'Enhanced an inspection management system with a 3-tier infra migration and an Oracle→PostgreSQL migration.',
    },
    categories: ['backend'],
    status: 'done',
    stack: ['Java', 'Spring', 'JSP', 'JavaScript', 'Oracle', 'PostgreSQL', 'Apache', 'Tomcat', 'CROWNIX'],
    thumbnail: '🚦',
    client: { ko: '한국도로교통공단', en: 'Korea Road Traffic Authority (KoROAD)' },
    period: { ko: '2024.07 - 2025.12', en: 'Jul 2024 - Dec 2025' },
    role: { ko: 'PL · SE (Senior Engineer)', en: 'PL · Senior Engineer' },
    teamSize: { ko: '확인 필요', en: 'TBD' },
    metrics: [
      { value: '3-Tier', label: { ko: '인프라 이중화 전환', en: 'Tiered redundant infra' } },
      { value: 'Oracle→PG', label: { ko: 'DB 마이그레이션', en: 'Database migration' } },
    ],
    background: {
      ko: '검사 업무 시스템이 단일 인프라에서 운영되어 장애 시 서비스 중단 위험이 컸고, Oracle 라이선스 비용 부담이 있었다. 고가용성 인프라와 비용 효율적인 DB로의 전환이 필요했다.',
      en: 'The inspection system ran on a single infrastructure with high outage risk, and Oracle licensing was costly. A high-availability infrastructure and a cost-effective database were needed.',
    },
    gallery: [],
    contribution: 80,
    responsibilities: {
      ko: [
        '3-Tier 이중화 인프라 아키텍처 설계 및 마이그레이션 수행',
        'Oracle → PostgreSQL 데이터 이관·스키마 표준화·정합성 검증·성능 튜닝',
        '장비 검사 결과 CRUD 및 RAW 데이터 업로드/처리 로직 개선',
        'CROWNIX Report 연동 성적서 PDF 출력 및 위변조 방지(2D 바코드) 기능 구현',
        '팀 단위 JIRA 도입 제안 및 이슈 관리 프로세스 정립',
      ],
      en: [
        'Designed and migrated to a 3-tier redundant infrastructure architecture',
        'Performed Oracle → PostgreSQL data transfer, schema standardization, integrity validation and performance tuning',
        'Improved equipment-inspection result CRUD and RAW data upload/processing logic',
        'Implemented certificate PDF output via CROWNIX Report integration with anti-forgery (2D barcode)',
        'Proposed team-wide JIRA adoption and established an issue-management process',
      ],
    },
    problems: [
      {
        title: { ko: '단일 인프라의 장애 취약성', en: 'Single-infrastructure outage vulnerability' },
        situation: {
          ko: '서비스가 단일 서버 구조로 운영되어 장애 발생 시 전체 서비스가 중단됐다.',
          en: 'The service ran on a single-server structure, so any failure brought the whole service down.',
        },
        cause: {
          ko: 'Web/WAS/DB가 분리되지 않아 한 계층의 장애가 전체로 전파됐다.',
          en: 'Web/WAS/DB layers were not separated, so a failure in one layer propagated to all.',
        },
        solution: {
          ko: 'Web/WAS/DB를 분리한 3-Tier 이중화 구조로 인프라를 재설계하고 마이그레이션했다.',
          en: 'Re-architected and migrated the infrastructure to a 3-tier redundant Web/WAS/DB structure.',
        },
        result: {
          ko: '서비스 중단 시간이 줄고 장애 대응 시간이 단축됐다.',
          en: 'Service downtime and incident response time were both reduced.',
        },
      },
      {
        title: { ko: 'Oracle 라이선스 비용과 처리 성능', en: 'Oracle licensing cost and processing performance' },
        situation: {
          ko: 'Oracle 기반 DB로 라이선스 비용 부담이 크고 일부 업무 처리 성능에 한계가 있었다.',
          en: 'The Oracle-based database carried a heavy licensing cost and had performance limits for some workloads.',
        },
        cause: {
          ko: '상용 DB 종속과 비표준화된 스키마가 비용·성능 개선의 걸림돌이었다.',
          en: 'Commercial-DB lock-in and a non-standardized schema blocked cost and performance improvements.',
        },
        solution: {
          ko: 'Oracle → PostgreSQL로 데이터를 이관하고 스키마를 표준화한 뒤 정합성 검증과 성능 튜닝을 수행했다.',
          en: 'Migrated data from Oracle to PostgreSQL, standardized the schema, then ran integrity validation and performance tuning.',
        },
        result: {
          ko: '라이선스 비용을 절감하고 데이터 처리 성능을 개선했다.',
          en: 'Reduced licensing cost and improved data-processing performance.',
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'wonju-drt',
    name: {
      ko: '원주 DRT(수요 응답형 대중교통) 구축사업 개발 지원',
      en: 'Wonju DRT (Demand-Responsive Transit) Development',
    },
    summary: {
      ko: 'GPS 위치 기반 DRT 서비스 — 차량 단말기·기사 앱·관리 웹을 아우르는 다중 클라이언트 시스템.',
      en: 'A GPS location-based DRT service spanning vehicle terminals, a driver app and a management web client.',
    },
    categories: ['backend', 'frontend', 'responsive'],
    status: 'done',
    stack: ['Java', 'Spring', 'JSP', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Apache', 'Tomcat'],
    thumbnail: '🚐',
    client: { ko: '원주시 (DRT 구축사업)', en: 'Wonju City (DRT project)' },
    period: { ko: '2023.01 - 2023.04', en: 'Jan 2023 - Apr 2023' },
    role: { ko: '개발 · AE (Assistant Engineer)', en: 'Developer · Assistant Engineer' },
    teamSize: { ko: '확인 필요', en: 'TBD' },
    metrics: [
      { value: '3종', label: { ko: '단말기·기사앱·웹 통합', en: 'Terminal/app/web clients' } },
      { value: '실시간', label: { ko: 'GPS 위치 연동', en: 'Real-time GPS sync' } },
    ],
    background: {
      ko: '수요 응답형 대중교통은 차량 위치와 운행 상태를 실시간으로 공유해야 한다. 차량 단말기, 기사 앱, 관리 웹이 동일한 위치·운행 데이터를 일관되게 바라보는 통합 운영 구조가 필요했다.',
      en: 'Demand-responsive transit must share vehicle location and operation status in real time. An integrated structure was needed so the vehicle terminal, driver app and management web all saw consistent location/operation data.',
    },
    gallery: [],
    contribution: 50,
    responsibilities: {
      ko: [
        '차량용 안내 단말기 하이브리드 앱 개발 (GPS 기반 정류장 실시간 표출)',
        '기사 운행 관리 앱 개발 (승하차 관리, 운행 상태, 지도/네비 연동)',
        '사용자/관리자 웹 서비스 개발 (지도 기반 정류장·노선·운행 정보 CRUD)',
        'REST API 기반 다중 클라이언트 통신 구조 설계',
      ],
      en: [
        'Developed the vehicle guidance terminal hybrid app (real-time GPS-based stop display)',
        'Developed the driver operation app (boarding management, operation status, map/navigation integration)',
        'Developed the user/admin web service (map-based CRUD for stops, routes and operations)',
        'Designed a REST API-based multi-client communication structure',
      ],
    },
    problems: [
      {
        title: { ko: '다중 클라이언트 간 위치 데이터 불일치', en: 'Location data inconsistency across clients' },
        situation: {
          ko: '단말기·기사 앱·웹이 각각 위치/운행 데이터를 다루어 클라이언트 간 상태가 어긋날 수 있었다.',
          en: 'The terminal, driver app and web each handled location/operation data, so client states could drift apart.',
        },
        cause: {
          ko: '클라이언트별 통신 방식이 통일되지 않아 데이터 동기화 기준이 모호했다.',
          en: 'Communication methods differed per client, leaving the data-sync baseline ambiguous.',
        },
        solution: {
          ko: 'REST API 기반 클라이언트-서버 통신 구조로 통일하고, 단말기-서버 간 위치 정보 연동과 운행 상태 동기화 처리를 구현했다.',
          en: 'Unified communication into a REST API-based client-server structure and implemented terminal-server location linkage and operation-status sync.',
        },
        result: {
          ko: '단말기·기사 앱·웹이 동일한 운행 데이터를 일관되게 공유하는 통합 운영 환경을 구축했다.',
          en: 'Built an integrated operating environment where terminal, driver app and web consistently shared the same operation data.',
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'koroad-traffic-info',
    name: {
      ko: '한국도로교통공단 도시교통정보센터 교통정보제공시스템 고도화/유지보수',
      en: 'KoROAD Urban Traffic Information System Enhancement/Maintenance',
    },
    summary: {
      ko: '대외 기관 연계와 Open API를 다루는 교통정보 제공 웹 애플리케이션의 기능 고도화·운영.',
      en: 'Enhanced and operated a traffic-information web application handling external agency integration and Open APIs.',
    },
    categories: ['backend'],
    status: 'done',
    stack: ['Java', 'Spring Boot', 'JSP', 'JavaScript', 'Oracle', 'MySQL', 'PostGIS', 'WebToB', 'JEUS'],
    thumbnail: '🛰️',
    client: { ko: '한국도로교통공단 도시교통정보센터', en: 'KoROAD Urban Traffic Information Center' },
    period: { ko: '2022.07 - 2024.10', en: 'Jul 2022 - Oct 2024' },
    role: { ko: 'PL · 개발 · AE (Assistant Engineer)', en: 'PL · Developer · Assistant Engineer' },
    teamSize: { ko: '확인 필요', en: 'TBD' },
    metrics: [
      { value: 'Open API', label: { ko: '대외 연계 표준화', en: 'External integration standardized' } },
      { value: '전국', label: { ko: '노드링크 데이터 구축', en: 'Nationwide node-link data' } },
    ],
    background: {
      ko: '교통정보 제공 시스템은 외부 기관의 사고·돌발 정보를 수집하고 Open API로 데이터를 개방한다. 대외 연계 처리의 오류와 응답 성능, 공간 데이터 구축의 수작업 부담이 과제였다.',
      en: 'The traffic-information system collects accident/incident data from external agencies and exposes data via Open APIs. Integration errors, response performance and the manual burden of building spatial data were the key challenges.',
    },
    gallery: [],
    contribution: 60,
    responsibilities: {
      ko: [
        '공공기관 사고·돌발정보 연계 시스템 고도화 (데이터 수집·정합성 검증 로직 개선)',
        '교통정보 개방 데이터(REST Open API) 응답 구조 표준화 및 성능 개선',
        'Web/WAS/DB 서버 운영 및 장애 분석·조치',
        '전국 노드링크 데이터 신규 구축 및 취약구간 Polygon 공간 데이터 자동 생성 파이프라인 구현',
      ],
      en: [
        'Enhanced the public-agency accident/incident integration system (improved data collection and integrity-validation logic)',
        'Standardized REST Open API response structure and improved performance',
        'Operated Web/WAS/DB servers and handled incident analysis and response',
        'Built nationwide node-link data and an automated pipeline generating polygon spatial data for vulnerable sections',
      ],
    },
    problems: [
      {
        title: { ko: '대외 연계 API의 높은 오류 응답률', en: 'High error rate in external integration APIs' },
        situation: {
          ko: '외부 기관 데이터 연계 시 오류 응답이 잦아 교통정보의 신뢰성이 떨어졌다.',
          en: 'External agency data integration produced frequent error responses, lowering traffic-data reliability.',
        },
        cause: {
          ko: '데이터 정합성 검증과 API 응답 구조가 표준화되지 않아 예외 케이스 처리가 일관되지 않았다.',
          en: 'Data-integrity validation and API response structures were not standardized, so exception handling was inconsistent.',
        },
        solution: {
          ko: '대외 연계 API 처리 로직과 정합성 검증 로직을 개선하고, Open API 응답 구조를 표준화했다.',
          en: 'Improved external-integration API logic and integrity-validation logic, and standardized the Open API response structure.',
        },
        result: {
          ko: '오류 응답률이 감소하고 데이터 조회 속도와 안정성이 향상됐다.',
          en: 'Error response rates dropped and data query speed and stability improved.',
        },
      },
      {
        title: { ko: '취약구간 공간 데이터의 수작업 구축', en: 'Manual construction of vulnerable-section spatial data' },
        situation: {
          ko: '터널·교량 등 취약구간의 Polygon 공간 데이터를 수작업으로 구축해 시간이 오래 걸렸다.',
          en: 'Polygon spatial data for vulnerable sections like tunnels and bridges was built manually, which was time-consuming.',
        },
        cause: {
          ko: '노드링크 데이터로부터 공간 데이터를 생성하는 자동화 절차가 없었다.',
          en: 'There was no automated procedure to generate spatial data from node-link data.',
        },
        solution: {
          ko: 'PostGIS 기반으로 취약구간 Polygon 공간 데이터를 자동 생성하는 파이프라인을 구현했다.',
          en: 'Implemented a PostGIS-based pipeline that automatically generates polygon spatial data for vulnerable sections.',
        },
        result: {
          ko: '공간 데이터 구축 작업이 자동화되어 수작업 부담이 줄고 데이터 일관성이 확보됐다.',
          en: 'Spatial-data construction was automated, reducing manual effort and ensuring data consistency.',
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'koroad-protection-zone',
    name: {
      ko: '한국도로교통공단 보호구역/안전속도 관리시스템 고도화',
      en: 'KoROAD Protection Zone / Safe Speed Management System Enhancement',
    },
    summary: {
      ko: '보호구역·안전속도 관리 시스템 기능 고도화와 단일 서버 → 3-Tier 이중화 인프라 전환 주도.',
      en: 'Enhanced the protection-zone/safe-speed system and led the migration from a single server to a 3-tier redundant infrastructure.',
    },
    categories: ['backend'],
    status: 'done',
    stack: ['Java', 'Spring Boot', 'JSP', 'JavaScript', 'PostgreSQL', 'Apache', 'Tomcat', 'Docker', 'Linux'],
    thumbnail: '🛡️',
    client: { ko: '한국도로교통공단', en: 'Korea Road Traffic Authority (KoROAD)' },
    period: { ko: '2021.09 - 2021.12', en: 'Sep 2021 - Dec 2021' },
    role: { ko: '개발 · AE (Assistant Engineer)', en: 'Developer · Assistant Engineer' },
    teamSize: { ko: '확인 필요', en: 'TBD' },
    metrics: [
      { value: '6대', label: { ko: '서버 구성 설계·구축', en: 'Servers designed & built' } },
      { value: '단일→3-Tier', label: { ko: '인프라 이중화 전환', en: 'Infra redundancy migration' } },
    ],
    background: {
      ko: '보호구역·안전속도 관리 시스템이 Web/WAS 통합 단일 서버 구조로 운영되어 장애 대응 체계가 취약했다. 가용성을 확보할 수 있는 인프라 아키텍처 전환이 필요했다.',
      en: 'The protection-zone/safe-speed system ran on a single server with combined Web/WAS, leaving a weak incident-response posture. A migration to an infrastructure architecture securing availability was needed.',
    },
    gallery: [],
    contribution: 50,
    responsibilities: {
      ko: [
        '보호구역·안전속도 관리 시스템 업무 기능 고도화 (CRUD, 데이터 관리 로직 확장)',
        '단일 서버 구조 → 3-Tier 이중화 구조(Web/WAS/DB)로의 인프라 전환 주도',
        '총 6대 서버 구성 설계 및 구축',
        'Linux 기반 서버 환경 세팅 및 서비스 배포 구조 정립, 트래픽 분산 구조 구현',
      ],
      en: [
        'Enhanced business features of the protection-zone/safe-speed system (CRUD, extended data-management logic)',
        'Led the infrastructure migration from a single-server structure to a 3-tier redundant Web/WAS/DB structure',
        'Designed and built a 6-server configuration',
        'Set up the Linux-based server environment, established the deployment structure and implemented traffic distribution',
      ],
    },
    problems: [
      {
        title: { ko: '장애 대응 체계가 없는 단일 서버 구조', en: 'Single-server structure with no incident-response posture' },
        situation: {
          ko: 'Web/WAS가 통합된 단일 서버에서 서비스가 운영되어 장애 시 대응 수단이 부족했다.',
          en: 'The service ran on a single server with combined Web/WAS, leaving few options when failures occurred.',
        },
        cause: {
          ko: '계층 분리와 이중화가 되어 있지 않아 단일 장애점(SPOF)이 존재했다.',
          en: 'Without layer separation and redundancy, a single point of failure existed.',
        },
        solution: {
          ko: 'Web/WAS/DB 계층을 분리한 3-Tier 이중화 구조로 인프라를 재설계하고 6대 서버 구성을 직접 구축, 트래픽 분산 구조를 구현했다.',
          en: 'Re-architected the infrastructure into a 3-tier redundant Web/WAS/DB structure, built the 6-server configuration directly and implemented traffic distribution.',
        },
        result: {
          ko: '가용성과 장애 대응 체계를 확보하고 웹/WAS/DB 계층 분리 운영 기반을 마련했다.',
          en: 'Secured availability and an incident-response posture, and established a foundation for operating separated Web/WAS/DB layers.',
        },
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'personal-msa',
    name: {
      ko: 'MSA 학습용 사이드 프로젝트 (진행 중)',
      en: 'MSA Learning Side Project (in progress)',
    },
    summary: {
      ko: 'Kafka·Redis·Kubernetes·Grafana를 직접 다뤄보는 마이크로서비스 학습 프로젝트.',
      en: 'A microservices learning project hands-on with Kafka, Redis, Kubernetes and Grafana.',
    },
    categories: ['personal', 'backend'],
    status: 'ongoing',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Kubernetes', 'Grafana'],
    thumbnail: '🧪',
    client: { ko: '개인 프로젝트', en: 'Personal project' },
    period: { ko: '진행 중', en: 'In progress' },
    role: { ko: '개인 개발', en: 'Solo developer' },
    teamSize: { ko: '1인', en: 'Solo' },
    metrics: [
      { value: 'Kafka', label: { ko: '이벤트 스트리밍 학습', en: 'Event streaming' } },
      { value: 'K8s', label: { ko: '컨테이너 오케스트레이션', en: 'Container orchestration' } },
    ],
    background: {
      ko: '실무에서 다뤄온 모놀리식·SI 환경을 넘어 대용량 트래픽과 분산 시스템 운영 역량을 키우기 위해 Kafka·Redis·Kubernetes·Grafana 기반 마이크로서비스 환경을 직접 구성하며 학습 중이다. (상세 내용은 추후 보강 예정)',
      en: 'To grow beyond the monolithic/SI environments of past work and build skills in high-traffic, distributed-system operations, I am hands-on building a microservices environment with Kafka, Redis, Kubernetes and Grafana. (Details to be expanded later.)',
    },
    gallery: [],
    contribution: 100,
    responsibilities: {
      ko: [
        'Kafka 기반 이벤트 스트리밍 구조 설계 및 실습',
        'Redis 캐시·세션 저장소 적용',
        'Kubernetes 기반 컨테이너 오케스트레이션 구성',
        'Grafana·Prometheus 기반 모니터링 대시보드 구축',
      ],
      en: [
        'Designing and practicing a Kafka-based event-streaming structure',
        'Applying Redis as a cache and session store',
        'Setting up Kubernetes-based container orchestration',
        'Building a monitoring dashboard with Grafana and Prometheus',
      ],
    },
    problems: [],
    repoUrl: 'https://github.com/ChadJung',
  },
]
