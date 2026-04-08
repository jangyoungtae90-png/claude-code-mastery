# .claude 디렉토리

이 디렉토리는 Claude Code와 관련된 로컬 설정 및 커스텀 규칙을 저장합니다.

## 파일 구조

```
.claude/
├── settings.json      # 프로젝트 설정 (개발 환경, 배포 설정 등)
├── hooks/             # Git 또는 커스텀 훅 저장소
├── rules/             # Claude Code 규칙 저장소
└── README.md          # 이 파일
```

## 각 파일의 역할

### settings.json
- 프로젝트 메타데이터 (이름, 설명, 언어)
- 개발 환경 설정 (포트, 서버 명령어)
- 스타일 프레임워크 정보 (Tailwind CSS 설정)
- 배포 플랫폼 정보

### hooks/
나중에 Git 훅이나 커스텀 훅이 필요하면 이 디렉토리에 추가합니다.

예:
- `pre-commit` - 커밋 전 검사
- `post-checkout` - 브랜치 전환 후 실행

### rules/
Claude Code의 커스텀 규칙을 저장합니다.

예:
- `naming-conventions.md` - 네이밍 규칙
- `code-style.md` - 코드 스타일 가이드

## 참고

- 이 디렉토리는 버전 관리 대상이 아닙니다 (필요시 `.gitignore`에 추가)
- 프로젝트별 로컬 설정만 저장합니다
- 민감한 정보(API 키, 토큰)는 여기에 저장하지 마세요
