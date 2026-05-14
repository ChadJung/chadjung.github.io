import type { Certification } from './types'

/**
 * @file 자격증 콘텐츠. 최신순 타임라인으로 표시.
 */
export const certifications: Certification[] = [
  {
    id: 'cert-engineer-info-processing',
    date: '2014.11',
    name: { ko: '정보처리기사', en: 'Engineer Information Processing' },
    issuer: { ko: '한국산업인력공단', en: 'HRD Korea' },
  },
]
