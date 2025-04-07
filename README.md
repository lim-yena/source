# source
iWeb 기반 CMS에서는 스타일과 스크립트를 페이지 내부에 인라인으로 삽입하여 관리하는 방식을 사용
이러한 구조는 코드의 중복 작성과 덮어쓰기 등의 충돌을 유발하고, 협업이나 유지보수에 큰 제약을 주는 비효율적인 개발환경으로 판단

이를 개선하기 위해, 팀원 각자가 외부 .js, .css 파일을 개별 GitHub 저장소에 관리하고,
해당 파일을 CMS 관리자 페이지의 상단 태그에 연결하여 역할 분담과 동시에 작업이 가능한 협업 환경을 구축
개선된 워크플로우를 바탕으로, 자주 사용하는 기능을 정리하고 팀 내에서 효율적으로 공유할 수 있도록 구성한 공통 코드 저장소

# 요약
기존 인라인 삽입 방식 → 외부 파일 관리로 구조 분리 및 충돌 방지
팀원별 기능 모듈화 및 GitHub를 통한 분산된 소스 관리 체계 도입
CMS 내에서도 버전 관리, 역할 분담, 병렬 개발이 가능한 협업 기반 구축
코드 중복과 혼선을 줄이고, 유지보수성과 재사용성 향상

# 무엇을 적으라는 걸까...