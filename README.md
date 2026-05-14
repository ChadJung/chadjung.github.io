# Portfolio — 정상준

개발자 포트폴리오 SPA. React + Vite + TypeScript + Tailwind CSS v4.

- 단일 페이지 + 앵커 스크롤 (`#home #skills #experience #certifications #projects #contact`)
- KO / EN 언어 토글 (localStorage 저장)
- 3개 테마 전환: **Dark(기본) / Light / Navy** — 모두 차분한 formal 톤, 앰버 포인트 (localStorage 저장)
- 프로젝트: 카테고리 필터 탭 + 카드 + 상세 모달(개요 / 담당 업무 / 문제 해결 탭)
- 반응형 (모바일 / 태블릿 / 데스크톱)

## 개발

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입체크 + 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 콘텐츠 수정

모든 콘텐츠는 `src/data/` 의 TypeScript 파일에 ko/en 두 벌로 분리되어 있습니다.

| 파일 | 내용 |
|------|------|
| `profile.ts` | 이름, 직무 타이틀, 슬로건, 연락처 |
| `skills.ts` | 카테고리별 스킬 (icon = [simple-icons](https://simpleicons.org) 슬러그) |
| `experience.ts` | 경력 + 성과 불릿 |
| `certifications.ts` | 자격증 타임라인 |
| `projects.ts` | 프로젝트 카드 + 상세(개요/담당업무/문제해결) |
| `types.ts` | 공용 타입 정의 |

> `projects.ts` 의 `teamSize`, `contribution`, 일부 `metrics` 수치, `gallery` 이미지 경로,
> `personal-msa` 프로젝트는 이력서에 없거나 추정값입니다. 실제 값으로 교체하세요.

## 배포 — GitHub Pages

`ChadJung.github.io` 리포지토리(사용자 페이지)에 배포하는 구성입니다.
`vite.config.ts` 의 `base` 는 `/` 입니다.

### 자동 배포 (GitHub Actions)

1. 코드를 `ChadJung.github.io` 리포지토리의 `main` 브랜치에 push
2. GitHub 리포 → **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 설정
3. `main` push 시 `.github/workflows/deploy.yml` 가 자동으로 빌드 후 `https://chadjung.github.io/` 에 배포

### 프로젝트 페이지 리포로 옮길 경우

`<repo>` 이름의 일반 리포에 배포하려면 빌드 시 base 경로를 지정합니다.

```bash
VITE_BASE=/<repo>/ npm run build
```

워크플로우에서는 `npm run build` 스텝을 `VITE_BASE=/<repo>/ npm run build` 로 바꾸면 됩니다.
