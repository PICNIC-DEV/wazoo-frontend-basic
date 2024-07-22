1. git clone
2. npm install
3. 최상단 위치에 .gitignore 파일 생성 후 하단 내용 복사 붙여넣기
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# misc
.eslintcache
.eslintrc.cjs
.prettierrc.json
.gitignore
vite.config.js

# env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

4. 작업 시에는 master 브랜치 항상 git pull 을 통해 최신화 후 작업할 브랜치를 따로 파서 작업
5. 작업 완료 후에는 pull request 올려서 메인 브랜치에 병합
