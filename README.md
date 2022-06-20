# 심심할 때 노라라

22-1 벤처창업 웹 프로그래밍 4조 기말 과제입니다.

## How to init?

### 1. 해당 프로젝트 클론 후 의존성을 설치

```
npm install // 혹은
yarn
```

### 2. 프로젝트 구동

```
npm run start // 혹은
npm start // 혹은
yarn start
```

### 3. 작업

작업은 components에서 작은 컴포넌트 작업 후, page 폴더 내부 컴포넌트에서 합쳐주
시면 됩니다.

### 4. 라우팅 추가

App.js 파일의 Route를 통해 작업한 Page 컴포넌트를 추가해주시면 됩니다!

```
<Routes>
  <Route path='/' element={<Landing />} />
  <Route path='/*' element={<NotFound />} />
</Routes>
```

### 5. 협업

새로운 브랜치 파시기 전에 git pull origin master 로 마스터 브랜치 받고, 
`git checkout -b 새로운브랜치이름` 해서 작업하시면 큰 문제 없을 것 같아요!

### 6. 상태관리

전역 상태 관리의 필요성? - 추후에..

---

## 빌드, 배포

후에 함께... 배포 시 script에 추가?
`"build": "cross-env REACT_APP_API_URL="site URL" react-scripts start"`

## Api key 사용

입력: `.env` 파일에서 `REACT_APP_이름=사용할 키 이름`

사용: `process.env.REACT_APP_이름`으로 다른 파일에서 불러 올 수 있습니다.
