# Github Search Engine
> Github에서 제공하는 REST API를 활용한 Github User 검색 서비스입니다.

## 목차

- [들어가며](#들어가며)

  - [프로젝트 소개](#1-프로젝트-소개)
  
  - [프로젝트 기능](#2-프로젝트-기능)
  
  - [사용기술](#3-사용기술)
    
- [실행화면](#실행화면)
  
- [API 목록](#api-목록)

- [후기](#후기)


## 들어가며
### 1. 프로젝트 소개

이 프로젝트는 Github에서 제공하는 REST API를 활용한 Github User 검색 서비스이며 

프로젝트를 통해 배우고 싶은것은 다음과 같습니다.

- 반응형 웹 구현

- 전역상태 관리를 위한 Zustand 사용

- 컴포넌트 재사용을 위한 합성 컴포넌트(Compound Component) 패턴 사용


### 2. 프로젝트 기능

프로젝트의 기능은 다음과 같습니다.

- User 검색 기능

- User 세부정보(Repository, Following/Follwers, 생성일, 최근업데이트 등) 표시

- User Github page 이동

- User Repository page 이동

### 3. 사용기술

- 프론트엔드
  
  - Javascript
  
  - React.js
 
  - Zustand (상태관리)
  
## 실행화면

## API 목록

> `https://api.github.com/search/users?q=${q}&per_page=${per_page}&page=${page}`

검색할 User를 입력하면 해당 User ID를 통해 UserList를 가져옵니다.

> `https://api.github.com/users/${username}`

username을 통해 해당 User의 세부정보를 가져옵니다.

> `https://api.github.com/users/${username}/repos?per_page=${per_page}&page=${page}`

username을 통해 해당 User의 Repository 정보를 가져옵니다.


## 후기
