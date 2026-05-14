import type { Profile } from './types'

/**
 * @file 프로필 / 히어로 콘텐츠.
 * 실제 정보 기반. 슬로건은 제안값이므로 자유롭게 교체 가능.
 */
export const profile: Profile = {
  name: {
    ko: '정상준',
    en: 'Sangjun Jung',
  },
  title: {
    ko: '풀스택 엔지니어 · LE (Leader Engineer)',
    en: 'Full-Stack Engineer · LE (Leader Engineer)',
  },
  slogan: {
    ko: '개발과 운영을 함께 책임지는 풀스택 엔지니어입니다. 인프라 아키텍처 전환부터 CI/CD 구축까지, 서비스의 안정성과 개발 효율을 함께 끌어올립니다.',
    en: 'A full-stack engineer who owns both development and operations. From infrastructure migration to CI/CD pipelines, I improve service stability and engineering efficiency together.',
  },
  email: 'jungsj11@gmail.com',
  github: 'https://github.com/ChadJung',
  blog: '',
}
