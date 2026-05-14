/**
 * @file 콘텐츠 데이터의 공용 타입 정의.
 * 모든 텍스트 필드는 ko/en 두 벌(Localized)로 관리한다.
 */

/** 다국어 문자열: 언어 토글 시 즉시 전환되는 텍스트 단위. */
export interface Localized {
  ko: string
  en: string
}

/** 다국어 문자열 배열 (불릿 리스트 등). */
export interface LocalizedList {
  ko: string[]
  en: string[]
}

/** 지원 언어 코드. */
export type Lang = 'ko' | 'en'

/** 지원 테마. 모두 차분한 formal 톤 + 공통 앰버 포인트. */
export type Theme = 'dark' | 'light' | 'navy'

/* ------------------------------------------------------------------ */
/* 프로필                                                              */
/* ------------------------------------------------------------------ */

export interface Profile {
  name: Localized
  /** 한 줄 직무 타이틀 (히어로 헤드라인). */
  title: Localized
  /** 1~2문장 소개 슬로건. */
  slogan: Localized
  email: string
  github: string
  /** 블로그 URL. 없으면 빈 문자열. */
  blog: string
}

/* ------------------------------------------------------------------ */
/* 스킬                                                                */
/* ------------------------------------------------------------------ */

/** 스킬 단일 항목. icon은 simple-icons 슬러그(예: 'java', 'springboot'). */
export interface Skill {
  name: string
  icon: string
  /** 실무 사용이 아닌 학습/사이드 프로젝트 단계 기술이면 true. */
  learning?: boolean
}

export interface SkillCategory {
  id: string
  label: Localized
  skills: Skill[]
}

/* ------------------------------------------------------------------ */
/* 경력                                                                */
/* ------------------------------------------------------------------ */

export interface Experience {
  id: string
  company: Localized
  role: Localized
  /** 표시용 기간 문자열 (예: '2021.08 - 재직 중'). */
  period: Localized
  location: Localized
  /** 성과 불릿: "무엇을 → 어떻게 → 정량 결과" 형태. */
  achievements: LocalizedList
}

/* ------------------------------------------------------------------ */
/* 자격증                                                              */
/* ------------------------------------------------------------------ */

export interface Certification {
  id: string
  /** 취득일 (YYYY.MM) — 타임라인 정렬 기준. */
  date: string
  name: Localized
  issuer: Localized
}

/* ------------------------------------------------------------------ */
/* 프로젝트                                                            */
/* ------------------------------------------------------------------ */

/** 프로젝트 필터 카테고리. 한 프로젝트가 다중 태그를 가질 수 있다. */
export type ProjectCategory = 'backend' | 'frontend' | 'personal' | 'responsive'

export type ProjectStatus = 'ongoing' | 'done'

/** 핵심 성과 지표 카드 (예: 값 '90%' + 라벨 '배포 시간 단축'). */
export interface MetricCard {
  value: string
  label: Localized
}

/** 문제 해결 사례: 상황 → 원인 → 해결 → 결과(정량) 4단 구조. */
export interface ProblemCase {
  title: Localized
  situation: Localized
  cause: Localized
  solution: Localized
  result: Localized
  /** 선택: 코드 스니펫 (언어 + 코드 본문). */
  code?: { lang: string; snippet: string }
}

export interface Project {
  id: string
  name: Localized
  /** 카드용 한 줄 설명. */
  summary: Localized
  categories: ProjectCategory[]
  status: ProjectStatus
  /** 기술 스택 태그 (표시 문자열). */
  stack: string[]
  /** 카드 썸네일/대표 아이콘 (이모지 또는 이미지 경로). */
  thumbnail: string

  /* --- 상세: 개요 탭 --- */
  client: Localized
  period: Localized
  role: Localized
  teamSize: Localized
  metrics: MetricCard[]
  background: Localized
  /** 갤러리 이미지 경로 목록 (없으면 빈 배열 → 플레이스홀더 표시). */
  gallery: string[]

  /* --- 상세: 담당 업무 탭 --- */
  /** 담당 비중 (0~100). */
  contribution: number
  responsibilities: LocalizedList

  /* --- 상세: 문제 해결 탭 --- */
  problems: ProblemCase[]

  /* --- 링크 --- */
  liveUrl?: string
  repoUrl?: string
}
