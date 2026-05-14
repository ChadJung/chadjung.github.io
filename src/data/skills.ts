import type { SkillCategory } from './types'

/**
 * @file 스킬 콘텐츠. 카테고리별 그룹.
 * icon 값은 simple-icons 슬러그(https://simpleicons.org).
 * learning: true 인 항목은 실무가 아닌 개인/사이드 프로젝트 학습 단계.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: { ko: '백엔드', en: 'Backend' },
    skills: [
      { name: 'Java', icon: 'openjdk' },
      { name: 'Spring', icon: 'spring' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'JSP', icon: 'jinja' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Oracle', icon: 'oracle' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'REST API', icon: 'openapiinitiative' },
    ],
  },
  {
    id: 'frontend',
    label: { ko: '프론트엔드', en: 'Frontend' },
    skills: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css' },
      { name: 'jQuery', icon: 'jquery' },
    ],
  },
  {
    id: 'devops',
    label: { ko: 'DevOps · 인프라', en: 'DevOps & Infra' },
    skills: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'GitLab', icon: 'gitlab' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Apache', icon: 'apache' },
      { name: 'Tomcat', icon: 'apachetomcat' },
      { name: 'Kafka', icon: 'apachekafka', learning: true },
      { name: 'Redis', icon: 'redis', learning: true },
      { name: 'Kubernetes', icon: 'kubernetes', learning: true },
      { name: 'Grafana', icon: 'grafana', learning: true },
    ],
  },
]
