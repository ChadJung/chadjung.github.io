import type { Localized } from '../data/types'

/**
 * @file Static UI label strings (ko/en).
 * Content strings live in src/data/*; this map holds only chrome labels.
 */
export const ui = {
  /* nav */
  navHome: { ko: '홈', en: 'Home' },
  navSkills: { ko: '기술', en: 'Skills' },
  navExperience: { ko: '경력', en: 'Experience' },
  navCertifications: { ko: '자격증', en: 'Certifications' },
  navProjects: { ko: '프로젝트', en: 'Projects' },
  navContact: { ko: '연락처', en: 'Contact' },

  /* hero CTAs */
  ctaViewWork: { ko: '작업 살펴보기', en: 'View Work' },
  ctaContact: { ko: '연락하기', en: 'Contact' },

  /* section titles */
  sectionSkills: { ko: '기술 스택', en: 'Skills' },
  sectionExperience: { ko: '경력', en: 'Experience' },
  sectionCertifications: { ko: '자격증', en: 'Certifications' },
  sectionProjects: { ko: '프로젝트', en: 'Projects' },
  sectionContact: { ko: '연락하기', en: 'Get in Touch' },

  sectionSkillsDesc: {
    ko: '실무에서 다뤄온 기술과 학습 중인 기술입니다.',
    en: 'Technologies I work with and ones I am currently learning.',
  },
  sectionProjectsDesc: {
    ko: '주요 프로젝트를 카테고리별로 살펴보세요.',
    en: 'Browse key projects by category.',
  },
  sectionContactDesc: {
    ko: '새로운 기회나 협업 제안을 환영합니다.',
    en: 'Open to new opportunities and collaboration.',
  },

  /* badges */
  badgeLearning: { ko: '학습 중', en: 'Learning' },
  statusOngoing: { ko: '진행중', en: 'Ongoing' },
  statusDone: { ko: '완료', en: 'Done' },

  /* projects */
  filterAll: { ko: '전체', en: 'All' },
  filterBackend: { ko: '백엔드', en: 'Backend' },
  filterFrontend: { ko: '프론트엔드', en: 'Frontend' },
  filterPersonal: { ko: '개인 프로젝트', en: 'Personal' },
  filterResponsive: { ko: '반응형 웹', en: 'Responsive' },
  viewDetails: { ko: '상세 보기', en: 'View Details' },

  /* modal tabs */
  tabOverview: { ko: '개요', en: 'Overview' },
  tabResponsibilities: { ko: '담당 업무', en: 'Responsibilities' },
  tabProblems: { ko: '문제 해결', en: 'Problem Solving' },

  /* modal labels */
  labelClient: { ko: '발주처', en: 'Client' },
  labelPeriod: { ko: '기간', en: 'Period' },
  labelRole: { ko: '역할', en: 'Role' },
  labelTeamSize: { ko: '팀 규모', en: 'Team Size' },
  labelBackground: { ko: '프로젝트 배경', en: 'Background' },
  labelStack: { ko: '기술 스택', en: 'Tech Stack' },
  labelGallery: { ko: '갤러리', en: 'Gallery' },
  labelContribution: { ko: '담당 비중', en: 'Contribution' },
  galleryPlaceholder: { ko: '이미지 준비 중', en: 'Images coming soon' },
  problemsEmpty: {
    ko: '아직 정리된 문제 해결 사례가 없습니다.',
    en: 'No problem-solving cases documented yet.',
  },
  stepSituation: { ko: '상황', en: 'Situation' },
  stepCause: { ko: '원인', en: 'Cause' },
  stepSolution: { ko: '해결', en: 'Solution' },
  stepResult: { ko: '결과', en: 'Result' },
  closeModal: { ko: '닫기', en: 'Close' },

  /* links */
  linkLive: { ko: '라이브 보기', en: 'Live Site' },
  linkRepo: { ko: '저장소', en: 'Repository' },
  linkEmail: { ko: '이메일', en: 'Email' },
  linkGithub: { ko: 'GitHub', en: 'GitHub' },
  linkBlog: { ko: '블로그', en: 'Blog' },

  /* misc */
  themeLabel: { ko: '테마', en: 'Theme' },
  langLabel: { ko: '언어', en: 'Language' },
} satisfies Record<string, Localized>

export type UiKey = keyof typeof ui
